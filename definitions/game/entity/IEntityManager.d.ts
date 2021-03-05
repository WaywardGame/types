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
import Entity from "game/entity/Entity";
import { MoveType } from "game/entity/IEntity";
import { IBound3 } from "utilities/math/Bound3";
export interface IEntityManager<T extends Entity> {
    getEntities(): SaferArray<T>;
    remove(entity: T): void;
    updateFov(bounds: IBound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
}
export default IEntityManager;
export interface IMoveTypeZ {
    moveType: MoveType;
    z: number;
}
