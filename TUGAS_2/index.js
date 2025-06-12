require('./koneksi');
console.log('__dirname:', __dirname);

const create = require('./controller/create');
const read = require('./controller/read');
const update = require('./controller/update');
const del = require('./controller/delete');
const comparison = require('./controller/comparison');
const logical = require('./controller/logical');
const bulk = require('./controller/bulkwrite');
const agg = require('./controller/aggregation');
const validate = require('./controller/validate');

async function runSemua() {
  // await create();
  await read();
  // await update();
  // await del();
  // await comparison();
  // await logical();
  // await bulk();
  // await agg();
  // await validate();
  process.exit();

  //jika mau run satu satu silahkan komen pake "//"
}

runSemua();
