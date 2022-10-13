export function debounce(fn, time) {
    var timOut = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timOut) {
            clearTimeout(timOut);
        }
        timOut = setTimeout(function () {
            fn.apply(null, args);
            timOut = null;
        }, time);
    };
}
//# sourceMappingURL=common.js.map