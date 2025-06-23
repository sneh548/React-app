const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy check
  if (email === "user@example.com" && password === "12345678") {
    res.json({ success: true, token: "abc123" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Example route
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ]);
});

// Start server
app.listen(3000, () => {
  console.log("Backend server running on http://localhost:3000");
});
