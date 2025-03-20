document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.querySelector(".navigation");

  function toggleMenu() {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("visible");

    menuBtn.setAttribute("aria-expanded", !isOpen);
    menuBtn.setAttribute("aria-label", isOpen ? "Open Menu" : "Close Menu");
    menuBtn.classList.toggle("open");
  }

  menuBtn.addEventListener("click", toggleMenu);

  //Close nav menu when user presses ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("visible")) {
      toggleMenu();
    }
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //Grab the inputs
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");

    if (!name.value.trim() || !email.value.trim()) {
      alert("Please fill out all fields");
      return;
    }

    if (!email.value.trim().includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    alert("Form submitted!");

    //Clear fields after successful submission
    name.value = "";
    email.value = "";
  });

window.onscroll = function () {
  if (window.scrollY > 200) {
    document.getElementById("back-to-top").style.display = "flex";
  }
};
