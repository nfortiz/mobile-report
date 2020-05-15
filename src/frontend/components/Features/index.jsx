import React, { useState, useEffect } from 'react'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'
import { List, Item, Figure, Img, FeatureWrapper, FeatureDescription } from './styles'
import { features } from '../../utils/features'

function Features () {
  const [current, setCurrent] = useState(features[0])

  function onClickItem (feature) {
    setCurrent(feature)
  }

  return (
    <section id='feature'>
      <Container>
        <Row>
          <Column>
            <h2>Feauteres de la Aplicación</h2>
            <p>
            Realizamos una verificación de la lista de funcionalidades destacadas por los desarrolladores, con el fin de comprobar cómo funcionan, su acceso; flujo de navegación de la aplicación, y su veracidad. A continuación, se presenta cada funcionalidad con una imagen y descripción de su funcionamiento.
            </p>
          </Column>
          <Column span='12'>
            <Card>
              <FeatureWrapper>
                <List>
                  {features.map((feat, idx) => {
                    return (
                      <Item
                        key={idx}
                        onClick={() => onClickItem(feat)}
                        selected={current.title === feat.title}
                      >
                        <p>{feat.title}</p>
                      </Item>
                    )
                  })}

                </List>

                <FeatureDescription>
                  <Figure>
                    <Img src={current.source} />
                  </Figure>
                  <p>
                    {current.description}
                  </p>
                </FeatureDescription>

              </FeatureWrapper>
            </Card>
          </Column>
        </Row>
      </Container>
    </section>
  )
}

export default Features
