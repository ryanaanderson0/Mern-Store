const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //Helps connect to MongoDb

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// uri is where the database is stored
const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

// // imports exercises & users routes
// const exercisesRouter = require("./routes/exercises"); 
// const usersRouter = require("./routes/users");

// // uses exercises & users routes
// app.use("/exercises", exercisesRouter); 
// app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
