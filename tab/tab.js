// Modal

// Mendapatkan referensi ke elemen-elemen tab
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// Menambahkan event listener pada setiap tab link
tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Mendapatkan data-tab dari tab link yang diklik
    const tabId = tabLink.getAttribute("data-tab");

    // Menghapus kelas aktif dari semua tab link dan tab content
    tabLinks.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // Menambahkan kelas aktif pada tab link yang diklik dan tab content yang sesuai
    tabLink.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});
