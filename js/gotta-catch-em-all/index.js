/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
const form = document.querySelector("form");
const checkboxes = [...document.querySelectorAll("#form-filters label input")]
const pokemonNameInput = document.querySelector("#pokemon-name")



function renderPokemons(pokemons) {
  while (pokemonsContainer.firstChild) {
    pokemonsContainer.removeChild(pokemonsContainer.firstChild);
  }

  // uzupełnij tutaj
  pokemons.forEach((pokemon) => {
      const pokemonDiv = document.createElement("div");
      const pokemonH2 = document.createElement("h2");
      const pokemonImage = document.createElement("img");
      const pokemonTypesSpan = document.createElement("span");
      pokemonDiv.classList.add("pokemon")

      pokemonImage.src = pokemon.image
      pokemonH2.textContent = pokemon.name
      const pokemonTypes = pokemon.types.map(item => {
        return item.toUpperCase()
      })
      pokemonTypesSpan.textContent = pokemonTypes.join(", ");

      pokemonDiv.appendChild(pokemonH2)
      pokemonDiv.appendChild(pokemonImage)
      pokemonDiv.appendChild(pokemonTypesSpan)

      pokemonsContainer.appendChild(pokemonDiv);

  })
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(filterPokemons(pokemons));

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons ) {

  // filtrowanie po imieniu
  const nameInputText = pokemonNameInput.value.toLowerCase();

  const filtredByNamePokemons = pokemons.filter((item) => {
    return item.name.toLowerCase().includes(nameInputText);
   })

  // filtrowanie po typie
  const checkedBoxesId = checkboxes.filter((item) => {
    return item.checked
  }).map(item => item.id);

  console.log(checkedBoxesId)

  const filtredPokemons = filtredByNamePokemons.filter((item) => {
    for (let i = 0; i < item.types.length; i++) {
        if (checkedBoxesId.includes(item.types[i]) ) return true;
    }
  })

   return filtredPokemons
}



function submitForm(event) {
  event.preventDefault();


  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
 