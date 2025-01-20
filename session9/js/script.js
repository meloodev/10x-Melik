'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    const countries = [
        { icon: "./img/flags/georgia.png", code: "+995" },
        { icon: "./img/flags/armenia.png", code: "+374" },
        { icon: "./img/flags/azerbaijan.png", code: "+994" },
        { icon: "./img/flags/france.png", code: "+33" },
        { icon: "./img/flags/germany.png", code: "+49" },
        { icon: "./img/flags/italy.png", code: "+39" },
        { icon: "./img/flags/kazakhstan.png", code: "+7" },
        { icon: "./img/flags/poland.png", code: "+48" },
        { icon: "./img/flags/turkey.png", code: "+90" },
        { icon: "./img/flags/ukraine.png", code: "+380" }
    ]

    const phoneBtn = document.querySelector(".form__phone-input button");
    const countryFlag = document.querySelector(".form__phone-input button .country__flag img");
    const phoneMenu = document.querySelector(".form__phone-input .form__countries");
    const body = document.querySelector("body");
    const countriesList = document.querySelector(".form__phone .form__countries");
    const countryCode = document.querySelector(".form__phone-input button .country__code");
    const expiry = document.querySelector('form .form__expiry');




    phoneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        phoneMenu.classList.toggle('active');
    });

    body.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('button')) {
            phoneMenu.classList.remove('active');
        }
    });



    const createCountryListItem = (country) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <img src="${country.icon}" alt="${country.code} flag">
          <span>${country.code}</span>
        `;
        return listItem;
    };


    const renderCountries = () => {

        const fragment = document.createDocumentFragment();
        countries.forEach((country) => {
            const listItem = createCountryListItem(country);
            fragment.appendChild(listItem);
        });

        countriesList.innerHTML = "";
        countriesList.appendChild(fragment);
    };

    renderCountries();

    countriesList.addEventListener('click', (e) => {
        const target = e.target.closest('li');
        if (target) {
            const code = target.querySelector('span').textContent;
            const img = target.querySelector('img').src;
            countryCode.textContent = code;
            countryFlag.src = img;
            phoneBtn.setAttribute('data-code', code);

        }
    });
    //   

    
    expiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 2 && value.indexOf('/') === -1) {
            value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
        }
        if (value.length > 7) {
            value = value.slice(0, 7);
        }
        e.target.value = value;
    });




});