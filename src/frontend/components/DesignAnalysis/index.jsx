import React, { useState } from 'react'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'
import { Button, Hue, HueTitle, Colors, ColorWrapper, ColorItem, ColorText } from './styles'

import { themes } from '../../utils/themes'

function DesignAnalysis () {
  const [currentTheme, setCurrentTheme] = useState(themes[0])

  function onClickTheme (theme) {
    setCurrentTheme(theme)
  }

  return (
    <section id='design'>
      <Container>
        <Row>
          <Column>
            <h2>Análisis de diseño</h2>
            <p>Como se mencionó en la sección de funcionalidades, la aplicación cuenta con una opción que permite cambiar el tema de la interfaz gráfica, pero ¿a qué se refiere cambiar de tema? En primer lugar, un tema se refiere a cambiar la paleta de colores que usa la aplicación para mostrar los elementos gráficos con el fin de adaptarse a los gustos de cada usuario. Entonces para explicar cuáles son los temas de la aplicación primero debemos hablar del conjunto de colores que los desarrolladores decidieron usar para la interfaz gráfica de la aplicación.</p>
            <p>Los colores se encuentran declarados en un archivo llamado themes.dart. Este archivo los divide los colores en conjuntos, y estos conjuntos siempre están compuestos de dos colores principales además del blanco y negro. Lo anterior es una buena práctica de diseño de interfaces, ya que es recomendable usar dos colores para una interfaz y aplicar distintas opacidades para dichos colores. Los colores que se encuentran en este archivo comparten una característica especial y es que la mayoría de los colores, a excepción del naranja pertenecen a la paleta de colores clasificada como colores fríos (colores que contienen azul). Creemos que estos colores fueron elegidos con el fin de dar una impresión de oscuridad y confidencialidad para que vaya acorde al propósito de la aplicación. </p>
          </Column>
          <Column span='4'>
            {themes.map((theme, idx) => {
              return (
                <Button
                  key={idx}
                  onClick={() => onClickTheme(theme)}
                  selected={currentTheme.name === theme.name}
                >
                  <Hue background={theme.colors.primary} />
                  <HueTitle>{theme.name}</HueTitle>
                </Button>
              )
            })}
          </Column>
          <Column span='8'>
            <Card>
              <CardTitle>Tema {currentTheme.name}</CardTitle>
              <CardContent>
                <Colors size={Object.keys(currentTheme.colors).length}>
                  {Object.keys(currentTheme.colors).map((color, idx) => {
                    return (
                      <ColorWrapper key={idx}>
                        <ColorItem color={currentTheme.colors[color]} />
                        <ColorText>{currentTheme.colors[color]}</ColorText>
                      </ColorWrapper>
                    )
                  })}
                </Colors>
              </CardContent>
            </Card>
          </Column>
        </Row>
      </Container>
    </section>
  )
}

export default DesignAnalysis
