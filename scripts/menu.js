const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

function openMenu() {
    menu.classList.add('menu-hidden')
}

function closeMenu() {
    menu.classList.remove('menu-hidden')
}

btnMenu.addEventListener('click', openMenu);

document.body.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target != btnMenu) closeMenu();
})

btnMenu.addEventListener('click', (ev) => {
	let target = ev.target;
	if(target != btnMenu) closeMenu();
})