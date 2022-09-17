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
import type { ISerializable, ISerializer } from "save/serializer/ISerializer";
import { Types } from "save/serializer/ISerializer";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
declare type ConsumerVectorRange = (vec: IVector2, value: number) => any;
export default class Vector2 implements IVector2, ISerializable {
    static get ZERO(): Vector2;
    static get ONE(): Vector2;
    static get INFINITY_NEGATIVE(): Vector2;
    static get INFINITY(): Vector2;
    static readonly DIRECTIONS: Readonly<Record<Direction, Vector2>>;
    static xy(vector: IVector2): [x: number, y: number];
    static fromSize(size: {
        width: number;
        height: number;
    }): Vector2;
    static fromSize(size?: {
        width: number;
        height: number;
    }): Vector2 | undefined;
    static fromTopLeft(topLeft: {
        top: number;
        left: number;
    }): Vector2;
    static fromTopLeft(topLeft?: {
        top: number;
        left: number;
    }): Vector2 | undefined;
    static fromClient(clientXClientY: {
        clientX?: number;
        clientY?: number;
    }): Vector2;
    static fromClient(clientXClientY?: {
        clientX?: number;
        clientY?: number;
    }): Vector2 | undefined;
    static inRange(center: IVector2, range: number, includeCenter?: boolean): import("@wayward/goodstream").default<IVector2>;
    static angle(directionInRadians: number, distance?: number): Vector2;
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
    map(mapper: (v2: Vector2) => Vector2): Vector2;
    negate(): Vector2;
    negate<D extends IVector2>(dest: D): D;
    equals(x: number, y: number, threshold?: number): boolean;
    equals(vector?: IVector2, threshold?: number): boolean;
    length(): number;
    squaredLength(): number;
    add(vector: IVector2 | IVector3): this;
    add(amount: number): this;
    add(x: number, y: number): this;
    subtract(vector: IVector2 | IVector3): this;
    subtract(amount: number): this;
    subtract(x: number, y: number): this;
    multiply(vector: IVector2 | IVector3): this;
    multiply(amount: number): this;
    multiply(x: number, y: number): this;
    divide(vector: IVector2 | IVector3): this;
    divide(amount: number): this;
    divide(x: number, y: number): this;
    floor(dest?: this): this;
    ceil(dest?: this): this;
    round(dest?: this): this;
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
    serializeObject(serializer: ISerializer): undefined;
    deserializeObject(serializer: ISerializer, dataType: Types): boolean;
}
export {};
