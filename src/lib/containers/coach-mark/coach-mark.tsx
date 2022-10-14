import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ICoachCoreProps, IDimension } from '../../types';
import { CoachUtils, CommonUtils } from '../../utilities';

const CoachMarkCore: React.FC<ICoachCoreProps> = (props) => {

    const [dimension, setDimension] = useState<IDimension | null>(null);

    useEffect(() => {

        if(!props.activate) return;
        if (typeof props.reference === 'string') {
            try {
                let element: Element | null = null;
                element = document.querySelector(props.reference) || null;
                if(!element)
                    return

                props.element = element
            } catch (e) { console.error(props.reference + 'is not valid in document.querySelector') }
        }

        if (!(props.activate && props.element)) return;

        if (props.highlightBlock !== undefined) {

            let element: Element | null = null;
            if (typeof props.highlightBlock === 'string') {
                try {
                    element = document.querySelector(props.highlightBlock) || null;
                } catch (e) { console.error(props.highlightBlock + 'is not valid in document.querySelector') }
            } else if (props.highlightBlock && props.highlightBlock.current) {
                console.log('here')
                element = props.highlightBlock.current;
            }
            if(element !== null)
                element.className = element?.className + 'blue-highlight';
        }

        props.element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        CoachUtils.dimensionSetter({ element: props.element, setDimension });
        const scrollEvent = function () {
            CommonUtils.debounce(CoachUtils.dimensionSetter, 300)({ element: props.element, setDimension });
        }
        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('resize', scrollEvent);

        if (props.customActionAfter !== undefined)
            props.customActionAfter()

        return () => {
            window.removeEventListener('scroll', scrollEvent);
            window.removeEventListener('resize', scrollEvent);
        }

        //eslint-disable-next-line
    }, [props.activate, props.element]);

    if (!dimension || !props.activate || !props.element) {
        if ((dimension && props.activate) && !props.element) {
            console.error('Ref is not passed properly @Coach-Mark');
        }
        return null;
    }

    const base = <div className={props.darkBackground ? "harsh-coach-mark dark-background" : "harsh-coach-mark"}
        style={{
            top: dimension.topSpace,
            left: dimension.leftSpace,
            height: dimension.height + 10,
            width: dimension.width + 10,
        }}>
    </div>;

    const tip = <div
        className={`hcm-tooltip-base hcm-tooltip-base-${props.tooltip.position}`}
        style={{
            ...CoachUtils.toolTipPlacementCalculator({ dimension, position: props.tooltip.position })
        }}>{props.component}</div>;

    return (
        <>
            {ReactDOM.createPortal(base, document.body)}
            {ReactDOM.createPortal(tip, document.body)}
        </>
    );
};

export default CoachMarkCore;

