import getContentfulData from '../getContentfulData'
import { IStarTreeUser } from '../../../../@types/generated/contentful'

export interface IStarTreeUsersData {
  starTreeUsers: IStarTreeUser[]
}

const getStarTreeUsersData = async (): Promise<IStarTreeUsersData> => {
  const [starTreeUsers] = await Promise.all([
    getContentfulData('starTreeUser') as Promise<IStarTreeUser[]>
  ])

  return {
    starTreeUsers
  }
}

export default getStarTreeUsersData
