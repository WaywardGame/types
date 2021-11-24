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
import type { CreatureType } from "game/entity/creature/ICreature";
import type { SkillType } from "game/entity/IHuman";
import type { IObject } from "game/IObject";
import type { ItemType } from "game/item/IItem";
import type { IReferenceable } from "game/reference/IReferenceManager";
import type { IModdable } from "mod/ModRegistry";
import type { IRGB } from "utilities/Color";
import type { IVector3 } from "utilities/math/IVector";
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