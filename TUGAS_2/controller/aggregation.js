const Matakuliah = require('../model/Matakuliah');

async function aggregateSKS() {
  const result = await Matakuliah.aggregate([
    { $group: { _id: null, totalSKS: { $sum: "$sks" } } }
  ]);
  console.log('📊 Total SKS:', result);
}

module.exports = aggregateSKS;
