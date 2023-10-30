// Modal

// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal-2");
var modal3 = document.getElementById("myModal-3");
var modal4 = document.getElementById("myModal-4");
var modal5 = document.getElementById("myModal-5");
var modal6 = document.getElementById("myModal-6");
var modal7 = document.getElementById("myModal-7");
var modal8 = document.getElementById("myModal-8");
var modal9 = document.getElementById("myModal-9");

// Get the button that opens the modal
var btn = document.getElementById("button-a");
var btn2 = document.getElementById("button-b");
var btn3 = document.getElementById("button-c");
var btn4 = document.getElementById("button-d");
var btn5 = document.getElementById("button-e");
var btn6 = document.getElementById("button-f");
var btn7 = document.getElementById("button-g");
var btn8 = document.getElementById("button-h");
var btn9 = document.getElementById("button-i");

// Get the <span> element that closes the modal
var close1 = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close2")[0];
var close3 = document.getElementsByClassName("close3")[0];
var close4 = document.getElementsByClassName("close4")[0];
var close5 = document.getElementsByClassName("close5")[0];
var close6 = document.getElementsByClassName("close6")[0];
var close7 = document.getElementsByClassName("close7")[0];
var close8 = document.getElementsByClassName("close8")[0];
var close9 = document.getElementsByClassName("close9")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal2.style.display = "block";
};

btn3.onclick = function () {
  modal3.style.display = "block";
};

btn4.onclick = function () {
  modal4.style.display = "block";
};

btn5.onclick = function () {
  modal5.style.display = "block";
};

btn6.onclick = function () {
  modal6.style.display = "block";
};

btn7.onclick = function () {
  modal7.style.display = "block";
};

btn8.onclick = function () {
  modal8.style.display = "block";
};

btn9.onclick = function () {
  modal9.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
close1.onclick = function () {
  modal.style.display = "none";
};

close2.onclick = function () {
  modal2.style.display = "none";
};

close3.onclick = function () {
  modal3.style.display = "none";
};

close4.onclick = function () {
  modal4.style.display = "none";
};

close5.onclick = function () {
  modal5.style.display = "none";
};

close6.onclick = function () {
  modal6.style.display = "none";
};

close7.onclick = function () {
  modal7.style.display = "none";
};

close8.onclick = function () {
  modal8.style.display = "none";
};
close9.onclick = function () {
  modal9.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == modal3) {
    modal3.style.display = "none";
  }

  if (event.target == modal4) {
    modal4.style.display = "none";
  }

  if (event.target == modal5) {
    modal5.style.display = "none";
  }

  if (event.target == modal6) {
    modal6.style.display = "none";
  }

  if (event.target == modal7) {
    modal7.style.display = "none";
  }

  if (event.target == modal8) {
    modal8.style.display = "none";
  }

  if (event.target == modal9) {
    modal9.style.display = "none";
  }
};

// slide bar

// Menggunakan library swepper untuk membuat efek card slider
var swiper = new Swiper(".slide-content", {
  // Menentukan jumlah slide yang terlihat secara bersamaan
  slidesPreview: 1,
  // Mengatur jarak antara card slider
  spaceBetween: 25,
  // Menentukan pengelompokan jumlah slide
  slidesPerGroup: 1,
  // Efek loop untuk membuat slide kembali ke awal saat di geser di akhir
  loop: true,
  // Membuat slide yang aktif berada di tengah
  centerSlide: "true",
  // Efek fading untuk transisi antar slide
  fade: "true",
  // Membuat agar kursor dapat di tahan saat melakukan swipe
  grabCursoe: "true",

  // Membuat navigasi titik 3 di bawah slider card sebagai penanda page
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
