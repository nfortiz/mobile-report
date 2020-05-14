export const timelineDefault = {
  chart: {
    zoomType: 'x',
    type: 'timeline'
  },
  xAxis: {
    type: 'datetime',
    visible: false
  },
  yAxis: {
    gridLineWidth: 1,
    title: null,
    labels: {
      enabled: false
    }
  },
  legend: {
    enabled: false
  },
  title: {
    text: 'Timeline de los Releases de la app'
  },
  series: [{
    dataLabels: {
      allowOverlap: false,
      format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
        '{point.x:%d %b %Y}</span><br/>{point.label}'
    },
    marker: {
      symbol: 'circle'
    },
    data: [{
      x: new Date('October 4, 1957 UTC'),
      name: 'First artificial satellite',
      label: 'First artificial satellite',
      description: 'Sputnik 1 was the first artificial Earth satellite. The Soviet Union launched it into an elliptical low Earth orbit on 4 October 1957, orbiting for three weeks before its batteries died, then silently for two more months before falling back into the atmosphere.'
    }, {
      x: new Date('April 12, 1961 UTC'),
      name: 'First human spaceflight',
      label: 'First human spaceflight',
      description: 'Yuri Gagarin was a Soviet pilot and cosmonaut. He became the first human to journey into outer space when his Vostok spacecraft completed one orbit of the Earth on 12 April 1961.'
    }, {
      x: Date.UTC(1969, 6, 20),
      name: 'First human on the Moon',
      label: 'First human on the Moon',
      description: 'Apollo 11 was the spaceflight that landed the first two people on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin, both American, landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC.'
    }, {
      x: new Date('Febuary 19, 1986 UTC'),
      name: 'First inhabited space station',
      label: 'First inhabited space station',
      description: 'was a space station that operated in low Earth orbit from 1986 to 2001, operated by the Soviet Union and later by Russia. Mir was the first modular space station and was assembled in orbit from 1986 to 1996. It had a greater mass than any previous spacecraft.'
    }]
  }]
}
