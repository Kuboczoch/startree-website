import React from 'react'

import Layout from '../components/elements/Layout'
import Homepage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'
import getStarTreeUsersData, { IStarTreeUsersData } from '../utils/contentful/models/getStarTreeUsersData'

export interface IHomePageProps extends ILayoutData, IStarTreeUsersData {

}

const Home = (props: IHomePageProps) => (
  <Layout {...props}>
    <Homepage {...props} />
  </Layout>
)

export const getStaticProps = async (): Promise<{props: IHomePageProps}> => {
  const layout = await getLayoutData()
  const starTreeUsers = await getStarTreeUsersData()

  return {
    props: {
      ...layout,
      ...starTreeUsers
    }
  }
}

export default Home
