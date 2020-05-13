/* eslint-disable global-require */
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import webpack from 'webpack'

import App from '../frontend/App'

import { config } from './config'
import GithubService from './services/github'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const app = express()
app.use(express.json())

if (config.dev) {
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = { port: config.port, hot: true }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
}

const setResponse = (html, styles) => {
  return (`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reporte</title>
    <link rel="stylesheet" href="./style.css" />
    ${styles}
  </head>
  <body>
    <div id="app">${html}</div>  
  </body>
</html>

  `)
}

const renderApp = (req, res) => {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(sheet.collectStyles(<App />))
    const styles = sheet.getStyleTags()
    res.send(setResponse(html, styles))
  } catch (error) {
    console.log(error)
  } finally {
    sheet.seal()
  }
}

GithubService(app)

app.get('*', renderApp)

app.listen(config.port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('Listen on port', config.port)
  }
})
