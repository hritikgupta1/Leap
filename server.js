const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Change "public" if needed

// Email Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contactinfo353@gmail.com",
        pass: "iujp qspl vqww uvke" // Use an App Password for security!
    }
});

// Serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); // Ensure index.html exists in your directory
});

// Handle Form Submission
app.post("/send", (req, res) => {
    const { name, email, Mobile, message } = req.body;
    res.json({ message: "Message sent successfully!" });
    const mailOptions = {
        from: email,
        to: "info@lillyevents.in",
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMobile No.: ${Mobile}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending mail:", error);
            return res.status(500).json({ message: "Error sending message" });
        }
        
    });
});

const corsOptions = {
    origin: "*", // Allow all origins (or replace with your domain)
    methods: "GET,POST,OPTIONS",
    allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
