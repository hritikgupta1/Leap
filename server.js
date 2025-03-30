const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Transporter (Replace with your email credentials)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contactinfo353@gmail.com", // Replace with your email
        pass: "iujp qspl vqww uvke"  // Replace with your password or app password
    }
});

// Handle Form Submission
app.post("/send", (req, res) => {
    const { name, email,Mobile, message } = req.body;
    res.json({ message: "Message sent successfully!" }  );

    const mailOptions = {
        from: email,
        to: "hritikgupta056@gmail.com", // Where you receive emails
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMobile No.: ${Mobile}\nMessage: ${message}`
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: "Error sending message" });
        }
        // res.json({ message: "Message sent successfully!" }  );
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
