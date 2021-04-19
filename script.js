// abrir função
function menuClicar(event){
    // constante para o menu hamburger
    const menuClicar = document.querySelector(".menuHamburger")

    //  constante para o menu LISTA
    const menu = document.querySelector(".menu")

    //  condições if else

    if(menu.style.display === 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none';
    }
    event.preventDefault()

    






}