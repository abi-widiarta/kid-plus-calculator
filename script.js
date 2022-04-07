const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const equal = document.querySelector(".equal");
const hasilbox = document.querySelector(".hasil_box");
const clear = document.querySelector(".clear");
let hasil;

equal.addEventListener("click", function () {
  let vinput1 = input1.value;
  let vinput2 = input2.value;
  hasil = parseInt(vinput1) + parseInt(vinput2);
  console.log(hasil.type);
  if (hasil.type == undefined && hasil >= 0 && hasil <= 198) {
    hasilbox.innerHTML = hasil;
  } else {
    alert("Masukkin angka ya😊");
  }
});

clear.addEventListener("click", function () {
  input1.value = "";
  input2.value = "";
  hasilbox.innerHTML = "0";
});
