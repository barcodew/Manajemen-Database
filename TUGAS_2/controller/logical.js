const Matakuliah = require('../model/Matakuliah');

async function logicalQuery() {
  const result = await Matakuliah.find({
    $or: [{ sks: 2 }, { dosen: /rina/i }]
  });
  console.log('🔍 Logical Query:', result);
}

module.exports = logicalQuery;
