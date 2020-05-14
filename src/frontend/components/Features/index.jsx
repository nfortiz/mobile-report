import React, { useState, useEffect } from 'react'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'
import { List, Item, FigureWrapper, Img } from './styles'
import { features } from '../../utils/features'

function Features () {
  const [current, setCurrent] = useState(features[0])

  function onClickItem (feature) {
    setCurrent(feature)
  }

  return (
    <section>
      <Container>
        <Row>
          <Column span='6'>
            <FigureWrapper>
              <Img src={current.source} />
            </FigureWrapper>
          </Column>
          <Column span='4'>
            <List>
              {features.map((feat, idx) => {
                return (
                  <Item key={idx} onClick={() => onClickItem(feat)}>
                    {feat.title}
                  </Item>
                )
              })}

            </List>
          </Column>
        </Row>
      </Container>
    </section>
  )
}

export default Features
