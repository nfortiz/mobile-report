import axios from 'axios'

export const getContributorsFromGitHub = async () => {
  const resp = await axios.get('./api/github/contributors')
  const data = await resp.data
  return data
}

export const getCommitsFromGitHub = async () => {
  const resp = await axios.get('./api/github/commits')
  const data = await resp.data
  return data
}
