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
import { CreatureType } from "game/entity/creature/ICreature";
import { SkillType } from "game/entity/IHuman";
import { IObject } from "game/IObject";
import { ItemType } from "game/item/IItem";
import { IReferenceable } from "game/reference/IReferenceManager";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export interface ICorpseDescription extends IModdable {
    decay?: number;
    resource?: ICorpseResourceDrop[];
    aberrantResource?: ICorpseResourceDrop[];
    carve?: boolean;
    skill?: SkillType;
    damage?: number;
    lightSource?: boolean;
    lightColor?: IRGB;
    animated?: boolean;
    isFlammable?: boolean;
}
export interface ICorpseResourceDrop {
    item: ItemType;
    chance?: number;
}
export interface Corpse extends IReferenceable, IObject<CreatureType>, IVector3 {
    decay?: number;
    aberrant?: boolean;
    step?: number;
    qualityBonus?: number;
    referenceId?: number;
}
