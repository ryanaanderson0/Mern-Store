const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //MongoDB require

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// uri is where the database is stored
const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

//Connect to Mongo DB
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

// imports exercises & user routes
const productRouter = require("./routes/product"); 
const userRouter = require("./routes/user");

// uses product & user routes
app.use("/product", productRouter); 
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
