import styles from "./PokemonCard.module.css";

interface PokemonProps {
  pokemon: {
    imgSrc?: string;
    name: string;
  };
}

function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img className={styles.img} src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption className={styles.figcaption}>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;