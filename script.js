// Fungsi untuk menangani tautan internal
function scrollSmoothHandler(e) {
  e.preventDefault(); // Menghentikan perilaku default tautan
  const targetId = this.getAttribute("href").substring(1); // Mengambil id tujuan tanpa tanda "#" awal
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" }); // Menggulir ke elemen dengan efek scroll halus
  }
}

// Menambahkan event listener ke semua tautan internal
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener("click", scrollSmoothHandler);
});
