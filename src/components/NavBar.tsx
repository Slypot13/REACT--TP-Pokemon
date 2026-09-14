interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemonItem) => (
        <button
          key={pokemonItem.name}
          type="button"
          onClick={() => setPokemonName(pokemonItem.name)}
        >
          {pokemonItem.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
