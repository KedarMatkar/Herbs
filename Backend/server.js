import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import herbRoutes from "./routes/HerbRoutes.js";
import Herb from "./models/Herb.js"
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://matkaraditya007:aditya201602@dummycluster.uy7gn.mongodb.net/?retryWrites=true&w=majority&appName=DummyCluster";


config();
connectDB();

const app = express();
app.use(json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.use("/api/herbs", herbRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectDB() {
//   try {
//       await client.connect();
//       console.log("Connected to MongoDB Atlas!");
      
//       // Access a specific database
//       const db = client.db("dummydb");

//       // Example: Access a collection
//       const collection = db.collection("dummycollection");

//       // Example: Find one document
//       const user = await collection.findOne({});
//       console.log("Sample user:", user);

//   } catch (err) {
//       console.error("Error connecting to MongoDB:", err);
//   }
// }
// connectDB();