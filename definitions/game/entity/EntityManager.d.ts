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
import { IMoveTypeZ } from "game/entity/creature/ICreatureManager";
import Entity from "game/entity/Entity";
import { IEntityManager } from "game/entity/IEntityManager";
import Bound3 from "utilities/math/Bound3";
export interface IEntityManagerEvents<T extends Entity> {
    spawn(entity: T): any;
    remove(entity: T): any;
}
export default abstract class EntityManager<T extends Entity> extends EventEmitter.Host<IEntityManagerEvents<T>> implements IEntityManager<T> {
    private moveTypesInFov;
    remove(entity: T): void;
    updateFov(bounds: Bound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
    abstract getEntities(): SaferArray<T>;
}
