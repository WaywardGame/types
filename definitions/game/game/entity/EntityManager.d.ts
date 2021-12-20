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
import type { IMoveTypeZ } from "game/entity/creature/ICreatureManager";
import type Entity from "game/entity/Entity";
import type { IEntityManager } from "game/entity/IEntityManager";
import { ObjectManager } from "game/ObjectManager";
import Bound3 from "utilities/math/Bound3";
export interface IEntityManagerEvents<T extends Entity> {
    spawn(entity: T): any;
    remove(entity: T): any;
}
export interface IEntityCanCreateOptions {
    allowEdgeSpawning?: boolean;
    allowOnBlockedTiles?: boolean;
    allowOnFire?: boolean;
    allowOverDooadsAndTileEvents?: boolean;
    chanceOfScarecrowScare?: number;
}
export default abstract class EntityManager<T extends Entity> extends ObjectManager<T, IEntityManagerEvents<T>> implements IEntityManager<T> {
    private readonly moveTypesInFov;
    remove(entity: T): void;
    updateFov(bounds: Bound3[]): number;
    getMoveTypesInFov(): IMoveTypeZ[];
    /**
     * Checks if the target position is a good spot for a new entity
     */
    protected canCreateEntity(x: number, y: number, z: number, options?: IEntityCanCreateOptions): boolean;
}
