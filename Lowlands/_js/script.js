/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



// declareren
var categorieknopje = document.querySelector(".categorie_balk li:nth-child(1) button");





function togglemenu (){
    
    var menu = document.querySelector('#categorie_dropdown');
    menu.classList.toggle('show');
      
}





categorieknopje.addEventListener('click', togglemenu);

