import styled from 'styled-components'

export const Card = styled.article`
  background-color: var(--card-background-color);
  border-radius: 0.4rem;
  overflow: hidden;
  text-align: center;
  color: var(--card-paragraph);
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
  padding: var( --space-sm);
`
export const CardTitle = styled.h3`
  color: var(--card-paragraph);
  font-size: var(--text-lg, 1.44em);
  font-weight: bold;
`

export const CardContent = styled.div`
  margin: 0 auto;
  width: 80%;
  color: var(--card-paragraph);
  font-size: 1rem;
  font-weight: nomal;
   & p {
    text-align: left;
   }
  .card-highlight {
    color:var(--card-highlight);
  }

  
`
