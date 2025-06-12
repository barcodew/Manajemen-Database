const Matakuliah = require('../model/Matakuliah');

async function bulkWriteQuery() {
  await Matakuliah.bulkWrite([
    {
      insertOne: {
        document: { kode: 'IF401', nama: 'Kecerdasan Buatan', sks: 3, dosen: 'Ibu Nurhikma' }
      }
    },
    {
      updateOne: {
        filter: { kode: 'IF401' },
        update: { $set: { sks: 4 } }
      }
    }
  ]);
  console.log('📦 Bulk Write sukses');
}

module.exports = bulkWriteQuery;
