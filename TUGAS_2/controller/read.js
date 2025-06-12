const Matakuliah = require('../model/Matakuliah');

async function readMatkul() {
  const data = await Matakuliah.find();
  console.log('📄 Data mata kuliah:', data);
}

module.exports = readMatkul;
