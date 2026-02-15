'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();



    document.querySelectorAll('.points .item').forEach((item) => {
        const point = item.querySelector('.point');
        point.addEventListener('click', () => {
            point.classList.toggle('active');
            item.querySelector('.point__hint').classList.toggle('active');
        });
    });


    document.addEventListener('click', (event) => {
        const isInsidePoints = event.target.closest('.points .item');
        if (!isInsidePoints) {
            document.querySelectorAll('.points .item .point').forEach((point) => {
                point.classList.remove('active');
            });
            document.querySelectorAll('.points .item .point__hint').forEach((hint) => {
                hint.classList.remove('active');
            });
        }
    });




    const svgElements = {
        'header__point-one': document.querySelector('.flower__pot-one svg'),
        'header__point-two': document.querySelector('.flower__pot-two svg'),
        'header__point-three': document.querySelector('.flower__pot-three svg'),
        'header__point-four': document.querySelector('.flower__pot-four svg'),
    };

    const colorMap = {
        'radio__one': '#E58411',
        'radio__two': '#00D6C9',
        'radio__three': '#7C7C7C',
    };

    const updateSvgColor = (radio) => {
        const headerPoint = radio.closest('[class^="header__point-"]');
        if (!headerPoint) return;

        const svg = svgElements[headerPoint.classList[0]];
        const pointItem = headerPoint.querySelector('.point span');
        if (!svg || !pointItem) return;

        const color = colorMap[radio.classList[0]];
        if (color && radio.checked) {
            svg.querySelector('path').setAttribute('fill', color);
             pointItem.style.backgroundColor = color;
        }
    };

    document.querySelectorAll('.point__hint-btns input').forEach((radio) => {
        radio.addEventListener('change', () => updateSvgColor(radio));
    });

});



