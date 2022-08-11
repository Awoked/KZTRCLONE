function isScrollEnd(container) {
    return container.scrollLeft + container.offsetWidth === container.scrollWidth;
}
function isScrollBegin(container) {
    return container.scrollLeft === 0;
}
function hasHorizontalScroll(container) {
    return container.scrollWidth > container.offsetWidth;
}

const scrollable = document.querySelector('.productSliderWrapper');
const container = document.querySelector('.productSlider');
const next = scrollable.querySelector('.next');
const prev = scrollable.querySelector('.prev');

next.addEventListener('click', () =>{
    container.scrollLeft += container.offsetWidth - 100;
});
prev.addEventListener('click', () =>{
    container.scrollLeft -= container.offsetWidth - 100;
});


function scrollControl() {
    if (hasHorizontalScroll(container)) {
        if (isScrollBegin(container)) {
            scrollable.classList.remove('sLeft');
        }
        else{
            scrollable.classList.add('sLeft');
        }
        
        if (isScrollEnd(container)) {
            scrollable.classList.remove('sRight');
        }else{
            scrollable.classList.add('sRight');
        }
    }
}

container.addEventListener('scroll', scrollControl);
scrollControl();

