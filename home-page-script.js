// Sticky Nav //

const nav = document.querySelector(".flexNav");
const topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

// Cascading Menu Bar //

const menu =document.querySelector('.toggleNav');
const menuList = document.querySelector('.menuList');
let opened = false;

function toggleMenuItems() {
    if(!opened) {
        menuList.classList.add('open');
        opened = true;
    } else {
        menuList.classList.remove('open');
        opened = false;
    }    
}

menu.addEventListener('click', toggleMenuItems);

// Follow Along Header Shadow //

const header = document.querySelector('.head');
const text = header.querySelector('h1');
const walk = 25; //px

function shadow(e) {
    const width = header.offsetWidth;
    const height = header.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = - Math.round((x / width * walk) - (walk / 2));
    const yWalk = - Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(110, 56, 4, 0.336)`;
   
}   

header.addEventListener('mousemove', shadow);
