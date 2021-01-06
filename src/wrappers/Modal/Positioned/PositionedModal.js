import styled, {css} from 'styled-components';
import {Modal} from "antd";

const PositionedModal = styled(Modal)`
  -webkit-animation-duration: 0s !important;
  animation-duration: 0s !important;
  position: absolute;
  
  ${props => props.horizontalCenter && css`
    left: 50%;
    transform: translate(-50%);
  `}
  ${props => props.verticalCenter && css`
    top: 50%;
    transform: translate(0, -50%);
  `}

  ${props => props.bottom && css`
    top: 100%;
  `
  }
  ${props => props.top && css`
    top: 0;
  `
  }
  ${props => props.right && css`
    right: 0;
  `}
  ${props => props.left && css`
    left: 0;
  `
  }
  ${props => props.horizontalCenter && props.verticalCenter && css`
     transform: translate(-50%, -50%);
 `}
  
}`;

export default PositionedModal;