import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/Card.module.css';

export default function Card({ pokemon }) {

    return (
        <div className={styles.card}>
            {/* a imagem do pokemon não está na API pokeapi, estamos buscando-as em uma CDN
                Para o Next não acusar um erro por estarmos usando dados de um domínio externo, devemos adicioná-lo nas configurações do next*/}
            <Image
                src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={120}
                height={120}
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemons/${pokemon.id}`}>Detalhes</Link>
        </div>
    )

}