function objek() {
  var laptop = {
    nama : "lenovo",
    harga : 3000000,
    spesifikasi : "core 17",
    tahun : 2017,

  }
  for (var x in laptop) {
  console.log(laptop[x]);
  }
}
objek();
