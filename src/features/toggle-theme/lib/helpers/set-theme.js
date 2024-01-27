export function setTheme(theme) {
	const htmlElement = document.querySelector('html');
	htmlElement.classList.value = '';
	htmlElement.classList.add(theme);
}

export function isDarkModeSet() {
	return (
		document.querySelector('html').classList.contains('dark-mode') ||
		document.querySelector('html').classList.contains('dark-mode-darker')
	);
}
