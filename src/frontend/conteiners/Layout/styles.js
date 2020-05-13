import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 0;
    margin-left: 5rem;


  section {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);
    padding-bottom: var(--space-sm);
  }

  section:nth-child(2n) {
    --link-color: #232946;
    --background-color: #d4d8f0;
    --headline-color: #232946;
    --paragraph-color: #232946;
  }
  
  section.light {
    --link-color: #232946;
    --background-color: #d4d8f0;
    --headline-color: #232946;
    --paragraph-color: #232946;
    background-color: var(--background-color);
  }
`
