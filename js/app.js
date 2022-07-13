window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

$('#nav-trigger').on('click',() => {
    $('.nav-mobile').slideToggle();
})