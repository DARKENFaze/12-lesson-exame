const buttons = document.querySelectorAll(".location-button");
const sections = document.querySelectorAll(".content-section");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    sections.forEach((section) => (section.style.display = "none"));

    const target = button.getAttribute("data-section");
    document.getElementById(target).style.display = "block";
  });
});
