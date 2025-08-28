const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
// const { ObjectId } = require("mongodb");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://transpoease.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

//connect to data base
let db;

//get requests

app.get("/api/books", async (req, res) => {
  try {
    const books = await db.collection("books").find().toArray();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/animals", async (req, res) => {
  try {
    const animals = await db.collection("animals").find().toArray();

    // const formatted = animals.map((a) => ({
    //   ...a,
    //   _id: a._id.toString(),
    // }));

    //res.json(formatted);
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//post requests

app.post("/api/books", async (req, res) => {
  try {
    const book = req.body; // 👈 Get the book data from the request
    const result = await db.collection("books").insertOne(book);
    res.status(201).json({ message: "Book added", bookId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/animals", async (req, res) => {
  try {
    const animal = req.body; // 👈 Get the book data from the request
    const result = await db.collection("animals").insertOne(animal);
    res
      .status(201)
      .json({ message: "animals are dangerous", animalId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//put requests
// app.put("/api/animals/:id", async (req, res) => {
//   try {
//     const { id } = req.params; // get id from URL
//     const updatedData = req.body; // get new data from frontend

//     const result = await db.collection("animals").updateOne(
//       { _id: new ObjectId(id) }, // find by ID
//       { $set: updatedData } // update fields
//     );

//     res.json({
//       message: "Animal updated",
//       modifiedCount: result.modifiedCount,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

//extra apis
app.get("/api/hello", (req, res) => {
  res.json({ message: "Sign up weyan manussayo wada nodiiiiiiiiiii  yo" });
});

app.get("/api/hello_2", (req, res) => {
  res.json({ msg: "Log weyan ithinnn888888nnasfasf" });
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

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ Backend is running on port ${PORT}`);
    });
  }

  db = getDb();
});
