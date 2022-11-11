export function toolTipPlacementCalculator(_a) {
    var dimension = _a.dimension, position = _a.position, coachElementWidth = _a.coachElementWidth, coachElementHeight = _a.coachElementHeight, _b = _a.displaceHorizontal, displaceHorizontal = _b === void 0 ? 0 : _b, _c = _a.displaceVertical, displaceVertical = _c === void 0 ? 0 : _c;
    if (position === 'top') {
        return {
            bottom: dimension.bottomSpace + dimension.height + 30 + displaceVertical,
            left: dimension.leftSpace + displaceHorizontal,
        };
    }
    if (position === 'right') {
        return {
            left: dimension.width + dimension.leftSpace + 30 + displaceHorizontal,
            top: dimension.topSpace + displaceVertical,
        };
    }
    if (position === 'left') {
        return {
            right: dimension.width + dimension.rightSpace + 30 + displaceHorizontal,
            top: dimension.topSpace + displaceVertical,
        };
    }
    if (position === 'center') {
        console.log(coachElementHeight + ' ' + coachElementWidth);
        return {
            left: dimension.leftSpace + dimension.width / 2 - coachElementWidth,
            top: dimension.topSpace + dimension.height / 2 - coachElementHeight,
        };
    }
    return {
        top: dimension.height + dimension.height + 30,
        left: dimension.leftSpace,
    };
}
export function dimensionSetter(_a) {
    var element = _a.element, setDimension = _a.setDimension;
    var rect = element.getBoundingClientRect();
    if (!rect)
        return;
    setDimension({
        height: rect.height,
        width: rect.width,
        leftSpace: rect.left - 5,
        rightSpace: window.innerWidth - rect.right,
        topSpace: rect.top - 5,
        bottomSpace: window.innerHeight - rect.bottom,
        centerSpace: window.innerWidth - rect.right,
    });
}
export function waitForElement(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve();
        }
        var observer = new MutationObserver(function () {
            if (document.querySelector(selector)) {
                resolve();
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}
//# sourceMappingURL=coach.js.map