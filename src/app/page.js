import Image from 'next/image';

import Card from '@/components/Card';

import styles from '@/styles/Home.module.css';

export default async function Home() {

  const maxPokemons = 151;//251;
  const api_route = 'https://pokeapi.co/api/v2/pokemon/';

  // data é um json com 4 atributos: count, next, previous e results (onde temos os pokemons, seu nome e uma url para suas características)
  const data = await fetch(`${api_route}/?limit=${maxPokemons}`)
    .then(resp => resp.json());

  // adiciona a propriedade id à cada pokemon, representando o número dele na pokedex
  // index começa em 0, mas o primeiro pokemon é número 1
  data.results.forEach( (item, index) => {
    item.id = index + 1;
  } );

  const pokemons = data.results;

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width={50} height={50} alt="PokeNext" />
      </div>
      <div className={styles.pokemon_container}>
        { pokemons.map( (pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
        ) ) }
      </div>
    </>
  );
}
