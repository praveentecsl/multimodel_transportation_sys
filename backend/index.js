const express = require("express");
const cors = require("cors");
const port = 5000;
const { connectToDb, getDb } = require('./db')

const app = express();
app.use(cors());
app.use(express.json());



//connect to data base
let db

connectToDb((err) =>{
  if(!err){
    app.listen(port, () => console.log("Backend is running on port 5000"));
  }

  db = getDb

})



app.get("/api/hello", (req, res) => {
  res.json({ message: "Sign up weyan manussayo wada nodiiiiiiiiiii  yo" });
});

app.get("/api/hello_2", (req, res) => {
  res.json({ msg: "Log weyan ithinnnnnnnnnnnnnnnnnnasfasf" });
});

app.post("/api/user", (req, res) => {
  const { name } = req.body;
  res.json({ greetin: `hello ,${name} praveen chandeepa ` });
});

app.put("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  const { name } = req.body;

  res.json({ massage: `user ${userId} is updated to ${name}` });
});

app.delete("/api/user/:id", (req, res) => {
  const userId = req.params.id;

  res.json({ information: `your user_id ${userId} is delelted successfully` });
});


