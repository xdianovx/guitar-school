$(function(){




});

const burger = document.querySelector('#burger');

burger.addEventListener('click', function () {
    let dropdown = document.querySelector('.header__nav');
    dropdown.classList.toggle('active')
    burger.classList.toggle('active')
})


