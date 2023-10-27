$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  
    });
});


// Adicione um evento de clique para alternar a exibição da lista no ícone do menu
document.querySelector('.menu-icon').addEventListener('click', function () {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('change');
});
