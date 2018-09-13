import axios from 'axios'
import formatPokemonList from '../util/formatPokemonList'

export const pokedexModel = {
  state: {
    list: [],
    myPokedex: JSON.parse(localStorage.getItem('myPokedex')) || []
  },
  reducers: {
    changeList(state, payload) {
      return {
        ...state,
        list: payload,
      }
    },
    addMyPokedex(state, payload) {
      const myPokedex = [ ...state.myPokedex, payload ]
      localStorage.setItem('myPokedex', JSON.stringify(myPokedex))
      return {
        ...state,
        myPokedex,
      }
    },
    removeMyPokedex(state, payload) {
      const myPokedex = state.myPokedex.filter(pokemon => pokemon.id !== payload.id)
      localStorage.setItem('myPokedex', JSON.stringify(myPokedex))
      return {
        ...state,
        myPokedex,
      }
    }
  },
  effects: (dispatch) => ({
    async getPokemonList(query) {
      const url = query ? `/api/cards?limit=30&name=${query}&type=${query}` : '/api/cards'
      const result = await axios.get(url)
      const data = formatPokemonList(result.data.cards)
      dispatch.pokedexModel.changeList(data)
    },
  }),
}

export default pokedexModel