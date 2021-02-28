import styled from 'styled-components'

const Content = styled('main')`
  position: relative;
  grid-area: content;
  min-height: 125px;
  z-index: 1;

  background: ${props => props.theme.colors.white};
`

export default Content
