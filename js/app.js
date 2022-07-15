window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

$('#nav-trigger').on('click',() => {
    $('.nav-mobile').slideToggle();
})

$(".projeto-item").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 1000,
    dots: true,
});