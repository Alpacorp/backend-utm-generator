const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config");

const app = express();

// Database
dbConnection();

// Cors
app.use(cors());

// Public Directory
app.use(express.static("public"));

// Read and parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/audience", require("./routes/audience"));
app.use("/api/businessline", require("./routes/businessLine"));
app.use("/api/channel", require("./routes/channel"));
app.use("/api/medium", require("./routes/medium"));

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
