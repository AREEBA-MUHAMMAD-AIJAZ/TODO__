const mongoose = require("mongoose");

async function dbConnection(req, res) {
  try {
    await mongoose.connect(
      "mongodb+srv://AreebaAijaz:Todo3333@cluster0.lxuidgl.mongodb.net/"
    );
    console.log("connected");
  } catch (error) {
    res.status(400).json({
      message: "not connected",
    });
  }
}
module.exports = dbConnection;