import styled from 'styled-components'

export const Contributor = styled.div`
  padding: var( --space-sm);
  display: flex;
  border: 1px solid var(--card-paragraph);
  border-radius: 5px;
  margin-bottom: var( --space-sm);
  justify-content: space-between;

  img {
    max-width: 70px;
    height: auto;
  }
  
  .description {
    width: 100%;
    margin-left: var( --space-sm); 
    display: inherit;
    flex-direction: column;
    align-items: start;
    text-align: left;
    
  }
`

export const Svg = styled.svg`
  min-width: 550px;
  min-height: 350px;
  position: relative;
  display: inline-block;

  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
  }
`
