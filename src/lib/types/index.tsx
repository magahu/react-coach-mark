import { MutableRefObject, ReactNode } from 'react'

export interface IPositionTypes {
  position: 'left' | 'top' | 'right' | 'bottom' | 'center'
  width?: number
  height?: number
  displaceVertical?: number
  displaceHorizontal?: number
}

export type ITooltip = IPositionTypes

export interface ICoachProps {
  /*
       activate : true | false
   */
  activate: boolean
  /*
        component can be react component
    */
  component: ReactNode
  /*
        reference can be react ref or an object with current as element or valid css selector
    */
  reference: MutableRefObject<null> | string
  /*
        default value of position be bottom
    */
  tooltip?: ITooltip
  darkBackground: boolean
  customActionBefore?: () => Promise<void>
  customActionAfter?: () => void
  highlightBlock?: MutableRefObject<null> | string
}

export interface ICoachCoreProps {
  activate: boolean
  component: ReactNode
  element: Element | null
  tooltip: ITooltip
  darkBackground: boolean
  customActionAfter?: () => void
  highlightBlock?: MutableRefObject<null> | string
  reference: MutableRefObject<null> | string
}

export interface IDirections {
  top?: number
  bottom?: number
  right?: number
  left?: number
  center?: number
}

export interface IDimension {
  height: number
  width: number
  leftSpace: number
  rightSpace: number
  topSpace: number
  bottomSpace: number
  centerSpace: number
}

export interface IDimensionSetter {
  element: Element
  setDimension: (dimension: IDimension) => void
}

export interface IToolTipPlacement extends IPositionTypes {
  dimension: IDimension
  coachElementWidth: number
  coachElementHeight: number
}
