import { IDimensionSetter, IDirections, IToolTipPlacement } from '../types'

export function toolTipPlacementCalculator({
  dimension,
  position,
  coachElementWidth,
  coachElementHeight,
  displaceHorizontal = 0,
  displaceVertical = 0,
}: IToolTipPlacement): IDirections {
  if (position === 'top') {
    return {
      bottom: dimension.bottomSpace + dimension.height + 30 + displaceVertical,
      left: dimension.leftSpace + displaceHorizontal,
    }
  }

  if (position === 'right') {
    return {
      left: dimension.width + dimension.leftSpace + 30 + displaceHorizontal,
      top: dimension.topSpace + displaceVertical,
    }
  }

  if (position === 'left') {
    return {
      right: dimension.width + dimension.rightSpace + 30 + displaceHorizontal,
      top: dimension.topSpace + displaceVertical,
    }
  }

  if (position === 'center') {
    console.log(coachElementHeight + ' ' + coachElementWidth)
    return {
      left: dimension.leftSpace + dimension.width / 2 - coachElementWidth,
      top: dimension.topSpace + dimension.height / 2 - coachElementHeight,
    }
  }

  return {
    top: dimension.height + dimension.height + 30,
    left: dimension.leftSpace,
  }
}

export function dimensionSetter({ element, setDimension }: IDimensionSetter) {
  const rect = element.getBoundingClientRect()
  if (!rect) return
  setDimension({
    height: rect.height,
    width: rect.width,
    leftSpace: rect.left - 5,
    rightSpace: window.innerWidth - rect.right,
    topSpace: rect.top - 5,
    bottomSpace: window.innerHeight - rect.bottom,
    centerSpace: window.innerWidth - rect.right,
  })
}

export function waitForElement(selector: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve()
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve()
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}
