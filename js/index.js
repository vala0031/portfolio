const Hamburguer = document.querySelector('.nav-btn')
const Menu = document.querySelectorAll('.nav--link')

Hamburguer.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

Menu.forEach(link => {
link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')})
})
