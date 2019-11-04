import styled from '@emotion/styled'
import { space, color, layout } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout
)

export default Box