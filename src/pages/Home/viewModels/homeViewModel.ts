import { useState } from 'react'
import { BadgeInfo, BadgeType, BADGE_INFO, DEFAULT_COLOR, HOVER_COLOR, UseHomeViewModelReturnType } from '../types'

export const useHomeViewModel = (): UseHomeViewModelReturnType => {
  /** States */
  const [badgeInfo, setBadgeInfo] = useState<BadgeInfo>(BADGE_INFO())

  const onMouseEnterBadge = (badgeType: BadgeType) => {
    const badgeCopy = { ...badgeInfo }
    badgeCopy[badgeType].color = HOVER_COLOR
    setBadgeInfo(badgeCopy)
  }

  const onMouseLeaveBadge = (badgeType: BadgeType) => {
    const badgeCopy = { ...badgeInfo }
    badgeCopy[badgeType].color = DEFAULT_COLOR
    setBadgeInfo(badgeCopy)
  }

  return {
    onMouseEnterBadge,
    onMouseLeaveBadge,
    badgeInfo
  }
}
