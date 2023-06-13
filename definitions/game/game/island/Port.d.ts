/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Doodad from "game/doodad/Doodad";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { Reference, ReferenceType } from "game/reference/IReferenceManager";
import { type ISerializedTranslation } from "language/ITranslation";
import TranslationImpl from "language/impl/TranslationImpl";
import { type ISerializer, type IUnserializedCallback } from "save/serializer/ISerializer";
import type { IVector3 } from "utilities/math/IVector";
interface IPort {
    id: number;
    islandId: IslandId;
    renamed?: string | ISerializedTranslation;
    name: ISerializedTranslation;
    position: IVector3;
    doodadRef?: Reference<ReferenceType.Doodad>;
    lit: boolean;
}
interface Port extends Readonly<IPort> {
}
declare class Port {
    static fromDoodad(doodad: Doodad): Port;
    constructor(port: IPort);
    getDoodad(): Doodad | undefined;
    get island(): Island | undefined;
    getName(): TranslationImpl;
}
export default Port;
export declare class PortManager extends Map<number, Port> implements IUnserializedCallback {
    private readonly island;
    constructor(island: Island);
    onUnserialized(serializer: ISerializer): void;
    register(doodad: Doodad): void;
    deregister(doodad: Doodad): boolean;
    get litPortCount(): number;
}
