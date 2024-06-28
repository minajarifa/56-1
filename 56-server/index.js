const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app= express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());
// practice
// Fg8FZdmehwY3eJK9

const uri =`mongodb://localhost:27017`
// const uri = "mongodb+srv://practice:Fg8FZdmehwY3eJK9@cluster0.63qrdth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
  res.send('Practice crud is running ')
})
app.listen(port,()=>{
    console.log(`simple practice crud is running on port ${port}`)
})






