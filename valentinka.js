document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var lid = document.querySelector('.lid');
    var card = document.querySelector('.card');
    var heartsGif = document.querySelector('.hearts-gif');

    container.addEventListener('click', function () {
        lid.classList.remove('initial');
        card.classList.remove('initial');
        lid.style.animation = 'open 2s forwards';
        card.style.animation = 'slide 0.2s 0.5s forwards';
        heartsGif.style.display = 'block';
    });

    container.addEventListener('touchstart', function () {
        lid.classList.remove('initial');
        card.classList.remove('initial');
        lid.style.animation = 'open 2s forwards';
        card.style.animation = 'slide 0.2s 0.5s forwards';
        heartsGif.style.display = 'block';
    });
});
