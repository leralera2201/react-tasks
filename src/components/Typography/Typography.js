import styled, { css } from 'styled-components';

const Typography = styled.p`
  font-size: 24px;
  color: black;
  margin: 0;
  ${props => props.small && css`
    font-size: 16px;
  `}
   ${props => props.large && css`
    font-size: 40px;
  `}
`

export default Typography;