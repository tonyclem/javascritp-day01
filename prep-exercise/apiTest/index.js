const poke_container = document.getElementById("poke_container");

const pokemons_number = 151;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
  const poke_card = document.createElement("div");
  poke_card.classList.add("poke_card");
  const name = pokemon.name;
  const pokeInnerHtml = ` 
        ${pokemon.id}. ${name}
    `;
  // imgage
  // const poke_image = document.createElement("img");
  // poke_image.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
  // poke_image.classList.add("poke_image");

  // poke_card.appendChild(poke_image);
  poke_card.innerHTML = pokeInnerHtml;
  poke_container.appendChild(poke_card);
}

fetchPokemons();

