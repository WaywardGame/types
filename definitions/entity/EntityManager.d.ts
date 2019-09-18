/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IMoveTypeZ } from "entity/creature/ICreatureManager";
import { EntityPlayerCreatureNpc } from "entity/IEntity";
import { IEntityManager } from "entity/IEntityManager";
import EventEmitter from "event/EventEmitter";
import Bound3 from "utilities/math/Bound3";
export interface IEntityManagerEvents {
}
export default abstract class EntityManager<T extends EntityPlayerCreatureNpc> extends EventEmitter.Host<IEntityManagerEvents> implements IEntityManager<T> {
    private moveTypesInFov;
    remove(entity: T): void;
    updateFov(bounds: Bound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
    abstract getEntities(): SaferArray<T>;
}
