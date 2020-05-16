import styled, { css } from 'styled-components'

export const Button = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: var(--space-sm);
  margin: var(--space-sm);
  border: 3px solid var(--headline-color);
  border-radius: 5px;
  width: 300px;
  max-width: 80%;
  transition:  var(--transition-speed) ease;
  &:hover {
    background-color: var(--highlight-color);
  }

  &:hover span {
    color: white;
  }

  &:first-child {
      margin-top: 0;
  }

  ${props => props.selected && css`
      background-color: var(--headline-color);
      span {
        color: white;
      }      
  `}
`
export const Hue = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid var(--headline-color);
  margin-right: var(--space-sm);
  background: ${props => props.background};
`
export const HueTitle = styled.span`
  font-weight: 700;
  font-size: 1rem;
  font-family: var(--font-family);
  color: var(--headline-color);
`
export const Colors = styled.div`
  display: grid;
  height: 50px;
  width: 100%;
  border: 3px solid var(--headline-color);
  grid-gap: 0;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  border-radius: 5px;
`
export const ColorWrapper = styled.div`
  grid-column-end: span 1;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: var(--transition-speed) ease;

  &:hover div {
    opacity: 0.4;
  }

  &:hover span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ColorItem = styled.div`
  
  background-color: ${props => props.color || 'white'};
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  height: inherit;
  width: inherit;  
`

export const ColorText = styled.span`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: var(--font-family);
  color: var(--headline-color);
`
