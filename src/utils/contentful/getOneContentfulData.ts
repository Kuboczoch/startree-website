// tslint:disable-next-line:no-var-requires
const contentful = require('contentful')

const getOneContentfulData = async (contentType: string) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const TypeEntries = await client.getEntries({
    content_type: contentType
  })

  /**
   *  JSON parse and stringify is used here to eliminate unexpected behavior from contentful
   **/

  return JSON.parse(
    JSON.stringify({
      fields: TypeEntries.items[0].fields,
      sys: TypeEntries.items[0].sys
    })
  )
}

export default getOneContentfulData
