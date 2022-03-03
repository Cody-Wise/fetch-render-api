export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

    const response = await fetch(url)

    const jsonResponse = await response.json()

    return json.results;
}