const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/akademik", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ Koneksi gagal:"));
db.once("open", () => {
  console.log("✅ Terhubung ke MongoDB - Database 'akademik'");
});

module.exports = db;
