$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  
    });
});


document.querySelector('.menu-icon').addEventListener('click', function () {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('change');
});

document.getElementById('.form').addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    alert("Feedback enviado com sucesso!");
    
  
    this.reset();
});