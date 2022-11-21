require("dotenv").config();
const users = require("./routes/users");
const auth = require("./routes/auth");
const passwordReset = require("./routes/passwordReset");
const db = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

db();

app.use(express.json());
app.use(cors());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));