'use client'

import Image from "next/image";

export default function PokemonImage({ id, name, size }) {
    return (
        <Image
            src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${id}.svg`}
            width={size}
            height={size}
            alt={name}
            placeholder="blur"
            blurDataURL="/images/shadow.png"
        />
    )
}