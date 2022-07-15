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
    autoPlaySpeed: 1000,
    dots: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false
          }
        },
        {
            breakpoint: 500,
            settings: {
              dots: false,
              arrows: false
            }
          },
    ]});