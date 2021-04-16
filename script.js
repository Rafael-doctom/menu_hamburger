function clicarMenu(event){
 

    const menuLista = document.getElementById("navMenu")


    if(menuLista.style.display=== 'none'){
        menuLista.style.display = 'block'
    }else{
        menuLista.style.display = 'block';
    }

    event.preventDefault();
}