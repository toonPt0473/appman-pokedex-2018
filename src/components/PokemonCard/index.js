import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 8px 14px;
  background-color: #f3f4f7;
  min-width: 300px;
  margin: 20px 10px;
  margin-top: 0;
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 0px 10px #d5d6dc;
  &:hover {
    box-shadow: 0px 0px 10px #aeaeae;
  }
`
const Detail = styled.div`
  padding-left: 20px;
  flex: 1;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const Name = styled.p`
  font-size: 35px;
  margin: 0;
  font-family: Gaegu;
`
const Btn = styled.p`
  font-size: 26px;
  margin: 0;
  color: #dc7777;
  display: none;
  cursor: pointer;
  ${Container}:hover & {
    display: block;
  }
`
const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const StatusTitle = styled.div`
  font-size: 20px;
  width: 100px;
`
const StatusBar = styled.div`
  flex: 1;
  height: 24px;
  max-width: 350px;
  min-width: 180px;
  background-color: #e4e4e4;
  border-radius: 30px;
  box-shadow: 0px 0px 1px #d4d4d4;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: ${(props) => `${props.percent}%`}
    background-color: #f3701a;
    border-radius: inherit;
  }
`

export class PokemonCard extends Component {
  renderStatusBar = (name, percent) => {
    return (
      <Status>
        <StatusTitle>{name.toUpperCase()}</StatusTitle>
        <StatusBar percent={percent} />
      </Status>
    )
  }
  render() {
    const { imageUrl, name, hp, str, weak } = this.props.pokemon
    return (
      <Container>
        <img src={imageUrl} width={150} height={220} />
        <Detail>
          <Title>
            <Name>{name.toUpperCase()}</Name>
            <Btn onClick={() => this.props.onClickBtn(this.props.pokemon)} >{this.props.btnText}</Btn>
          </Title>
          {this.renderStatusBar('hp', hp)}
          {this.renderStatusBar('str', str)}
          {this.renderStatusBar('weak', weak)}
        </Detail>
      </Container>
    )
  }
}

export default PokemonCard
