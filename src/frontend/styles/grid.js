import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(100vw - 20rem);
  min-width: 900px;

  @media only screen and (max-width: 1024px) {
    & {
      margin: 0 auto;
      max-width: calc(100vw - 20rem);
      min-width: 75%;
    }
    
  }
`

export const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);

  @media only screen and (max-width: 1024px) {
    & {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit , minmax(240px, 1fr));
    }
  }
`

export const Column = styled.div`
  grid-column-end: span ${props => props.span || 12};
`
