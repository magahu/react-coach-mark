import { IDimensionSetter, IDirections, IToolTipPlacement } from '../types';
export declare function toolTipPlacementCalculator({ dimension, position, coachElementWidth, coachElementHeight, displaceHorizontal, displaceVertical, }: IToolTipPlacement): IDirections;
export declare function dimensionSetter({ element, setDimension }: IDimensionSetter): void;
export declare function waitForElement(selector: string): Promise<void>;
