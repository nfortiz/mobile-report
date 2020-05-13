import React, { useRef, useEffect, useState } from 'react'
import { getContributorsFromGitHub } from '../../utils/githubStats'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'
import { Contributor } from './styles'

import * as d3 from 'd3'

function CodeAnalysis () {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getContributorsFromGitHub()
        console.log(resp)
        setData(resp)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  return (
    <section>
      <Container>
        <Row>
          <Column span='12'>
            <h2>Repositorio y Análisis de Código</h2>
            <p>
                Se puede encontrar el repositorio de la aplicación en el
                siguiente enlace a <a href='https://github.com/appditto/natrium_wallet_flutter'>GitHub</a>
            </p>
          </Column>
          <Column span='4'>
            <Card>
              <CardTitle>Contribuyentes</CardTitle>
              <CardContent>
                {data && data.map((contributor, index) => {
                  return (
                    <Contributor key={index}>
                      <img src={contributor.author.avatar_url} />
                      <div className='description'>
                        <a href={contributor.author.html_url}> {contributor.author.login}</a>
                        <p>
                          Número de commmits: <span>{contributor.total}</span>
                          {contributor.author.site_admin && <span className='card-highlight'>Admin</span>}
                        </p>
                      </div>
                    </Contributor>
                  )
                })}
              </CardContent>
            </Card>
          </Column>
          <Column span='8'>
            <Card>
              <CardTitle>Historial de Contribuciones</CardTitle>
            </Card>
          </Column>
        </Row>
      </Container>

    </section>
  )
}

export default CodeAnalysis
