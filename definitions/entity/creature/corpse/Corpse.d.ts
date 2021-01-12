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
import { CreatureType } from "entity/creature/ICreature";
import { IObject } from "game/IObject";
import { IReferenceable } from "game/IReferenceManager";
import { ItemType } from "item/IItem";
import { ISerializedTranslation } from "language/Translation";
import { IVector3 } from "utilities/math/IVector";
export default class Corpse implements IObject<CreatureType>, IVector3, IReferenceable {
    aberrant?: boolean | undefined;
    decay?: number | undefined;
    id: number;
    qualityBonus?: number | undefined;
    referenceId?: number;
    renamed?: string | ISerializedTranslation | undefined;
    step?: number | undefined;
    type: CreatureType;
    x: number;
    y: number;
    z: number;
    constructor(type?: CreatureType, x?: number, y?: number, z?: number, decay?: number);
    update(): void;
    getResources(clientSide?: boolean): ItemType[];
}
