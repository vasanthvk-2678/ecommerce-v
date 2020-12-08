
const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;
openBtn.addEventListener("click", () => {
    if(navLeft < 0){
        navigation.classList.add("show");
        nav.classList.add("show");
        document.body.classList.add("show");
    }
});

closeBtn.addEventListener("click", () => {
    if(navLeft < 0){
        navigation.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove("show");
    }
});


const navbar = document.querySelector(".navigation");
const navheight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    const scrollheight = window.pageYOffset;
    if(scrollheight > navheight)
    {
        navbar.classList.add("fix-nav");
    }
    else{
        navbar.classList.remove("fix-nav");
    }
});