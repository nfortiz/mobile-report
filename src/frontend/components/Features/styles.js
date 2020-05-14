import styled from 'styled-components'

export const List = styled.ul`
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
    
    p {
      color: var(--card-paragraph);
    }

`

export const FigureWrapper = styled.figure`
    display: block;
    border-radius: 0 10px 10px 0;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 80%;

`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
