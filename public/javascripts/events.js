const hamBurger = document.getElementById('hamburger')
const sideBar = document.querySelector('.sidebar')

hamBurger.addEventListener('click', ()=>{
    sideBar.classList.toggle('mobile-toggle')
})