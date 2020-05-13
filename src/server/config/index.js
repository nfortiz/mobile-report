require('dotenv').config()

export const config = {
  dev: process.env.ENV !== 'production',
  port: process.env.PORT || 3000,
  githubOauthToken: process.env.GITHUB_OAUTH_TOKEN
}
