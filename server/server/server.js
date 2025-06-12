const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));


app.get("/api/products", (req, res) => {
  res.json([{ name: "Product 1" }, { name: "Product 2" }]);
});

app.listen(3000, () => console.log("Server running on port 3000"));
