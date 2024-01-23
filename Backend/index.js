const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 1000;
const list = require("./routes/list");
const dbConnection = require("./Connection/conn");

const auth = require("./routes/Auth");
app.use(express.json());
app.use(cors());
dbConnection();

app.get("/", (req, res) => {
  res.send("server is running!");
});
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
