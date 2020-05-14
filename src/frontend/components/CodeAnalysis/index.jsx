import React, { useRef, useEffect, useState } from 'react'
import moment from 'moment'
import Highcharts from 'highcharts'
import timeline from 'highcharts/modules/timeline'
import HighchartsReact from 'highcharts-react-official'
import { getContributorsFromGitHub, getCommitsFromGitHub, getReleasesFromGitHub } from '../../utils/githubStats'
import { Container, Row, Column } from '../../styles/grid'
import { Card, CardTitle, CardContent } from '../../styles/card'
import { Contributor, Svg } from './styles'
import { timelineDefault } from '../../utils/timeline'

import * as d3 from 'd3'

if (typeof Highcharts === 'object') {
  timeline(Highcharts)
}

function CodeAnalysis () {
  const d3Container = useRef(null)
  const container = useRef(null)

  const [contributors, setContributors] = useState(null)
  const [commits, setCommits] = useState(null)

  const [releases, setReleases] = useState([])
  const [timelineData, setTimelineData] = useState(timelineDefault)

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getContributorsFromGitHub()
        setContributors(resp)

        const respCommits = await getCommitsFromGitHub()
        setCommits(respCommits)

        const respReleases = await getReleasesFromGitHub()
        setReleases(respReleases)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    if (commits && d3Container.current && container.current) {
      // set the dimensions and margins of the graph
      const margin = { top: 10, right: 30, bottom: 30, left: 60 }
      const width = 550 - margin.left - margin.right
      const height = 350 - margin.top - margin.bottom

      const svg = d3.select(d3Container.current)

      const update = svg
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform',
          'translate(' + margin.left + ',' + margin.top + ')')

      const mappedDates = commits.map(commit => {
        const formatedDate = moment(new Date(commit.week * 1000)).format('yyyy-MM-DD')
        const week = moment(new Date(commit.week * 1000)).format('MMM Do YY')
        return ({ ...commit, week, date: d3.timeParse('%Y-%m-%d')(formatedDate) })
      })

      const x = d3.scaleTime()
        .domain(d3.extent(mappedDates, function (d) { return d.date }))
        .range([0, width])

      update
        .append('g')
        .attr('transform', 'translate(0,' + (height) + ')')
        .call(d3.axisBottom(x).ticks(6).tickSizeOuter(0))

      const y = d3.scaleLinear()
        .domain([0, 50])
        .range([height, 0])

      update
        .append('g')
        .call(d3.axisLeft(y))

      update.append('path')
        .datum(mappedDates)
        .attr('fill', '#69b3a2')
        .attr('fill-opacity', 0.3)
        .attr('stroke', 'none')
        .attr('d', d3.area()
          .x(function (d) { return x(d.date) })
          .y0(height)
          .y1(function (d) { return y(d.total) })
        )

      update
        .append('path')
        .datum(mappedDates)
        .attr('fill', 'none')
        .attr('stroke', '#69b3a2')
        .attr('stroke-width', 1)
        .attr('d', d3.line()
          .x(function (d) { return x(d.date) })
          .y(function (d) { return y(d.total) })
        )

      // create a tooltip
      d3.select(container.current)
        .style('position', 'relative')
        .style('display', 'inline-block')

      const Tooltip = d3.select(container.current)
        .append('div')
        .style('opacity', 0.5)
        .style('visibility', 'visible')
        .attr('class', 'tooltip')
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '2px')
        .style('border-radius', '5px')
        .style('padding', '5px')
        .style('font-size', '1rem')
        .style('position', 'absolute')
        .style('right', '10%')
        .style('bottom', '300px')
        .html('selecciona un punto')

      const mouseover = function (d) {
        const text = `# Commits: ${d.total} Fecha: ${d.week}`
        Tooltip
          .html(text)
          .style('opacity', 1)
          .style('visibility', 'visible')
      }
      const mousemove = function (d) {
        const text = `# Commits: ${d.total}\n Fecha: ${d.week}`
        Tooltip
          .html(text)
          // .style('left', (d3.mouse(this)[0] + 70) + 'px')
          // .style('top', (d3.mouse(this)[1]) + 'px')
      }
      const mouseleave = function (d) {
        Tooltip
          .style('opacity', 0)
          .style('visibility', 'hidden')
      }

      update
        .append('g')
        .selectAll('dot')
        .data(mappedDates)
        .enter()
        .append('circle')
        .attr('cx', function (d) { return x(d.date) })
        .attr('cy', function (d) { return y(d.total) })
        .attr('r', 4)
        .attr('fill', '#69b3a2')
        .on('mouseover', mouseover)
        .on('mouseleave', mouseleave)
        .on('mousemove', mousemove)

      update.exit()
        .remove()
    }
  }, [commits, d3Container.current, container.current])

  useEffect(() => {
    if (releases) {
      const data = releases.map(release => {
        return ({
          x: moment(release.created_at).toDate(),
          name: release.name,
          label: release.name,
          description: release.body || ''
        })
      }).reverse()

      const addedReleases = {
        ...timelineDefault,
        series: [
          {
            ...timelineDefault.series[0],
            data: data
          }
        ]
      }
      setTimelineData(addedReleases)
    }
  }, [releases])

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
                {contributors && contributors.map((contributor, index) => {
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
              <CardContent
                ref={container}
              >
                <p>
                Analizando las contribuciones al master, única rama disponible del repositorio y que cuenta a la fecha 12 de Mayo de 2020 con 1238 commits,
                 ha ido a la baja el desarrollo de la aplicación. A continuacion se muestra el gráfico de número de commits en el eje Y y la semana en el que fueron realizados en el eje X.
                </p>
                <Svg
                  className='d3-component'
                  width={400}
                  height={300}
                  ref={d3Container}
                />
              </CardContent>
            </Card>
          </Column>
          <Column span='12'>
            <Card>
              <HighchartsReact
                highcharts={Highcharts}
                options={timelineData}
              />
            </Card>

          </Column>
        </Row>

      </Container>

    </section>
  )
}

export default CodeAnalysis
