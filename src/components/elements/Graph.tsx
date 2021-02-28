import dynamic from 'next/dynamic'
const ReactVisGraph = dynamic(() => import('react-graph-vis'), {
  ssr: false
})

import useWindowSize from '../../hooks/useWindowSize'

interface IGraph {
  graph: {
    nodes: object[]
    edges: object[]
  }
  options?: object
}

const Graph = ({ options = {}, ...props }: IGraph) => {
  const [width, height] = useWindowSize()

  return (
    <ReactVisGraph
      {...props}
      // @ts-ignore there is no types for ReactVisGraph
      options={{
        ...options,
        height,
        width
      }}
    />
  )
}

export default Graph
