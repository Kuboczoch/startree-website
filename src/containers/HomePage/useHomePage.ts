import { useMemo } from 'react'

import { IHomePageProps } from '../../pages'

interface IGraphNode {
  id: number | string
  label: string
  title: string
}

interface IGraphEdge {
  from: number | string
  to: number | string
}

export interface IHomePageStateProps {
  nodes: IGraphNode[]
  edges: IGraphEdge[]
}

const useHomePage = (props: IHomePageProps): IHomePageStateProps => {
  const nodes = useMemo((): IGraphNode[] => {
    return props.starTreeUsers
      .map((user) => ({
        id: user.sys.id,
        label: user.fields.name,
        title: user.fields.name
      }))
  }, [props.starTreeUsers])

  const edges = useMemo((): IGraphEdge[] => {
    return props.starTreeUsers
      .map((user) => (
        user.fields.children
          ?.map((child) => ({
            from: user.sys.id,
            to: child.sys.id
          }))
      ))
      .filter((a) => a)
      .flat()
  }, [props.starTreeUsers])

  return {
    nodes,
    edges
  }
}

export default useHomePage
