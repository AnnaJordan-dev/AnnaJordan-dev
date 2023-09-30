const sideMenu = document.querySelector('.side-menu')
const mainContent = document.querySelector('.main-content')

document.querySelector('.menu-toggle').addEventListener('click', () => {
    if (sideMenu.style.left === '-250px') {
        sideMenu.style.left = '0'
        mainContent.style.marginLeft = '250px'
    } else {
        sideMenu.style.left = '-250px'
        mainContent.style.marginLeft = '0'
    }
})
