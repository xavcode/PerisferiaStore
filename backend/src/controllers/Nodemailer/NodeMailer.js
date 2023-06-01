const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    
  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Servidor de correo saliente (SMTP)
    port: 465, // Puerto del servidor de correo saliente (SMTP)
    secure: true, // Si el servidor de correo requiere una conexión segura (TLS/SSL)
    auth: {
      user: 'perisferiastore@gmail.com',
      pass: 'gcbmnzreonzcvewa',
    },
  });

  try {
    await transporter.verify();
    console.log("Ready for sending emails");
  } catch (error) {
    console.error("Error verifying email transporter:", error);
    return res.status(500).json({ error: "Error verifying email transporter" });
  }

  const mailOptions = {
    from: 'perisferiastore@gmail.com',
    to,
    subject,
    html: message,
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = { sendEmail };
