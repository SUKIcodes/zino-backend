const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/taskRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://sunnyking-telco.onrender.com"],
  })
);

app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Database connected...");
});
