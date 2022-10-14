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
import React from 'react';
import CoachMarkCore from './coach-mark';
var CoachMark = function (props) {
    var _a;
    if (props.customActionBefore !== undefined)
        props.customActionBefore();
    var element = null;
    if (typeof props.reference === 'string') {
        try {
            element = document.querySelector(props.reference) || null;
        }
        catch (e) {
            console.error(props.reference + 'is not valid in document.querySelector');
        }
    }
    else if (props.reference && props.reference.current) {
        console.log('here');
        element = props.reference.current;
    }
    console.log('here');
    console.log(element, props);
    if (!element) {
        return null;
    }
    var coreProps = __assign(__assign({}, props), { element: element, tooltip: {
            position: ((_a = props === null || props === void 0 ? void 0 : props.tooltip) === null || _a === void 0 ? void 0 : _a.position) || 'bottom'
        } });
    return (React.createElement(React.Fragment, null,
        React.createElement(CoachMarkCore, __assign({}, coreProps))));
};
export default CoachMark;
//# sourceMappingURL=index.js.map