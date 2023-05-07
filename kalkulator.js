const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

function tambah() {
  const hasilTambah = parseFloat(angka1.value) + parseFloat(angka2.value);
  hasil.value = hasilTambah;
}

function kurang() {
  const hasilKurang = parseFloat(angka1.value) - parseFloat(angka2.value);
  hasil.value = hasilKurang;
}

function kali() {
  const hasilKali = parseFloat(angka1.value) * parseFloat(angka2.value);
  hasil.value = hasilKali;
}

function bagi() {
  const hasilBagi = parseFloat(angka1.value) / parseFloat(angka2.value);
  hasil.value = hasilBagi;
}

function reset() {
  angka1.value = "";
  angka2.value = "";
  hasil.value = "";
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const operator = button.textContent;
    const resetBtn = document.getElementById("reset");

    resetBtn.addEventListener("click", reset);

    switch (operator) {
      case "+":
        tambah();
        break;
      case "-":
        kurang();
        break;
      case "*":
        kali();
        break;
      case "/":
        bagi();
        break;
      default:
        break;
    }
  });
});
