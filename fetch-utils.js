export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

    const response = await fetch(url)

    const jsonResponse = await response.json()

    return json.results;
}

export async function getStarWarsPeople() {
    let url = 'https://swapi.dev/api/people';

    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}