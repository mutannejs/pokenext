import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Card.module.css';
import PokemonImage from "./PokemonImage";

export default function Card({ pokemon }) {

    return (
        <div className={styles.card}>
            {/* a imagem do pokemon não está na API pokeapi, estamos buscando-as em uma CDN
                Para o Next não acusar um erro por estarmos usando dados de um domínio externo, devemos adicioná-lo nas configurações do next*/}
            <PokemonImage id={pokemon.id} name={pokemon.name} size={120} />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemons/${pokemon.id}/${pokemon.name}`}>Detalhes</Link>
        </div>
    )

}