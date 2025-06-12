const Matakuliah = require('../model/Matakuliah');

async function comparisonQuery() {
  const result = await Matakuliah.find({ sks: { $gt: 2 } });
  console.log('⚖️ SKS > 2:', result);
}

module.exports = comparisonQuery;
