import React from 'react'
import { SimplePokemon } from '..'
import { PokemonCard } from './PokemonCard';


interface Prop{
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ( {pokemons}: Prop) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>

            {
                pokemons.map( pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                ) )
            }
        </div>
  )
}
