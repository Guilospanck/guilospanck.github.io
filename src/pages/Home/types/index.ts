
export type UseHomeViewModelReturnType = {
  onMouseEnterBadge: () => void,
  onMouseLeaveBadge: () => void,
  badgeInfo: BadgeInfo
}

export type HomeViewProps = {
  viewModel: UseHomeViewModelReturnType
}

export enum BadgeType {
  GITHUB, TWITTER, LINKEDIN, MEDIUM
}

export type BadgeInfo = {
  [badgeType in BadgeType]: {
    src: string
    href: string
  }
}

export const BADGE_INFO = (badgeColor: string): BadgeInfo => ({
  [BadgeType.GITHUB]: {
    src: `https://img.shields.io/badge/GitHub-100000?color=%23${badgeColor}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${badgeColor}`,
    href: 'https://github.com/Guilospanck'
  },
  [BadgeType.TWITTER]: {
    src: `https://img.shields.io/badge/Twitter-1DA1F2?color=%23${badgeColor}&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${badgeColor}`,
    href: 'https://twitter.com/Guilospanck'
  },
  [BadgeType.LINKEDIN]: {
    src: `https://img.shields.io/badge/LinkedIn-0077B5?color=%23${badgeColor}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${badgeColor}`,
    href: 'https://www.linkedin.com/in/guilhermerpereira/'
  },
  [BadgeType.MEDIUM]: {
    src: `https://img.shields.io/badge/Medium-12100E?color=%23${badgeColor}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${badgeColor}`,
    href: 'https://medium.com/@guilospanck'
  },
})