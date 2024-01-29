import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemons';
import React from 'react'



export const metadata = {
 title: 'Favorites',
 description: 'favorites pokemons',
};


export default  async function PokemonsPage() {


 

  return (
    <div className=' flex flex-col'>

<span className='text-5xl text-red-500'> Favorites pokemons <small className=' text-2xl text-blue-600'>Global states</small></span>

        <PokemonGrid pokemons={[]} />

    </div>
  )
}
