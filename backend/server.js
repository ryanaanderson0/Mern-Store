import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoute from './routes/productRoute.js'

dotenv.config()

//Connect to mongoDB function call
connectDB()

const app = express();

//initializing port with dotenv 
const port = process.env.PORT || 8080;

// uri is where the database is stored
const uri = process.env.ATLAS_URI; 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!')
})


//anything that uses api/products will be linked to productRoute
app.use('/api/product', productRoute)


// // imports exercises & user routes
// const productRouter = require("./routes/product"); 
// const userRouter = require("./routes/user");

// // uses product & user routes
// app.use("/product", productRouter); 
// app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port: ${port}`.orange);
});
