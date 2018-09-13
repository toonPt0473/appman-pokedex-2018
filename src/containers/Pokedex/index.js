import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PokemonCard from '../../components/PokemonCard/index'
import PokemonList from '../../components/PokemonList/index'

const Container = styled.div`
  min-height: 100%;
  position: relative;
}
`
const CardContainer = styled.div`
  margin-top: -70px;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Header = styled.div`
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 10;
`

const Footer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #ec5656;
  position: sticky;
  top: calc(768px - 80px);
  display: flex;
  justify-content: center;
  box-shadow: 0 0 0.1px #d9333387;
  z-index: 10;
`
const AddBtn = styled.div`
  font-size: 100px;
  color: #fff;
  position: absolute;
  top: -60%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ec5656;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.1px #d9333387;
`

export class Pokedex extends Component {
  state = {
    showList: false,
  }
  componentDidMount() {
    this.props.getPokemonList()
  }
  renderPokedex = () => {
    return this.props.myPokedex.map(pokemon => {
      return (
        <PokemonCard
          pokemon={pokemon}
          btnText=" X "
          onClickBtn={this.props.removeMyPokedex}
          key={`${pokemon.id}-in-dex`}
        />
      )
    })
  }
  render() {
    return (
      <Container>
        {this.state.showList && (
          <PokemonList onBlur={() => this.setState({ showList: false })} />
        )}
        <Header>
          My Pokedex
        </Header>
        <Footer>
          <AddBtn onClick={() => this.setState({ showList: true })} >+</AddBtn>
        </Footer>
        <CardContainer>
          {this.renderPokedex()}
        </CardContainer>
      </Container>
    )
  }
}

const mapDispatch = dispatch => ({
    getPokemonList: () => dispatch.pokedexModel.getPokemonList(),
    removeMyPokedex: (pokemon) => dispatch.pokedexModel.removeMyPokedex(pokemon),
})
const mapState = state => ({
  myPokedex: state.pokedexModel.myPokedex,
})

export default connect(mapState, mapDispatch)(Pokedex)
