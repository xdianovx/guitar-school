$(function () {
    $('#courses__slider').slick({
        loop: true
    })
});

const burger = document.querySelector('#burger');

burger.addEventListener('click', function () {
    let dropdown = document.querySelector('.header__nav');
    dropdown.classList.toggle('active')
    burger.classList.toggle('active')
})


//Tabs
document.querySelector('.about__tabs_link').classList.add('active');
document.querySelector('.about__tab').classList.add('active');

function selectTabContent(e) {

    let target = e.target.dataset.targetYear;
    document.querySelectorAll('.about__tabs_link, .about__tab').forEach((el) => {
        el.classList.remove('active')
    });
    e.target.classList.add('active');
    document.querySelector('.' + target).classList.add('active');
}

document.querySelectorAll('.about__tabs_link').forEach(el => {
    el.addEventListener('click', selectTabContent)
})
