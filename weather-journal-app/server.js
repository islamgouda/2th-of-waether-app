// Setup empty JS object to act as endpoint for all routes
const express = require("express");
// Express to run server and routes
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// Start up an instance of app
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/* Dependencies */
/* Middleware*/
app.use(cors());
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(express.static("website"));
// Initialize the main project folder
projectData={};
const getAll=(req,res)=>{
  res.status(200).send(projectData)};
app.get("/all",getAll);
const postData = (req,res)=>{
    projectData = req.body;
    console.log("from post",projectData);
    res.status(200).send(projectData);
}
app.post("/add",postData);


// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  const port=8000;
  const hostname="127.0.0.1";
  const listening=()=>{console.log(`server running at port ${port}`);}
  app.listen(port,listening);