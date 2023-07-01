require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student");

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  // res.send("Welcome to my home page");
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.use("/api/students", studentRoutes);

//connect to db
mongoose.connect(
  `mongodb+srv://kstanb:test@cluster0.l4e46fm.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const listening = () => {
  console.log(`Server listening at port ${3000}.`);
};

const server = app.listen(3000, listening);
