// import functions

import { getPokedex } from "./fetch-utils";

// grab DOM elements

const template = document.querySelector('#template');
const  selectEl = document.querySelector('select');

const list = document.querySelector('#list');

async function loadPokedex() {
    const pokedex = await getPokedex();

    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.textContent,cloneNode(true);

        const name = clone.querySelector('h2')
        const image = clone.querySelector('img')
        const type = clone.querySelector('h6');

        name.textContent = 'Name: ' + pokemon.pokemon;

        type.textContent = 'Type: ' + pokemon.type_1;

        image.sre = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}

loadPokedex();

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
