import Image from "next/image";

import styles from '@/styles/Pokemon.module.css';

export const generateStaticParams = async() => {
    const maxPokemons = 151; //251;
    const api_route = 'https://pokeapi.co/api/v2/pokemon/';

    const data = await fetch(`${api_route}/?limit=${maxPokemons}`)
        .then(resp => resp.json());

    data.results.forEach( (item, index) => {
        item.id = index + 1;
    } );

    return data.results.map((pokemon, index) => ({
        pokemonid: (index + 1).toString()
    }));
}

export const dynamicParams = false;

export default async function Pokemon({ params }) {

    const id = params.pokemonid;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await resp.json();

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image
                src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={200}
                height={200}
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    { pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    )) }
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}