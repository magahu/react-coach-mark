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
        if (props.activate === false || props.element === null)
            return;
        props.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        CoachUtils.dimensionSetter({ element: props.element, setDimension: setDimension });
        var scrollEvent = function () {
            CommonUtils.debounce(CoachUtils.dimensionSetter, 300)({ element: props.element, setDimension: setDimension });
        };
        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('resize', scrollEvent);
        return function () {
            window.removeEventListener('scroll', scrollEvent);
            window.removeEventListener('resize', scrollEvent);
        };
        // eslint-disable-next-line
    }, [props.activate, props.element]);
    if (!dimension) {
        if (!dimension) {
            // console.warn('no dimension')
        }
        return React.createElement("div", null, "cargando...");
    }
    var base = (React.createElement("div", { className: props.darkBackground ? 'harsh-coach-mark dark-background' : 'harsh-coach-mark', style: {
            top: dimension.topSpace,
            left: dimension.leftSpace,
            height: dimension.height + 10,
            width: dimension.width + 10,
            display: !props.activate ? 'none' : 'block',
        } }));
    var tip = (React.createElement("div", { id: 'coachContainer', className: "hcm-tooltip-base hcm-tooltip-base-" + props.tooltip.position, style: __assign({}, CoachUtils.toolTipPlacementCalculator({
            dimension: dimension,
            position: props.tooltip.position,
            coachElementWidth: props.tooltip.width ? props.tooltip.width : 0,
            coachElementHeight: props.tooltip.height ? props.tooltip.height : 0,
            displaceHorizontal: props.tooltip.displaceHorizontal,
            displaceVertical: props.tooltip.displaceVertical,
        })) }, props.component));
    return (React.createElement(React.Fragment, null,
        ReactDOM.createPortal(base, document.body),
        ReactDOM.createPortal(tip, document.body)));
};
export default CoachMarkCore;
//# sourceMappingURL=coach-mark.js.map