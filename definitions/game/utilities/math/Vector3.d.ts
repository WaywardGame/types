/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ISerializable, ISerializer } from "@wayward/game/save/serializer/ISerializer";
import { Types } from "@wayward/game/save/serializer/ISerializer";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
export default class Vector3 implements IVector3, ISerializable {
    static get ZERO(): Vector3;
    static get ONE(): Vector3;
    static get UP(): Vector3;
    static get RIGHT(): Vector3;
    static get FORWARD(): Vector3;
    static xy(vector: IVector3): [x: number, y: number];
    static yz(vector: IVector3): [y: number, z: number];
    static xz(vector: IVector3): [x: number, z: number];
    static xyz(vector: IVector3): [x: number, y: number, z: number];
    static cross(vector: IVector3, vector2: IVector3): Vector3;
    static cross<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static dot(vector: IVector3, vector2: IVector3): number;
    static distance(vector: IVector3, vector2: IVector3): number;
    static squaredDistance(vector: IVector3, vector2: IVector3): number;
    static equals(vec1?: IVector3, vec2?: IVector3): boolean;
    static direction(vector: IVector3, vector2: IVector3): Vector3;
    static direction<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static mix(vector: IVector3, vector2: IVector3, time: number): Vector3;
    static mix<D extends IVector3>(vector: IVector3, vector2: IVector3, time: number, dest: D): D;
    static sum(vector: IVector3, vector2: IVector3): Vector3;
    static sum<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static difference(vector: IVector3, vector2: IVector3): Vector3;
    static difference<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static product(vector: IVector3, vector2: IVector3): Vector3;
    static product<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static quotient(vector: IVector3, vector2: IVector3): Vector3;
    static quotient<D extends IVector3>(vector: IVector3, vector2: IVector3, dest: D): D;
    static is(thing: unknown): thing is IVector3;
    static rawCopy(v3: IVector3): IVector3;
    private readonly values;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get z(): number;
    set z(value: number);
    get xy(): [x: number, y: number];
    set xy(values: [x: number, y: number]);
    get xz(): [x: number, z: number];
    set xz(values: [x: number, z: number]);
    get yz(): [y: number, z: number];
    set yz(values: [y: number, z: number]);
    get xyz(): [x: number, y: number, z: number];
    set xyz(values: [x: number, y: number, z: number]);
    constructor();
    constructor(xy: IVector2, z: number);
    constructor(xyz: number | [x: number, y: number, z: number] | IVector3);
    constructor(x: number, y: number, z: number);
    at(index: number): number;
    reset(): void;
    copy(): Vector3;
    copy<D extends IVector3>(dest: D): D;
    negate(): Vector3;
    negate<D extends IVector3>(dest: D): D;
    equals(vector: unknown, threshold?: number): vector is IVector3;
    length(): number;
    squaredLength(): number;
    add(vectorOrNumber: PartialUnion<[IVector3, IVector2]> | number): this;
    subtract(vectorOrNumber: PartialUnion<[IVector3, IVector2]> | number): this;
    multiply(vectorOrNumber: PartialUnion<[IVector3, IVector2]> | number): this;
    divide(vectorOrNumber: PartialUnion<[IVector3, IVector2]> | number): this;
    scale(value: number): this;
    scale<D extends IVector3>(value: number, dest: D): D;
    normalize(): this;
    normalize<D extends IVector3>(dest: D): D;
    raw(): IVector3;
    toString(): string;
    serializeObject(serializer: ISerializer): undefined;
    deserializeObject(serializer: ISerializer, dataType: Types): boolean;
}
