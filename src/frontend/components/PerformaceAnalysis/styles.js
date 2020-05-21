import styled from 'styled-components'
export const Paragraph = styled.p`
  color: rgb(35, 41, 70);
`
export const FigureContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  padding: 56.25% 0 0 0;
  height: 0;

  & * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
