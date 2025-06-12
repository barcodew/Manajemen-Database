const Matakuliah = require('../model/Matakuliah');

async function updateMatkul() {
  await Matakuliah.updateOne(
    { kode: 'IF303' },
    { $set: { dosen: 'Ibu Nahyanur' } }
  );
  console.log('✏️ Update berhasil');
}

module.exports = updateMatkul;
