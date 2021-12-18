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
import Stream from "@wayward/goodstream/Stream";
import { CreatureType } from "game/entity/creature/ICreature";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import { ObjectManager } from "game/ObjectManager";
import type { ITile } from "game/tile/ITerrain";
import { TileEventType } from "game/tile/ITileEvent";
import TileEvent from "game/tile/TileEvent";
import type { TextContext } from "language/ITranslation";
import type { IVector3 } from "utilities/math/IVector";
export interface ITileManagerEvents {
    /**
     * Called when a tile event is about to be created
     * @param type The type of tile event
     * @param x The x coordinate where the tile event will be created
     * @param y The y coordinate where the tile event will be created
     * @param z The z coordinate where the tile event will be created
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canCreate(type: TileEventType, x: number, y: number, z: number): boolean | undefined;
    /**
     * Called when a tile event is created.
     */
    create(event: TileEvent): any;
    /**
     * Called when a tile event is removed.
     */
    remove(event: TileEvent): any;
    /**
     * Called when a tile event is moved.
     */
    move(event: TileEvent): any;
}
export default class TileEventManager extends ObjectManager<TileEvent, ITileManagerEvents> {
    load(): void;
    create(type: TileEventType, x: number, y: number, z: number): TileEvent | undefined;
    createFake(type: TileEventType, x: number, y: number, z: number): TileEvent | undefined;
    remove(tileEvent: TileEvent): void;
    getFromTile(tile: ITile, type: TileEventType): TileEvent | undefined;
    /**
     * Gets an array of tile events that have the water property at a given tile.
     * @param tile ITile that you want to look at.
     * @returns Array of tile events with water properties or undefined
     */
    getPuddles(tile: ITile): TileEvent[] | undefined;
    canGather(tile: ITile): TileEvent | undefined;
    updateAll(): void;
    fireOverflow(x: number, y: number, z: number): boolean;
    canPickup(tile: ITile): TileEvent | undefined;
    blocksTile(tile: ITile): boolean;
    /**
     * Creates either blood or water blood
     * @param x X-axis of the tile where you want to spawn around (can be any adjacent tile)
     * @param y Y-axis of the tile where you want to spawn around (can be any adjacent tile)
     * @param z Z-axis of the tile where you want to spawn around (can be any adjacent tile)
     * @returns True if the blood was created, false if not
     */
    createBlood(x: number, y: number, z: number): boolean;
    clearBlood(position: IVector3, executor: NPC | Player): boolean;
    /**
     * Clears all the water puddles on a specified tile.
     * @param point The point to check for water puddles at.
     * @param executor The player to send the message to.
     */
    clearPuddles(point: IVector3, executor: NPC | Player): boolean;
    moveExcrement(position: IVector3): void;
    containsDamagingTileEvents(events: TileEvent[] | undefined): boolean;
    getName(typeOrEvent: CreatureType | TileEvent, article?: boolean, count?: number, showCount?: boolean): import("../../language/impl/TranslationImpl").default;
    getEventTranslations(events: TileEvent[], article?: boolean, context?: TextContext): Stream<import("../../language/impl/TranslationImpl").default>;
    getEventListTranslation(events: TileEvent[], article?: boolean, context?: TextContext): import("../../language/impl/TranslationImpl").default;
}
