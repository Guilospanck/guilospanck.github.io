import styled from 'styled-components'

import { TEXT_COLOR_0_7_WHITE } from '~/globals'

export const LoadingDiv = styled.div`
  display: flex;
  margin: auto;

  background: ${TEXT_COLOR_0_7_WHITE};
  width: 20px;
  height: 20px;
  border-radius: 20px;

  -webkit-animation: ping 0.9s ease-in-out infinite both;
  animation: ping 0.9s ease-in-out infinite both;

  @-webkit-keyframes ping {
    0% {
      -webkit-transform: scale(0.2);
              transform: scale(0.2);
      opacity: 0.8;
    }
    80% {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(2.2);
              transform: scale(2.2);
      opacity: 0;
    }
  }
  @keyframes ping {
    0% {
      -webkit-transform: scale(0.2);
              transform: scale(0.2);
      opacity: 0.8;
    }
    80% {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(2.2);
              transform: scale(2.2);
      opacity: 0;
    }
  }

`
