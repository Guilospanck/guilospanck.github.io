import React, { useMemo } from "react";
import Typical from 'react-typical'
import { HomeViewProps } from "../types";

import {
  Container,
  PhotoContainer,
  Title,
  Subtitle,
  EmailContainer,
  Email,
  CurvesContainer,
  Badges,
  BadgeContainer
} from './styles'

const CurvesSVG = React.lazy(() => import('../../../assets/images/curves.svg'))
import MeImg from '../../../assets/images/me.jpg'
const GithubBadge = "https://img.shields.io/badge/GitHub-100000?color=%232d3134&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%232d3134"
const TwitterBadge = "https://img.shields.io/badge/Twitter-1DA1F2?color=%232d3134&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%232d3134"
const LinkedinBadge = "https://img.shields.io/badge/LinkedIn-0077B5?color=%232d3134&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%232d3134"
const MediumBadge = "https://img.shields.io/badge/Medium-12100E?color=%232d3134&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%232d3134"

const GetSubtitle = () => {
  return (
    <Subtitle>
      <Typical
        steps={useMemo(() => [
          'Frontend Developer 🎨',
          1000,
          'Backend Developer 🎲',
          1000,
          'FullStack Developer 🦆',
          1000,
          'Mechatronics Engineer ⚙️',
          1000
        ], [])}
        loop={Infinity}
      />
    </Subtitle>
  )
}

const GetSubtitleMemoized = React.memo(GetSubtitle)

export const HomeView = ({ viewModel }: HomeViewProps) => {
  return (
    <Container>
      <PhotoContainer url={MeImg} />
      <Title>Guilherme Rodrigues</Title>
      <GetSubtitleMemoized />
      <Badges>
        <a href="https://github.com/Guilospanck" target={'_blank'}><BadgeContainer src={GithubBadge} /></a>
        <a href="https://twitter.com/Guilospanck" target={'_blank'}><BadgeContainer src={TwitterBadge} /></a>
        <a href="https://www.linkedin.com/in/guilhermerpereira/" target={'_blank'}><BadgeContainer src={LinkedinBadge} /></a>
        <a href="https://medium.com/@guilospanck" target={'_blank'}><BadgeContainer src={MediumBadge} /></a>
      </Badges>
      <EmailContainer>
        <Email href="mailto:guilospanck@protonmail.com" target={'_blank'}>guilospanck@protonmail.com</Email>
      </EmailContainer>
      <CurvesContainer>
        <CurvesSVG />
      </CurvesContainer>
    </Container>
  )
};