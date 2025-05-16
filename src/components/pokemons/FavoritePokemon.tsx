const getLocalStoragePokemons = () => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  ) 
  
  return favoritePokemons;
}





export const FavoritePokemon = () => {


    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">

        </div>
    )
}