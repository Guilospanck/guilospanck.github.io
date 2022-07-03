import { useState } from "react";
import { BadgeInfo, BADGE_INFO, UseHomeViewModelReturnType } from "../types";

export const useHomeViewModel = (): UseHomeViewModelReturnType => {
  /** Constants */
  const DEFAULT_COLOR = '2d3134'
  const HOVER_COLOR = 'bfbdbd'  

  /** States */
  const [badgeInfo, setBadgeInfo] = useState<BadgeInfo>(BADGE_INFO(DEFAULT_COLOR))

  const onMouseEnterBadge = () => {
    setBadgeInfo(BADGE_INFO(HOVER_COLOR))
  }

  const onMouseLeaveBadge = () => {
    setBadgeInfo(BADGE_INFO(DEFAULT_COLOR))
  }


  return {
    onMouseEnterBadge,
    onMouseLeaveBadge,
    badgeInfo
  }
};