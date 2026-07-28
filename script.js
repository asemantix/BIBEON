const menu = document.querySelector(".menu");
const nav = document.querySelector("#navlinks");
if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));
}
document.querySelector("#year").textContent = new Date().getFullYear();
const form = document.querySelector("#waitlist");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.querySelector(".message").textContent =
      "Merci ! Cette démonstration doit être reliée à votre outil d’e-mailing avant la mise en ligne.";
  });
}