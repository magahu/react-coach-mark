var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CoachUtils, CommonUtils } from '../../utilities';
var CoachMarkCore = function (props) {
    var _a = useState(null), dimension = _a[0], setDimension = _a[1];
    useEffect(function () {
        var _a;
        if (!(props.activate && props.element))
            return;
        if (typeof props.reference === 'string') {
            try {
                var element = null;
                element = document.querySelector(props.reference) || null;
                if (!element)
                    return;
                props.element = element;
            }
            catch (e) {
                console.error(props.reference + 'is not valid in document.querySelector');
            }
        }
        if (props.highlightBlock !== undefined) {
            var element = null;
            if (typeof props.highlightBlock === 'string') {
                try {
                    element = document.querySelector(props.highlightBlock) || null;
                }
                catch (e) {
                    console.error(props.highlightBlock + 'is not valid in document.querySelector');
                }
            }
            else if (props.highlightBlock && props.highlightBlock.current) {
                console.log('here');
                element = props.highlightBlock.current;
            }
            if (element !== null)
                element.className = (element === null || element === void 0 ? void 0 : element.className) + 'blue-highlight';
        }
        (_a = props.element) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
        CoachUtils.dimensionSetter({ element: props.element, setDimension: setDimension });
        var scrollEvent = function () {
            CommonUtils.debounce(CoachUtils.dimensionSetter, 300)({ element: props.element, setDimension: setDimension });
        };
        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('resize', scrollEvent);
        if (props.customActionAfter !== undefined)
            props.customActionAfter();
        return function () {
            window.removeEventListener('scroll', scrollEvent);
            window.removeEventListener('resize', scrollEvent);
        };
        //eslint-disable-next-line
    }, [props.activate, props.element]);
    if (!dimension || !props.activate || !props.element) {
        if ((dimension && props.activate) && !props.element) {
            console.error('Ref is not passed properly @Coach-Mark');
        }
        return null;
    }
    var base = React.createElement("div", { className: props.darkBackground ? "harsh-coach-mark dark-background" : "harsh-coach-mark", style: {
            top: dimension.topSpace,
            left: dimension.leftSpace,
            height: dimension.height + 10,
            width: dimension.width + 10,
        } });
    var tip = React.createElement("div", { className: "hcm-tooltip-base hcm-tooltip-base-" + props.tooltip.position, style: __assign({}, CoachUtils.toolTipPlacementCalculator({ dimension: dimension, position: props.tooltip.position })) }, props.component);
    return (React.createElement(React.Fragment, null,
        ReactDOM.createPortal(base, document.body),
        ReactDOM.createPortal(tip, document.body)));
};
export default CoachMarkCore;
//# sourceMappingURL=coach-mark.js.map