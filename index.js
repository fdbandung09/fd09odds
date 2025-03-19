const express = require("express");
const app = express();
const port = 3000;

// Set EJS sebagai template engine
app.set("view engine", "ejs");

// Route untuk dashboard
app.get("/", (req, res) => {
  res.render("dashboard", { title: "Dashboard Monitoring Pengiriman" });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
