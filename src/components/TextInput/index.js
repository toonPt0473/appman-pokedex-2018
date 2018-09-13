import React from 'react'
import styled from 'styled-components'
import search from '../../search.png'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  outline: none;
  border: none;
  width: ${({ width }) => width ? width : '300px'};
  border: 1px solid #e6e6e6;
  padding: 10px;
  font-size: 30px;
  box-sizing: border-box;
  font-family: Gaegu;
`

const Icon = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  background-image: url(${search});
  background-size: cover;
  background-position: center;
`


const TextInput = (props) => {
  return (
    <Container>
      <Input {...props} />
      <Icon />
    </Container>
  )
}



export default TextInput
