import getOneContentfulData from '../getOneContentfulData'
import { IStarTreeWebsite } from '../../../../@types/generated/contentful'

export interface ILayoutData {
  starTreeWebsite: IStarTreeWebsite
}

const getLayoutData = async (): Promise<ILayoutData> => {
  const [starTreeWebsite] = await Promise.all([
    getOneContentfulData('starTreeWebsite') as Promise<IStarTreeWebsite>
  ])

  return {
    starTreeWebsite
  }
}

export default getLayoutData
