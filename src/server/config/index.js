require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  githubOauthToken: process.env.GITHUB_OAUTH_TOKEN
}

module.exports = { config }
