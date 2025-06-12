const Matakuliah = require('../model/Matakuliah');

async function deleteMatkul() {
  await Matakuliah.deleteOne({ kode: 'IF303' });
  console.log('🗑️ Delete berhasil');
}

module.exports = deleteMatkul;
