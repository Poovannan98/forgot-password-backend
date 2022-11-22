require("dotenv").config();
const users = require("./routes/users");
const auth = require("./routes/auth");
const passwordReset = require("./routes/passwordReset");
const db = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

// database connection
db();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));