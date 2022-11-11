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
import React, { useEffect } from 'react';
import CoachMarkCore from './coach-mark';
var CoachMark = function (props) {
    var _a, _b, _c, _d, _e;
    var element = document.querySelector('body');
    var applyHighlight = function (props, activate) {
        if (props.highlightBlock !== undefined) {
            var element_1 = null;
            if (typeof props.highlightBlock === 'string') {
                try {
                    element_1 = document.querySelector(props.highlightBlock) || null;
                }
                catch (e) {
                    console.error(props.highlightBlock + 'is not valid in document.querySelector');
                }
            }
            else if (props.highlightBlock && props.highlightBlock.current) {
                element_1 = props.highlightBlock.current;
            }
            if (element_1 !== null &&
                props.activate &&
                !element_1.className.includes('blue-highlight') &&
                activate) {
                element_1.className = (element_1 === null || element_1 === void 0 ? void 0 : element_1.className) + ' blue-highlight';
                // element.scrollIntoView()
            }
            if (element_1 !== null &&
                props.activate &&
                element_1.className.includes('blue-highlight') &&
                !activate) {
                element_1.className = element_1 === null || element_1 === void 0 ? void 0 : element_1.className.split(' blue-highlight')[0];
            }
        }
    };
    var getElement = function (reference) {
        var element = document.querySelector('body');
        if (typeof reference === 'string') {
            try {
                element = document.querySelector(props.reference.toString()) || null;
            }
            catch (e) {
                console.error(reference + 'is not valid in document.querySelector');
            }
        }
        else if (reference && reference.current) {
            element = reference.current;
        }
        return element;
    };
    useEffect(function () {
        if (props.customActionBefore !== undefined && props.customActionBefore !== null)
            props.customActionBefore();
        applyHighlight(props, true);
        return function () {
            applyHighlight(props, false);
            if (props.customActionAfter !== undefined) {
                props.customActionAfter();
            }
        };
    });
    element = getElement(props.reference);
    if (props === undefined) {
        return null;
    }
    var coreProps = __assign(__assign({}, props), { element: element, tooltip: {
            position: ((_a = props === null || props === void 0 ? void 0 : props.tooltip) === null || _a === void 0 ? void 0 : _a.position) || 'bottom',
            width: ((_b = props === null || props === void 0 ? void 0 : props.tooltip) === null || _b === void 0 ? void 0 : _b.width) ? props.tooltip.width : 0,
            height: ((_c = props === null || props === void 0 ? void 0 : props.tooltip) === null || _c === void 0 ? void 0 : _c.height) ? props.tooltip.height : 0,
            displaceHorizontal: ((_d = props === null || props === void 0 ? void 0 : props.tooltip) === null || _d === void 0 ? void 0 : _d.displaceHorizontal) || 0,
            displaceVertical: ((_e = props === null || props === void 0 ? void 0 : props.tooltip) === null || _e === void 0 ? void 0 : _e.displaceVertical) || 0,
        } });
    return (React.createElement(React.Fragment, null,
        React.createElement(CoachMarkCore, __assign({}, coreProps))));
};
export default CoachMark;
//# sourceMappingURL=index.js.map