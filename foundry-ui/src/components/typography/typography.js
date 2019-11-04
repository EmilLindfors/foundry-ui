import styled from '@emotion/styled'
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'


export const Text = styled('div')`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

Text.defaultProps = {
    fontWeight: 400,
    lineHeight: 1.45,
    fontSize: "19px"
  }

export const P = Text.withComponent("p")

P.defaultProps = {
    m: "0 0 9px",
    lineHeight: 1.45,
    fontSize: "19px"
  }

export const H1 = Text.withComponent('h1')

H1.defaultProps = {
  fontSize: [6,7,8],
  fontFamily: 'Lato',
  fontWeight: 700,
  lineHeight: 1.15,
  m: "2.75rem 0 1rem",
}

export const H2 = Text.withComponent('h2')

H2.defaultProps = {
  fontSize: [5,6,7],
  fontFamily: 'Lato',
  fontWeight: 700,
  lineHeight: 1.15,
  m: "2.75rem 0 1rem",
}

export const H3 = Text.withComponent('h3')

H3.defaultProps = {
  fontSize: [4,5,6],
  fontFamily: 'Lato',
  fontWeight: 700,
  lineHeight: 1.15,
  m: "2.75rem 0 1rem",
}

export const H4 = Text.withComponent('h4')

H4.defaultProps = {
  fontSize: [3,4,5],
  fontFamily: 'Lato',
  fontWeight: 700,
  lineHeight: 1.15,
  m: "2.75rem 0 1rem",
}

export const H5 = Text.withComponent('h5')

H5.defaultProps = {
  fontSize: [2,3,4],
  fontFamily: 'Lato',
  fontWeight: 700,
  lineHeight: 1.15,
  m: "2.75rem 0 1rem",
}