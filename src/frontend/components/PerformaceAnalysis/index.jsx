import React from 'react'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'
import { Figure, FigureContainer, Paragraph } from './styles'

export default function () {
  return (
    <section id='conectividad'>
      <Container>
        <Row>
          <Column>
            <h2>Análisis de desempeño</h2>
          </Column>
          <Column>
            <Card>
              <CardContent>
                <Paragraph>
                En este video se muestra de manera resumida la toma de datos del performance de la aplicación.
                </Paragraph>
              </CardContent>
              <FigureContainer>
                <Figure>
                  <iframe width='560' height='315' src='https://www.youtube.com/embed/eBA4S-7Wjf0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
                </Figure>
              </FigureContainer>

            </Card>
          </Column>
        </Row>
      </Container>
    </section>
  )
}
