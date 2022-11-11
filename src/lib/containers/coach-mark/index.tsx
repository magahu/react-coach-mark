import React, { MutableRefObject, useEffect } from 'react'

import { ICoachCoreProps, ICoachProps } from '../../types'

import CoachMarkCore from './coach-mark'

const CoachMark: React.FC<ICoachProps> = (props) => {
  let element: Element | null = document.querySelector('body')

  const applyHighlight = (props: ICoachProps, activate: boolean) => {
    if (props.highlightBlock !== undefined) {
      let element: Element | null = null
      if (typeof props.highlightBlock === 'string') {
        try {
          element = document.querySelector(props.highlightBlock) || null
        } catch (e) {
          console.error(props.highlightBlock + 'is not valid in document.querySelector')
        }
      } else if (props.highlightBlock && props.highlightBlock.current) {
        element = props.highlightBlock.current
      }

      if (
        element !== null &&
        props.activate &&
        !element.className.includes('blue-highlight') &&
        activate
      ) {
        element.className = element?.className + ' blue-highlight'
        // element.scrollIntoView()
      }
      if (
        element !== null &&
        props.activate &&
        element.className.includes('blue-highlight') &&
        !activate
      ) {
        element.className = element?.className.split(' blue-highlight')[0]
      }
    }
  }

  const getElement = (reference: MutableRefObject<null> | string) => {
    let element: Element | null = document.querySelector('body')
    if (typeof reference === 'string') {
      try {
        element = document.querySelector(props.reference.toString()) || null
      } catch (e) {
        console.error(reference + 'is not valid in document.querySelector')
      }
    } else if (reference && reference.current) {
      element = reference.current
    }

    return element
  }

  useEffect(() => {
    if (props.customActionBefore !== undefined && props.customActionBefore !== null)
      props.customActionBefore()

    applyHighlight(props, true)

    return () => {
      applyHighlight(props, false)
      if (props.customActionAfter !== undefined) {
        props.customActionAfter()
      }
    }
  })

  element = getElement(props.reference)

  if (props === undefined) {
    return null
  }

  const coreProps: ICoachCoreProps = {
    ...props,
    element,
    tooltip: {
      position: props?.tooltip?.position || 'bottom',
      width: props?.tooltip?.width ? props.tooltip.width : 0,
      height: props?.tooltip?.height ? props.tooltip.height : 0,
      displaceHorizontal: props?.tooltip?.displaceHorizontal || 0,
      displaceVertical: props?.tooltip?.displaceVertical || 0,
    },
  }

  return (
    <>
      <CoachMarkCore {...coreProps} />
    </>
  )
}

export default CoachMark
