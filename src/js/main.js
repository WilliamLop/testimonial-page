import { checks, cards } from './data.js';

function mostrarChecks() {
    const containerCheck = document.getElementById('checks-container');
    const checksHTML = checks.map(check => `
        <div class="flex items-center gap-3">
            <img class="" src="${check.image}" alt="${check.text}" />
            <p class="text-sm text-veryGray">${check.text}</p>
        </div>
    `).join('');
    containerCheck.innerHTML = checksHTML;
}

function mostrarCards() {

    const containerCards = document.getElementById('container-cards');

    const cardsHTML = cards.map((check,i) => {

        let starArray = Array(5).fill();
        let starHTML = starArray.map(() => `<img class="" src="${check.star}"
        width=${25} height=${20}
        />`).join("");

        // Aplica la clase 'place-content-start' a la primera tarjeta y 'place-content-end' a las demás

        let alignmentClass = i % 2 === 0 ? 'place-content-end': 'place-content-start';

        return `
            <div class="grid ${alignmentClass}">
                <div class="w-[285px] sm:w-[320px] md:w-[340px] bg-veryWhite drop-shadow-md grid gap-2 
                py-8 pl-6 lg:pl-10 rounded-2xl box-border lg:w-[350px]">
                    <figure class="flex items-center gap-2 lg:gap-5">
                        <img class="" src="${check.image}" width=${90} height=${70}/>
                        <div class="flex lg:gap-[6px]">
                            ${starHTML}
                        </div>
                    </figure>
                    <h2 class="text-veryDark font-medium mt-2">${check.title}</h2>
                    <p class="text-veryGray w-[250px]
                    text-sm leading-6">${check.text}</p>
                </div>
            </div>
        `
    });
    containerCards.innerHTML = cardsHTML;

}


document.addEventListener('DOMContentLoaded', mostrarChecks);
mostrarCards();