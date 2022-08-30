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
import EventEmitter from "event/EventEmitter";
import { CreatureType } from "game/entity/creature/ICreature";
import type { CreationId } from "game/IGame";
import type { IObject } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import { ItemType } from "game/item/IItem";
import type { IReferenceable } from "game/reference/IReferenceManager";
import type { ITile } from "game/tile/ITerrain";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import type { IVector3 } from "utilities/math/IVector";
export interface ICorpseEvents {
}
export default class Corpse extends EventEmitter.Host<ICorpseEvents> implements IObject<CreatureType>, IVector3, IReferenceable {
    static is(value: any): value is Corpse;
    readonly objectType: CreationId.Corpse;
    aberrant?: boolean | undefined;
    decay?: number | undefined;
    startingDecay?: number;
    id: number;
    qualityBonus?: number | undefined;
    referenceId?: number;
    renamed?: string | ISerializedTranslation | undefined;
    step?: number | undefined;
    respawned?: number;
    type: CreatureType;
    x: number;
    y: number;
    z: number;
    islandId: IslandId;
    constructor(type?: CreatureType, islandId?: `${number},${number}`, x?: number, y?: number, z?: number, decay?: number);
    get island(): import("../../../island/Island").default;
    toString(): string;
    /**
     * @param article Whether to include an article for the name of the creature. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this creature that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `corpse.getName()` // "an acid spitter demon"
     * - `corpse.getName(false)` // "acid spitter demon"
     * - `corpse.getName(undefined, 3)` // "acid spitter demons"
     */
    getName(article?: false | "definite" | "indefinite", count?: number): Translation;
    getTile(): ITile;
    isValid(): boolean;
    getDecayAtStart(): number;
    update(): void;
    getResources(clientSide?: boolean): ItemType[];
}
