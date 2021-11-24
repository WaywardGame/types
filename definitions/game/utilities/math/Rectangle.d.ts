/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IBox } from "ui/component/IComponent";
import Vector2 from "utilities/math/Vector2";
export default class Rectangle implements IBox {
    readonly position: Vector2;
    readonly size: Vector2;
    static fromDimensions(x: number, y: number, w: number, h: number): Rectangle;
    static fromBox(box: IBox): Rectangle;
    get left(): number;
    set left(value: number);
    get top(): number;
    set top(value: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get right(): number;
    get bottom(): number;
    constructor(position: Vector2, size: Vector2);
    intersects(rect2: Rectangle): boolean;
}
