const Matakuliah = require('../model/Matakuliah');

async function testValidation() {
  try {
    await new Matakuliah({ kode: 'IF999', nama: 'Salah', sks: 'tiga', dosen: 'Error' }).save();
  } catch (err) {
    console.log('❌ Validation Error:', err.message);
  }
}

module.exports = testValidation;
