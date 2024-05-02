import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
export default function Pokemon() {
const [pokemon, setPokemon] = useState(null);
const [pokemonData, setPokemonData] = useState("");
const handlechange = (e) =>{
    setPokemon(e.target.value);
};
const handleclick = async () => {
    try { 
        const datatosend = {pokemon : pokemon };
        const res = await axios.post("/api/pokeapi",datatosend);
        setPokemonData(res.data);
        toast.success("pokemon encontrado");
    }catch (error){
        toast.error("pokemon no encontrado");
    }
};
console.log (pokemon);
return ( 
    <>
    <div className='text-center'>
    <Toaster/>
    <h1 className='text-4xl'>pokedex</h1>
    <br></br>
    <input type='text'  className = "text-3xl border-2"placeholder='ingresa tu pokemon' onChange={handlechange}></input>
    <button className='text-3xl bg-blue-500 hover:bg-blue-700  rounded' onClick={handleclick}>Buscar</button>
    {pokemonData && (
        <div className='text-center'>
            <div className='flex justify-center'>
            <img src = {pokemonData.spriteDefault}></img>
            </div>
            <h2 className='text-2xl '> nombre : {pokemonData.name}</h2>
            <h2 className='text-2xl '> vida : {pokemonData.hp}</h2>
            <h2 className='text-2xl '> ataque : {pokemonData.attack}</h2>
            <h2 className='text-2xl '> defensa : {pokemonData.defense}</h2>
            <h2 className='text-2xl '> velocidad : {pokemonData.speed}</h2>
            <h2 className='text-2xl '> ataque especial : {pokemonData.specialatack}</h2>

            </div>

    )}
    </div>
    </>
    )};

