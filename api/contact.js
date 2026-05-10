import { Resend } from 'resend';

export default async function handler(req, res) {
  // Permite doar metoda POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Validare de baza pe server
  if (!name || !email || !message || !subject) {
    return res.status(400).json({ message: 'Campuri obligatorii lipsa.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error('RESEND_API_KEY lipseste din environment variables!');
    return res.status(500).json({ success: false, message: 'Configuratie server incompleta.' });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Aether Web Contact <onboarding@resend.dev>',
      to: ['contact@aetherweb.ro'],
      subject: `[Aether Web] ${subject} - de la ${name}`,
      html: `
        <h2>Mesaj nou de pe aetherweb.ro</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nespecificat'}</p>
        <p><strong>Subiect:</strong> ${subject}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
        <hr />
        <small>Trimis de pe aether-web-ro.vercel.app</small>
      `,
      reply_to: email,
    });

    if (error) {
      console.error('Resend eroare:', error);
      return res.status(500).json({ success: false, message: error.message });
    }

    console.log('Email trimis cu succes, ID:', data?.id);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Eroare la trimiterea emailului:', error.message);
    return res.status(500).json({ success: false, message: 'Eroare interna de server.' });
  }
}
