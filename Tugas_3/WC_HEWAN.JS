use("hewan");

db.wc_hewan.insertMany([
  { id: "row1", nama: "Kucing", jenis: "Mamalia", habitat: "Rumah" },
  { id: "row2", nama: "Burung", jenis: "Aves", warna: "Merah" },
  { id: "row3", nama: "Ikan Paus", habitat: "Laut", ukuran: "Besar" },
  { id: "row4", nama: "Kelelawar", jenis: "Mamalia", aktif_malam: true },
  { id: "row5", nama: "Ular", jenis: "Reptil", berbisa: true }
]);
