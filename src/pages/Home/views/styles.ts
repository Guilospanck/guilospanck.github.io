import styled from "styled-components"

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
`

type PhotoContainerProps = {
  url: string
}
export const PhotoContainer = styled.div<PhotoContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;
`

export const Title = styled.header`
  font-size: xx-large;
  
`

export const Subtitle = styled.span`  
  
`

export const CurvesContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 200px;
  overflow: hidden;
`

export const Badges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 25px;
  gap: 2px;
`

export const BadgeContainer = styled.img`
  width: 100px;
  border-radius: 5px;
  height: 100%;
`