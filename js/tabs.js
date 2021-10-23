const tabsMenu = document.querySelector('.tabs__items')
const tabLinks = tabsMenu.querySelectorAll('.tabs__item')
const tabs = document.querySelectorAll('.tabs__block')

tabsMenu.addEventListener('click', event => {
	clearActive()
	const index = Array.from(tabLinks).findIndex(elem => elem === event.target)
	event.target.classList.add('active')
	tabs[index].classList.add('active')
})

function clearActive() {
	for (const link of tabLinks) link.classList.remove('active')
	for (const tab of tabs) tab.classList.remove('active')
}