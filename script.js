const selectElement = function(element) {
    return document.querySelector(element);
};

let menutoggler = selectElement('.menutoggler');
let body = selectElement('body');

menutoggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

const skill_level = document.querySelectorAll('.skill-level');
const intro = document.querySelector('.my-intro');
const img = document.querySelector('.my-image');
const boxs = document.querySelectorAll('.box');


observer = new IntersectionObserver((entries) =>{

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'animate 1s cubic-bezier(1,0,0.5,1) forwards'
        }
        else {
            entry.target.style.animation = 'none';
        }
    });

});

introObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'animate-left 1s cubic-bezier(.36,.8,.55,1)'
        }
        else {
            entry.target.style.animation = 'none';
        }
    });

});

imgObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'animate-right 1s cubic-bezier(.36,.8,.55,1)'
        }
        else {
            entry.target.style.animation = 'none';
        }
    });

});

boxObserver = new IntersectionObserver((entries) =>{

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'animate-up 1s cubic-bezier(.36,.8,.55,1) 0.2s'
        }
        else {
            entry.target.style.animation = 'none';
        }
    });

});



skill_level.forEach(onebar => {
    observer.observe(onebar)
});
introObserver.observe(intro);
imgObserver.observe(img);
boxs.forEach(box => {
    boxObserver.observe(box);
});