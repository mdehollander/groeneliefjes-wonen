require('dotenv').config()

module.exports = {
  i18n: {
    locales: ['nl-NL'],
    defaultLocale: 'nl-NL'
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    BASE_REPO_FULL_NAME: process.env.BASE_REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
}
