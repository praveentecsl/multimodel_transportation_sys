const express = require("express");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ massage: "hello from express and praveen" });
});

app.post("/api/user", (req, res) => {
  const { name } = req.body;
  res.json({ greetin: `hello ,${name} praveen chandeepa ` });
});

app.listen(port, () => console.log("Backend is running on port 5000"));
