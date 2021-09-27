const menu = document.querySelector('.menu')
const pathSVG = document.querySelector('.path')

document.getElementById("btn-contact").addEventListener('click', toContact)
document.getElementById("btn-drop-menu").addEventListener('click', dropMenu)

function toContact() {
    window.location.href='#contacto'
}

function dropMenu() {
    menu.classList.contains('drop') ? pathSVG.setAttribute('d', 'M6 18L18 6M6 6l12 12') : pathSVG.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
    menu.classList.toggle('drop')
}


