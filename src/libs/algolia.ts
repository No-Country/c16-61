import algoliasearch from 'algoliasearch'
const aplicationId = process.env.ALGOLIA_APLICATION_ID || ''
const searchAPiKey = process.env.ALGOLIA_SEARCH_API_KEY || ''

export const client = algoliasearch(aplicationId, searchAPiKey)
