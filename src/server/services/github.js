import { config } from '../config'

const axios = require('axios')
const router = require('express').Router

function GithubService (app) {
  const BASE_URL = 'https://api.github.com'
  const routerGitHub = router()
  app.use(routerGitHub)

  routerGitHub.get('/api/github', async (req, res) => {
    const resp = await axios.get(`${BASE_URL}/repos/appditto/natrium_wallet_flutter/stats/contributors`, {
      headers: {
        Authorization: `token ${config.githubOauthToken}`
      }
    })

    res.status(200).json(resp.data)
  })

  routerGitHub.get('/api/github/contributors', async (req, res) => {
    const resp = await axios.get(`${BASE_URL}/repos/appditto/natrium_wallet_flutter/stats/contributors`, {
      headers: {
        Authorization: `token ${config.githubOauthToken}`
      }
    })

    res.status(200).json(resp.data)
  })
}

export default GithubService
