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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY lipseste din environment variables!');
    return res.status(500).json({ success: false, message: 'Configuratie server incompleta.' });
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        phone,
        subject,
        message,
        from_name: 'Aether Web Portfolio',
        botcheck: false,
      }),
    });

    // Citim raspunsul ca text intai, apoi incercam sa il parsam ca JSON
    const rawText = await response.text();

    let result;
    try {
      result = JSON.parse(rawText);
    } catch {
      console.error('Web3Forms a returnat un raspuns non-JSON:', rawText.substring(0, 200));
      return res.status(500).json({ success: false, message: 'Eroare la serviciul de email.' });
    }

    if (result.success) {
      return res.status(200).json({ success: true });
    } else {
      console.error('Web3Forms eroare:', result.message);
      return res.status(500).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error('Eroare la trimiterea formularului:', error.message);
    return res.status(500).json({ success: false, message: 'Eroare interna de server.' });
  }
}

