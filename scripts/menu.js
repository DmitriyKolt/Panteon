const hamBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

function toggleMenu() {
	menu.classList.toggle('menu-hidden');
	hamBtn.classList.toggle('menu-btn-hid');
}

function closeMenu() {
	menu.classList.remove('menu-hidden');
	hamBtn.classList.remove('menu-btn-hid');
}

hamBtn.addEventListener('click', toggleMenu);
document.body.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target != hamBtn) closeMenu();
})