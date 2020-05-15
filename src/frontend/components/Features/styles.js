import styled, { css } from 'styled-components'

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  p {
      color: var(--card-paragraph);
  }
`

export const List = styled.ul`
  min-width: 40%;
  list-style-type: none;   
  padding: 0;
  margin: var(--space-md) 0; 
`
export const Item = styled.li`
    border: 1px solid #ddd;     
    margin-top: -1px;
    background-color: #f6f6f6; 
    padding: 12px; 

    &:hover {
      background-color: #fff; 
    }

    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:last-child {
      border-radius: 0 0 0 10px;
    } 

    ${props => props.selected && css`
      background-color: #fff; 
      font-weight: bold;
  `}

`

export const FeatureDescription = styled.div`
  margin: var(--space-md) 0; 
  background-color: #f6f6f6;
  padding: 0 0 var(--space-sm);
  width: 50%;
  border-radius: 0 10px 10px 0;
  p {
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  }

`

export const Figure = styled.figure`
    display: block;    
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  max-height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
