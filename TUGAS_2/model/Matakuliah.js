const mongoose = require("mongoose");

const MatakuliahSchema = new mongoose.Schema({
  kode: { type: String, required: true },
  nama: { type: String, required: true },
  sks: { type: Number, required: true },
  dosen: { type: String, required: true }
}, {
  collection: 'MK' 
});

module.exports = mongoose.model("Matakuliah", MatakuliahSchema);
