import { useState } from "react";
import { getPokemonList } from "../api/fetchpokemon";
export const usePokemon = () => {

 const [pokemon, setPokemon] = useState([])

 const getPokemon = async() => {
  try {
    const response = await getPokemonList();
    setPokemon(response)
  } catch (error) {
    console.log(error);
  }
 }

    return (
        {pokemon, getPokemon} //kirim data ke App.jsx dengan bentuk object
    )
}
//