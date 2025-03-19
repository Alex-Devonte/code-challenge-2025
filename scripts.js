document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');
	const nav = document.querySelector(".navigation");

  function toggleMenu() {
    nav.classList.toggle("visible");
	menuBtn.classList.toggle("open");
  }

  menuBtn.addEventListener("click", toggleMenu);
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});

window.onscroll = function () {
	if (window.scrollY > 500) {
		document.getElementById("back-to-top").style.display = "flex";
	}
};
