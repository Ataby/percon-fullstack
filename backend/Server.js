const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDoRoute.js");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected mongodb port"))
  .catch((err) => console.error("Could not connect to mongodb:", err));

  app.use(routes)
app.listen(PORT, () => console.log("listening on port:", PORT));
