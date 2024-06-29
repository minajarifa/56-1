const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());
// practice
// Fg8FZdmehwY3eJK9

const uri = `mongodb://localhost:27017`;
// const uri = "mongodb+srv://practice:Fg8FZdmehwY3eJK9@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const coffeeCollections = client.db("56-1").collection("newCoffee");
    app.get("/newCoffee", async (req, res) => {
      const result = await coffeeCollections.find().toArray();
      res.send(result);
    });
    app.get("/newCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollections.findOne(query);
      res.send(result);
    });
    app.post("/newCoffee", async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollections.insertOne(coffee);
      res.send(result);
      // console.log('coffee',coffee);
    });

    app.delete("/newCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollections.deleteOne(query);
      res.send(result);
    });
    app.put("/newCoffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = {
        $set: {
          name: updatedCoffee.name,
          chef: updatedCoffee.chef,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo,
        },
      };
      const result = await coffeeCollections.updateOne(
        query,
        options,
        updatedCoffee
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Practice crud is running ");
});
app.listen(port, () => {
  console.log(`simple practice crud is running on port ${port}`);
});
