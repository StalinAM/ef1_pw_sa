import axios from 'axios'

const consumirAPI = async (idPokemon) => {
  const response = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((resp) => resp.data)

  return response
}

export async function consumirAPIFacade(idPokemon) {
  return await consumirAPI(idPokemon)
}
