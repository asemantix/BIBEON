/* BIBEON — comportements de la page */
(function () {
  "use strict";

  /* --- menu du téléphone --- */
  var burger = document.querySelector(".burger");
  var menu = document.querySelector("#menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- année du copyright --- */
  var annee = document.querySelector("#annee");
  if (annee) annee.textContent = new Date().getFullYear();

  /* --- formulaire d'inscription ---
     À relier à votre outil d'e-mailing (Brevo, Mailchimp…) avant la mise en ligne.
     Pour l'instant, il confirme simplement la saisie sans rien envoyer.            */
  var form = document.querySelector("#form-mail");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var champ = form.querySelector("input[type=email]");
      var msg = form.querySelector(".form-message");
      var valeur = (champ.value || "").trim();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valeur)) {
        msg.textContent = "Merci de vérifier votre adresse e-mail.";
        champ.focus();
        return;
      }
      msg.textContent = "Merci ! Ce formulaire doit encore être relié à votre outil d'e-mailing.";
      form.reset();
    });
  }

  /* --- la vidéo ne tourne que lorsqu'elle est visible --- */
  var video = document.querySelector(".video-frame video");
  if (video && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src-loaded")) {
            video.setAttribute("src-loaded", "1");
            video.load();
          }
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(video);
  }
})();
