import { IDimensionSetter, IDirections, IToolTipPlacement } from "../types";

export function toolTipPlacementCalculator({ dimension, position }: IToolTipPlacement): IDirections {

    if (position === 'top') {
        return {
            bottom: dimension.bottomSpace + dimension.height + 30,
            left: dimension.leftSpace,
        }
    }

    if (position === 'right') {
        return {
            left: dimension.width + dimension.leftSpace + 30,
            top: dimension.topSpace,
        }
    }

    if (position === 'left') {
        return {
            right: dimension.width + dimension.rightSpace + 30,
            top: dimension.topSpace,
        }
    }

    if (position === 'center') {
        return {
            right: dimension.width +  dimension.bottomSpace  + 30,
            top: dimension.topSpace,
        }
    }

    return {
        top: dimension.height + dimension.height + 30,
        left: dimension.leftSpace,
    }

}

export function dimensionSetter({ element, setDimension }: IDimensionSetter) {
    let rect = element.getBoundingClientRect();
    if (!rect) return;
    setDimension({
        height: rect.height,
        width: rect.width,
        leftSpace: rect.left - 5,
        rightSpace: (window.innerWidth - rect.right - 5),
        topSpace: rect.top - 5,
        bottomSpace: (window.innerHeight - rect.bottom - 5),
        centerSpace: (window.innerWidth - rect.right)
    })
}