interface Pokemon {
  name: string;
  imgSrc?: string; // le ? rend le champ optionnel
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;