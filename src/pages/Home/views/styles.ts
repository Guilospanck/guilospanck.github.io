import styled from 'styled-components'

import { CONTENT_BG_COLOR_ALMOST_BLACK, TEXT_COLOR_0_7_WHITE } from '~/globals'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${CONTENT_BG_COLOR_ALMOST_BLACK};
  color: ${TEXT_COLOR_0_7_WHITE};

  width: 100%;
  height: 100%;
  gap: 4%;
`

type PhotoContainerProps = {
  url: string
}
export const PhotoContainer = styled.div<PhotoContainerProps>`
  width: 200px;
  height: 200px;
  border: 2px solid ${TEXT_COLOR_0_7_WHITE};
  border-radius: 100px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;
`

export const Title = styled.header`
  font-size: xx-large;
`

export const Subtitle = styled.section`  
  height: 60px;
`

export const Badges = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: 14px;
  gap: 2px;
`

export const BadgeContainer = styled.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;  

  &:hover {
    background-color: red;
  }
`

export const EmailContainer = styled.section`
  display: flex;  
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 30px;
`

export const Email = styled.a`
  text-decoration: none;
  color: ${TEXT_COLOR_0_7_WHITE};

`

export const CurvesContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 25%;
  overflow: hidden;

  @media(max-height: 700px) {
    max-height: 15%;
  }
  @media(max-height: 550px) {
    max-height: 10%;
  }
  @media(max-height: 470px) {
    max-height: 5%;
  }
`
