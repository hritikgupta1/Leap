const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname))); // Change "public" to your folder name

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,index.html"));
});

app.listen(5500, "0.0.0.0", () => {
    console.log("Server is running on port 5500");
});
