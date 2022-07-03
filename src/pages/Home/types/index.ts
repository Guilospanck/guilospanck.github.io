
export type UseHomeViewModelReturnType = {
  onMouseEnterBadge: (badgeType: BadgeType) => void,
  onMouseLeaveBadge: (badgeType: BadgeType) => void,
  badgeInfo: BadgeInfo
}

export type HomeViewProps = {
  viewModel: UseHomeViewModelReturnType
}

/** Constants */
export const DEFAULT_COLOR = '2d3134'
export const HOVER_COLOR = 'bfbdbd'

export enum BadgeType {
  GITHUB, TWITTER, LINKEDIN, MEDIUM
}

export type BadgeInfo = {
  [badgeType in BadgeType]: {
    src: (color: string) => string,
    href: string,
    color: string,
    title: string
  }
}

export const BADGE_INFO = (): BadgeInfo => ({
  [BadgeType.GITHUB]: {
    src: (color: string) => `https://img.shields.io/badge/GitHub-100000?color=%23${color}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://github.com/Guilospanck',
    color: DEFAULT_COLOR,
    title: 'GitHub'
  },
  [BadgeType.TWITTER]: {
    src: (color: string) => `https://img.shields.io/badge/Twitter-1DA1F2?color=%23${color}&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://twitter.com/Guilospanck',
    color: DEFAULT_COLOR,
    title: 'Twitter'
  },
  [BadgeType.LINKEDIN]: {
    src: (color: string) => `https://img.shields.io/badge/LinkedIn-0077B5?color=%23${color}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://www.linkedin.com/in/guilhermerpereira/',
    color: DEFAULT_COLOR,
    title: 'LinkedIn'
  },
  [BadgeType.MEDIUM]: {
    src: (color: string) => `https://img.shields.io/badge/Medium-12100E?color=%23${color}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${color}`,
    href: 'https://medium.com/@guilospanck',
    color: DEFAULT_COLOR,
    title: 'Medium'
  }
})
