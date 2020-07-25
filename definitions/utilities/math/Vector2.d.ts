/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import ISerializer, { ISerializable } from "save/ISerializer";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
declare type ConsumerVectorRange = (vec: IVector2, value: number) => any;
export default class Vector2 implements IVector2, ISerializable {
    static get ZERO(): Vector2;
    static get ONE(): Vector2;
    static get INFINITY_NEGATIVE(): Vector2;
    static get INFINITY(): Vector2;
    static inRange(center: IVector2, range: number, includeCenter?: boolean): import("@wayward/goodstream/Stream").default<IVector2>;
    static forRange(center: IVector2, range: number, consumer: ConsumerVectorRange): void;
    static forRange(center: IVector2, range: number, includeCenter: boolean, consumer: ConsumerVectorRange): void;
    static forRange(center: IVector2, range: number, min: IVector2, max: IVector2, consumer: ConsumerVectorRange): void;
    static forRange(center: IVector2, range: number, min: IVector2, max: IVector2, includeCenter: boolean, consumer: ConsumerVectorRange): void;
    static cross(vector: IVector2, vector2: IVector2): Vector3;
    static cross<D extends IVector3>(vector: IVector2, vector2: IVector2, dest: D): D;
    static dot(vector: IVector2, vector2: IVector2): number;
    static isDistanceWithin(vector: IVector2, vector2: IVector2, distance: number): boolean;
    static distance(vector: IVector2, vector2: IVector2): number;
    static squaredDistance(vector: IVector2, vector2: IVector2): number;
    static direction(vector: IVector2, vector2: IVector2): Vector2;
    static direction<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static mix(vector: IVector2, vector2: IVector2, time: number): Vector2;
    static mix<D extends IVector2>(vector: IVector2, vector2: IVector2, time: number, dest: D): D;
    static sum(vector: IVector2, vector2: IVector2): Vector2;
    static sum<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static difference(vector: IVector2, vector2: IVector2): Vector2;
    static difference<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static product(vector: IVector2, vector2: IVector2): Vector2;
    static product<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static quotient(vector: IVector2, vector2: IVector2): Vector2;
    static quotient<D extends IVector2>(vector: IVector2, vector2: IVector2, dest: D): D;
    static range(a: IVector2, b: IVector2): Generator<number[], void, unknown>;
    static is(thing: unknown): thing is IVector2;
    private readonly values;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get xy(): [number, number];
    set xy(values: [number, number]);
    constructor();
    constructor(xy: number | [number, number] | IVector2);
    constructor(x: number, y: number);
    at(index: number): number;
    reset(): void;
    copy(): Vector2;
    copy<D extends IVector2>(dest: D): D;
    negate(): Vector2;
    negate<D extends IVector2>(dest: D): D;
    equals(vector: unknown, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: IVector2 | IVector3 | number): this;
    subtract(vector: IVector2 | IVector3 | number): this;
    multiply(vector: IVector2 | IVector3 | number): this;
    divide(vector: IVector2 | IVector3 | number): this;
    floor(dest?: this): this;
    lerp(vector: IVector2, amount: number): this;
    mod(n: number): this;
    scale(value: number): this;
    scale<D extends IVector2>(value: number, dest: D): D;
    normalize(): this;
    normalize<D extends IVector2>(dest: D): D;
    toRadians(): number;
    raw(): IVector2;
    clamp(a: IVector2, b: IVector2): this;
    offset(direction: Direction): this;
    toString(): string;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
export {};
