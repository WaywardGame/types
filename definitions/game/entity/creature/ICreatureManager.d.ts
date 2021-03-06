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
import { MoveType } from "game/entity/IEntity";
export interface ISpawnableCreatures {
    pool: CreatureType[];
    aberrantChance: number;
}
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
