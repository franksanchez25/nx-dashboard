import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemons';
import React from 'react'



export const metadata = {
 title: '151',
 description: 'pokemons',
};

 const getPokemons = async (limit = 152  , offset = 0):Promise<SimplePokemon[]> => {

    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).
    then(res => res.json())

    const pokemons = data.results.map( pokemon => ({
        id:pokemon.url.split('/').at(-2)!,
        name:pokemon.name,
    }))

    
  return pokemons;
 }

export default  async function PokemonsPage() {


    const pokemons = await getPokemons();

  return (
    <div className=' flex flex-col'>

<span className='text-5xl text-red-500'> Listado de pokemons <small className=' text-2xl text-blue-600'>Estaticos</small></span>

        <PokemonGrid pokemons={pokemons} />

    </div>
  )
}
