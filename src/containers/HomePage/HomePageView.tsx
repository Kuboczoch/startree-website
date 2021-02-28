import React from 'react'
import { IHomePageProps } from '../../pages/'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'
import Graph from '../../components/elements/Graph'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {

}

const options = {

}

const HomePageView = (props: IHomePageViewProps) => (
  <HomePage>
    <Graph
      graph={{
        nodes: props.nodes,
        edges: props.edges
      }}
      options={options}
    />
  </HomePage>
)

export default HomePageView
