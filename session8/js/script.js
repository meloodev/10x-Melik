'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const sliderContent = document.querySelector('.main__items');
  const prevButton = document.querySelector('.arrow__left');
  const nextButton = document.querySelector('.arrow__right');

  let currentOffset = 0;
  const slideWidth = 294;
  const step = slideWidth;


  prevButton.addEventListener('click', () => {
    currentOffset = Math.min(currentOffset + step, 0);
    sliderContent.style.transform = `translateX(${currentOffset}px)`;

  });

  nextButton.addEventListener('click', () => {
    const maxOffset = -sliderContent.scrollWidth + document.querySelector('.main__items').clientWidth;
    currentOffset = Math.max(currentOffset - step, maxOffset);
    sliderContent.style.transform = `translateX(${currentOffset}px)`;
  });

  const items = document.querySelectorAll('.header__inner-items .header__inner-item');
  const vac = document.querySelectorAll('.main__items .main__item');

  function removeActive(items) {
    items.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
  }

  function hideElement(elem, individual) {
    elem.forEach((item) => {
      item.style.removeProperty('display');
    });

    elem.forEach((item) => {



      if (individual === 'man') {
        if (item.classList.contains('woman') || item.classList.contains('child')) {
          item.style.display = "none";
        }
      }

      if (individual === 'woman') {
        if (item.classList.contains('man') || item.classList.contains('child')) {
          item.style.display = "none";
        }
      }

      if (individual === 'child') {
        if (item.classList.contains('man') || item.classList.contains('woman')) {
          item.style.display = "none";
        }
      }
    });
  }


  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.target;
      if (item.contains(target)) {
        removeActive(items);
        item.classList.add('active');
        sliderContent.style.transform = `translateX(${0}px)`;

        const person = target.closest('.header__inner-item').getAttribute('data-value');
        if (person === 'man') {
          hideElement(vac, person);
        }

        if (person === 'woman') {
          hideElement(vac, person);
        }

        if (person === 'child') {
          hideElement(vac, person);
        }
      }
    });
  });

});