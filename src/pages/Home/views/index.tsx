import React, { useMemo } from "react";
import Typical from 'react-typical'
import { HomeViewProps, BadgeType, BADGE_INFO, BadgeInfo } from "../types";

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

const GetBadge = (badge: BadgeType, onMouseEnterBadge: () => void, onMouseLeaveBadge: () => void, badgeInfo: BadgeInfo) => {
  const badgeSrc = badgeInfo[badge]?.src

  if (!badgeSrc) { return }

  return (
    <a href="https://github.com/Guilospanck" target={'_blank'}
      onMouseEnter={() => onMouseEnterBadge()}
      onMouseLeave={() => onMouseLeaveBadge()}>
      <BadgeContainer key={badge} src={badgeSrc} />
    </a>
  )
}

export const HomeView = ({ viewModel }: HomeViewProps) => {
  return (
    <Container>
      <PhotoContainer url={MeImg} />
      <Title>Guilherme Rodrigues</Title>
      <GetSubtitleMemoized />
      <Badges>
        {
          Object.values(BadgeType).map((badge) => GetBadge(badge as BadgeType, viewModel.onMouseEnterBadge, viewModel.onMouseLeaveBadge, viewModel.badgeInfo))
        }
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