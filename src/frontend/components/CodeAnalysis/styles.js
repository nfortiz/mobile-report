import styled from 'styled-components'

export const Contributor = styled.div`
  padding: var( --space-sm);
  display: flex;
  border: 3px solid var(--card-paragraph);
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
