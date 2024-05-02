import axios from 'axios';
export default async function handler (req,res){
    if (req.method !== "POST"){
        res.status(400).json ({message : " pregunta invalida a la api"});
        return;
    }

const {pokemon} = req.body;
console.log(pokemon);
const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
try { const response = await axios.get(url);
const pokeinfo = response.data;
const {order , stats ,sprites} = pokeinfo
const pokedata = {
    name : pokemon,
    weight : pokeinfo.weight,
    spriteDefault : sprites.front_default,
    hp :  stats[0].base_stat,
    attack : stats[1].base_stat,
    defense : stats[2].base_stat,
    specialatack : stats[3].base_stat,
    specialdefense : stats[4].base_stat,
    speed : stats[5].base_stat
};
res.status(200).json(pokedata);
}catch (error){
    res.status(404).json({message : "pokemon no encontrado"});
}};