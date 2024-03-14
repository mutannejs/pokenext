import { notFound } from "next/navigation";

import PokemonImage from "@/components/PokemonImage";

import styles from '@/styles/Pokemon.module.css';

export const generateStaticParams = async() => {
    const maxPokemons = 151;
    const api_route = 'https://pokeapi.co/api/v2/pokemon/';

    const data = await fetch(`${api_route}/?limit=${maxPokemons}`)
        .then(resp => resp.json());

    data.results.forEach( (item, index) => {
        item.id = index + 1;
    } );

    return data.results.map((pokemon, index) => ({
        pokemon: [
            (index + 1).toString(),
            pokemon.name
        ]
    }));
}

export const dynamicParams = true; // cria dinamicamente as páginas estáticas dos pokemons até o limite definifo (251), mas permite renderizar páginas além desse limite ao receber um acesso

function convertName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export async function generateMetadata({params}) {
    if (params.pokemon[1]) {
        return {
            title: convertName(params.pokemon[1])
        }
    }
}

export default async function Pokemon({ params }) {

    const id = params.pokemon[0];
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!resp.ok) {
        notFound();
    }

    const pokemon = await resp.json();

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <PokemonImage id={pokemon.id} name={pokemon.name} size={200} />
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