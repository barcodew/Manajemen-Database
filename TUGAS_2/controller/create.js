const Matakuliah = require('../model/Matakuliah');

async function createMatkul() {
  const dataMatkul = [
    { kode: 'IF101', nama: 'Pengantar Teknologi Informasi', sks: 2, dosen: 'Ismail Majid' },
    { kode: 'IF102', nama: 'Algoritma dan Pemrograman', sks: 3, dosen: 'Wawan Firgiawan' },
    { kode: 'IF201', nama: 'Struktur Data', sks: 3, dosen: 'Amirul Asnan Cirua' },
    { kode: 'IF202', nama: 'Basis Data', sks: 3, dosen: 'Farid Wajidi' },
    { kode: 'IF301', nama: 'Jaringan Komputer', sks: 3, dosen: 'Adi Heri' },
    { kode: 'IF302', nama: 'Sistem Operasi', sks: 3, dosen: 'Imam Quraish' },
    { kode: 'IF303', nama: 'Pemrograman Web', sks: 3, dosen: 'Nuralamsyah' },
    { kode: 'IF304', nama: 'Rekayasa Perangkat Lunak', sks: 3, dosen: 'Musrifah' },
    { kode: 'IF305', nama: 'Kecerdasan Buatan', sks: 3, dosen: 'Sulfayanti' },
    { kode: 'IF401', nama: 'Manajemen Proyek Perangkat Lunak', sks: 3, dosen: 'Adam M Tanniewa' }
  ];

  try {
    await Matakuliah.insertMany(dataMatkul);
    console.log('✅ 10 data matakuliah berhasil ditambahkan');
  } catch (error) {
    console.error('❌ Gagal menambahkan data:', error);
  }
}

module.exports = createMatkul;
