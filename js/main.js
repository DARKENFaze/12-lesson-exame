// Tugmalarni tanlaymiz
const buttons = document.querySelectorAll(".location-button");
const sections = document.querySelectorAll(".content-section");

// Har bir tugmaga klik eventini qo'shamiz
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Barcha tugmalarni faol bo'lmagan holatga qaytaramiz
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Bosilgan tugmani faol qilamiz
    button.classList.add("active");

    // Tanlangan bo'limni ko'rsatamiz
    const sectionId = button.getAttribute("data-section");
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});
