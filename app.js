const downArrow = document.querySelector('#downArrow');
const main = document.querySelector('main');

const upButton = document.querySelector('#topButton');

const hamburgerMenu = document.querySelector('#hamburgerIcon');
const mobileMenu = document.querySelector('#mobileMenu');
let isVisible = false;

downArrow.addEventListener('click', ()=>{
    main.scrollIntoView();
});

upButton.addEventListener('click', ()=>{
    window.scroll({top:0, left: 0, behavior:'smooth'});
});

hamburgerMenu.addEventListener('click', ()=>{
    if(isVisible){
        mobileMenu.style.display = 'none';
        isVisible = false;
    }else{
        mobileMenu.style.display = 'block';
        isVisible = true;
    }
})