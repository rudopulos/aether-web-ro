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

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY, // cheia e ascunsa, niciodata in browser
        name,
        email,
        phone,
        subject,
        message,
        from_name: 'Aether Web Portfolio',
        botcheck: false,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Eroare la trimiterea formularului:', error);
    return res.status(500).json({ success: false, message: 'Eroare interna de server.' });
  }
}
