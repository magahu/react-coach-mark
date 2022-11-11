import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { ICoachCoreProps, IDimension } from '../../types'
import { CoachUtils, CommonUtils } from '../../utilities'

const CoachMarkCore: React.FC<ICoachCoreProps> = (props) => {
  const [dimension, setDimension] = useState<IDimension | null>(null)

  useEffect(() => {
    if (props.activate === false || props.element === null) return

    props.element.scrollIntoView({ behavior: 'smooth', block: 'center' })

    CoachUtils.dimensionSetter({ element: props.element, setDimension })
    const scrollEvent = function () {
      CommonUtils.debounce(
        CoachUtils.dimensionSetter,
        300,
      )({ element: props.element, setDimension })
    }

    window.addEventListener('scroll', scrollEvent)
    window.addEventListener('resize', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
      window.removeEventListener('resize', scrollEvent)
    }

    // eslint-disable-next-line
  }, [props.activate, props.element])

  if (!dimension) {
    if (!dimension) {
      // console.warn('no dimension')
    }
    return <div>cargando...</div>
  }

  const base = (
    <div
      className={props.darkBackground ? 'harsh-coach-mark dark-background' : 'harsh-coach-mark'}
      style={{
        top: dimension.topSpace,
        left: dimension.leftSpace,
        height: dimension.height + 10,
        width: dimension.width + 10,
        display: !props.activate ? 'none' : 'block',
      }}
    ></div>
  )
  const tip = (
    <div
      id='coachContainer'
      className={`hcm-tooltip-base hcm-tooltip-base-${props.tooltip.position}`}
      style={{
        ...CoachUtils.toolTipPlacementCalculator({
          dimension,
          position: props.tooltip.position,
          coachElementWidth: props.tooltip.width ? props.tooltip.width : 0,
          coachElementHeight: props.tooltip.height ? props.tooltip.height : 0,
          displaceHorizontal: props.tooltip.displaceHorizontal,
          displaceVertical: props.tooltip.displaceVertical,
        }),
      }}
    >
      {props.component}
    </div>
  )

  return (
    <>
      {ReactDOM.createPortal(base, document.body)}
      {ReactDOM.createPortal(tip, document.body)}
    </>
  )
}

export default CoachMarkCore
