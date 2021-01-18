// header javascript code //
let humbergar = document.querySelector('.humbarger-box');
let mainMenu= document.querySelector('.nav');

humbergar.addEventListener('click',()=>{
    humbergar.classList.toggle('show');
    mainMenu.classList.toggle('show-menu');

});