document.addEventListener('DOMContentLoaded', () => {
    const cardItems = document.querySelector('.cards__items');
    const inputValue = document.querySelector('.page__header input');


    let allCountries = [];
    let pagination = 20;
    let currentIndex = 0;
    let filter = false;


    async function getData() {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');

            if (!response.ok) {
                throw new Error('Error fetching data');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('An error occurred:', error);
            return [];
        }
    }


    // async function getCountries() {
    //     return await getData();
    // }

    function render(countries) {
        let dataHtml = '';
        countries.forEach((item) => {
            let country = item?.name?.common ? item.name.common : '';
            let googleMapsLink = item?.maps?.googleMaps ? item.maps.googleMaps : '';
            let population = item?.population ? item.population : '';
            let capital = item?.capital ? item.capital[0] : '';
            let region = item?.region ? item.region : '';

            let flags = item?.flags?.svg ? item.flags.svg : '';
            let alt = item?.flags?.alt ? item.flags.alt : '';

            let inl = '';

            if (country === 'Nepal') {
                inl = 'style="Object-fit: contain;"';
            }

            if (country === 'Tonga') {
                inl = 'style="object-position: left;"';
            }

            if (country === 'Marshall Islands') {
                inl = 'style="object-position: left;"';
            }

            if (country === 'Belarus') {
                inl = 'style="object-position: left;"';
            }

            

            

            dataHtml += `
                        <div class="cards__item">
                        <a href="${googleMapsLink}" target="_blank">
                            <img src="${flags}" ${inl} alt="${alt}">
                        </a>

                        <div class="cards__item-descr">
                            <h2 class="cards__item-country">${country}</h2>
                            <ul>
                                <li>
                                    <strong>Population:</strong>
                                    <span class="cards__item-region">${population.toLocaleString()}</span>
                                </li>
                                <li>
                                    <strong>Region:</strong>
                                    <span class="cards__item-region">${region}</span>
                                </li>
                                <li>
                                    <strong>Capital:</strong>
                                    <span class="cards__item-capital">${capital}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                        `;

        });
        if (filter) {
            cardItems.innerHTML = dataHtml;
        } else {
            cardItems.innerHTML += dataHtml;
        }

    }


    inputValue.addEventListener('input', () => {
        filter = true;
        const value = inputValue.value.toLowerCase().trim();
        const filtered = allCountries.filter(item =>
            item.name.common.toLowerCase().includes(value)
        );
        if (filtered.length < 4) {
            cardItems.classList.add('format');
        } else {
            cardItems.classList.remove('format');
        }

        render(filtered);
    });


    getData().then(data => {
        allCountries = data;
        currentIndex = pagination;
        render(allCountries.slice(0, pagination));
    });

    window.addEventListener('scroll', () => {
        if (filter) return;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= fullHeight - 150) {
            if (currentIndex < allCountries.length) {
                const nextBatch = allCountries.slice(currentIndex, currentIndex + pagination);
                render(nextBatch);
                currentIndex += pagination;
            }
        }
    });

});  