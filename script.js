document.querySelectorAll("#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pesan berhasil dikirim!");
    location.reload();
  });
