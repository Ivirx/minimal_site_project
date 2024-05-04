import './style.css';

const body = document.querySelector('body') as HTMLBodyElement;
const menuButton = document.querySelector('#menu-button') as HTMLButtonElement;
const openMenuButton = menuButton?.querySelector('#menu-open-button') as HTMLSpanElement;
const closeMenuButton = menuButton?.querySelector('#menu-close-button') as HTMLSpanElement;

const menu = document.querySelector('#menu') as HTMLDivElement;
const ul = menu?.querySelector('ul') as HTMLUListElement;
const ulHeight = ul?.clientHeight || 0;

function closeMenu(event: MouseEvent) {
	event.stopPropagation();

	if (menu.dataset.open === 'true') {
		// Closing the menu
		menu.style.height = `0px`;
		menu.dataset.open = 'false';
		ul.classList.toggle('invisible');

		openMenuButton.classList.remove('animate-fade-out');
		openMenuButton.classList.add('animate-fade-in');

		closeMenuButton.classList.remove('animate-fade-in');
		closeMenuButton.classList.add('animate-fade-out');

		return;
	}

	// Opening the menu
	menu.style.height = `${ulHeight}px`;
	menu.dataset.open = 'true';
	ul.classList.toggle('invisible');

	openMenuButton.classList.remove('animate-fade-in');
	openMenuButton.classList.add('animate-fade-out');

	closeMenuButton.classList.remove('animate-fade-out');
	closeMenuButton.classList.add('animate-fade-in');
}

menuButton?.addEventListener('click', closeMenu);
body?.addEventListener('click', (event) => {
	if ((event.target as HTMLElement)?.closest('#menu')) return;

	if (menu.dataset.open === 'true') {
		closeMenu(event);
	}
});
