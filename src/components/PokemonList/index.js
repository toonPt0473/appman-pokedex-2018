import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import FocusDiv from '../FocusDiv/index'
import PokemonCard from '../PokemonCard/index';
import Input from '../TextInput/index'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 768px;
  background-color: #000000a3;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`

const InputContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  padding: 10px 20px;
`
const CardContainer = styled.div`
  padding: 20px;
`

export class PokemonList extends Component {
  componentDidMount() {
    const app = document.getElementById('app')
    app.style.overflow = 'hidden'
  }
  componentWillUnmount() {
    const app = document.getElementById('app')
    app.style.overflow = 'auto'
  }
  renderPokedex = (pokemonList) => {
    return pokemonList.map(pokemon => {
      return (
        <PokemonCard
          pokemon={pokemon}
          btnText="Add"
          onClickBtn={this.props.addMyPokedex}
          key={pokemon.id}
        />
      )
    })
  }
  render() {
    const pokemonList = this.props.pokemonList.filter(pokemon => !this.props.myPokedex.find(mypokemon => pokemon.id === mypokemon.id));
    return (
      <Container>
        <FocusDiv
          onOutOfFocus={this.props.onBlur}
          style={{
            width: '95%',
            maxHeight: '95%',
            minHeight: '95%',
            position: 'absolute',
            overflow: 'auto',
            background: 'white',
            boxSizing: 'border-box',
            borderRadius: 10,
            boxShadow: '0px 0px 2px #474444',
          }}
        >
          <InputContainer>
            <Input
              placeholder="Find pokemon"
              style={{
                width: '100%'
              }}
              onChange={(e) => this.props.getPokemonList(e.target.value)}
            />
          </InputContainer>
          <CardContainer>
            {this.renderPokedex(pokemonList)}
          </CardContainer>
        </FocusDiv>
      </Container>
    )
  }
}

const mapDispatch = dispatch => ({
  getPokemonList: (query) => dispatch.pokedexModel.getPokemonList(query),
  addMyPokedex: (pokemon) => dispatch.pokedexModel.addMyPokedex(pokemon)
})
const mapState = state => ({
  pokemonList: state.pokedexModel.list,
  myPokedex: state.pokedexModel.myPokedex,
})

export default connect(mapState, mapDispatch)(PokemonList)