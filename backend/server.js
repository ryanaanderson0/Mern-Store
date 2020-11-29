const express = requre("express")// Initializes Express 
const cors = require("cors");
const mongoose = require("mongoose"); //Helps connect to MongoDb

require("dotenv").config(); //Configures environment variables to the dotenv file

//Creates Express server--
const app = express();
const port = process.env.PORT || 5000; //initializes port 5000

// Cors middleware, allows us to parse Json
app.use(cors());
app.use(express.json());

// URI connecting to the Mern-Store MongoDB database by setting environment variable
const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

//Connects to server ("listening on port 5000")
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});