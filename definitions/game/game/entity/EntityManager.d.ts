/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { IEntityManager, IHumanBound } from "@wayward/game/game/entity/IEntityManager";
import { ObjectManager } from "@wayward/game/game/ObjectManager";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IEntityManagerEvents<T extends Entity> {
    create(entity: T, creator?: Human): any;
    remove(entity: T): any;
}
export interface IEntityCanCreateOptions {
    allowEdgeSpawning?: boolean;
    allowOnBlockedTiles?: boolean;
    allowOnFire?: boolean;
    allowOverDooadsAndTileEvents?: boolean;
    blockOnScarecrow?: boolean;
}
export interface IEntityRemoveOptions {
    keepMarker?: boolean;
}
export default abstract class EntityManager<T extends Entity, RemoveOptions extends IEntityRemoveOptions = IEntityRemoveOptions> extends ObjectManager<T, IEntityManagerEvents<T>> implements IEntityManager<T> {
    /**
     * Indicates if objects should be re-registered to the memory leak detector after loading
     */
    protected readonly reregisterObjectsForMemoryLeaks: boolean;
    /**
     * Called when an entity is being removed
     * @param entity Entity to remove
     * @returns Return true if this method handled tile updates
     */
    protected abstract onRemove(entity: T, options?: RemoveOptions & IEntityRemoveOptions): boolean;
    protected abstract loadEntity?(entity: T): void;
    load(): void;
    /**
     * Restores a previous removed entity
     */
    restore(entity: T): void;
    remove(entity: T, options?: RemoveOptions): void;
    updateFov(humanBounds: IHumanBound[]): void;
    /**
     * Checks if the target position is a good spot for a new entity
     */
    protected canCreateEntity(tile: Tile, options?: IEntityCanCreateOptions): boolean;
}
