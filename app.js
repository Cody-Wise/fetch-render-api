// import functions

import { getPokedex, getStarWarsPeople } from './fetch-utils.js';

// grab DOM elements

const template = document.querySelector('#template');
const selectEl = document.querySelector('select');

const list = document.querySelector('#list');
const errorElement = document.querySelector('#error-message');
const audio = document.querySelector('audio');
const offButton = document.querySelector('#stop');

async function loadPokedex() {
    const pokedex = await getPokedex();

    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const title = clone.querySelector('h2');

        const name = clone.querySelector('h3');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h4');
        audio.play();

        title.textContent = 'Pokemon Characters';

        name.textContent = 'Name: ' + pokemon.pokemon;

        type.textContent = 'Type: ' + pokemon.type_1;

        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}

async function loadStarWars() {
    
    const starWars = await getStarWarsPeople();
    
    list.classList.add('star-wars');

    for (let person of starWars) {
        
        const clone = template.content.cloneNode(true);

        const title = clone.querySelector('h2');

        const name = clone.querySelector('h3');
    
        const type = clone.querySelector('h4');
    
        audio.play();

        title.textContent = 'Star Wars Characters';

        name.textContent = ' Name: ' + person.name;

        type.textContent = ' Hair color: ' + person.hair_color;

        /// 6. Append the clone to the list element
        list.appendChild(clone);

    
    }
}

// loadPokedex();

// set event listeners 
selectEl.addEventListener('change', async(event) => {
    const selected = event.target.value;
    list.classList.remove('star-wars', 'pokemon');

    if (selected === 'none'){
        list.innerHTML = '';
        const p = document.createElement('p');
        p.textContent = 'please select and API';

        errorElement.appendChild(p);
    } else if (selected === 'pokemon') {
        audio.src = './assets/pokemon.wav';
    
        list.innerHTML = '';
        errorElement.innerHTML = '';

        await loadPokedex();

    } else if (selected === 'star-wars') {
        audio.src = './assets/star-wars.wav';
    
    
            
        list.innerHTML = '';
        errorElement.innerHTML = '';
        await loadStarWars();
    }

});

offButton.addEventListener('click', () => { 
    audio.pause();
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
