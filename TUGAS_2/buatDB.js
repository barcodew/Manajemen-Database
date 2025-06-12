require('./koneksi');
const Matakuliah = require('./model/Matakuliah');

async function buatDatabaseDanCollection() {
  // Masukkan 1 data agar collection 'MK' benar-benar tercipta
  const matkul = new Matakuliah({
    kode: 'IF100',
    nama: 'Pengantar Informatika',
    sks: 2,
    dosen: 'Ismail Majid'
  });

  try {
    const hasil = await matkul.save();
    console.log("✅ Koleksi 'MK' dibuat dan data disimpan:", hasil);
  } catch (err) {
    console.error("❌ Gagal membuat koleksi:", err.message);
  } finally {
    process.exit();
  }
}

buatDatabaseDanCollection();
