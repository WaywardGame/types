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
import { ObjectManager } from "game/ObjectManager";
import { TileEventType } from "game/tile/ITileEvent";
import type Tile from "game/tile/Tile";
import TileEvent from "game/tile/TileEvent";
import type { TextContext } from "language/ITranslation";
import type { IVector3 } from "utilities/math/IVector";
export interface ITileManagerEvents {
    /**
     * Called when a tile event is about to be created
     * @param type The type of tile event
     * @param tile The tile where the tile event will be created
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canCreate(type: TileEventType, tile: Tile): boolean | undefined;
    /**
     * Called when a tile event is created.
     */
    create(event: TileEvent): any;
    /**
     * Called when a tile event is removed.
     */
    remove(event: TileEvent): any;
}
export default class TileEventManager extends ObjectManager<TileEvent, ITileManagerEvents> {
    load(): void;
    create(type: TileEventType, tile: Tile): TileEvent | undefined;
    createFake(type: TileEventType, tile: Tile, id?: number): TileEvent | undefined;
    remove(tileEvent: TileEvent): void;
    getFromTile(tile: Tile, type: TileEventType): TileEvent | undefined;
    /**
     * Gets an array of tile events that have the water property at a given tile.
     * @param tile Tile that you want to look at.
     * @returns Array of tile events with water properties or undefined
     */
    getPuddles(tile: Tile): TileEvent[] | undefined;
    canGather(tile: Tile): TileEvent | undefined;
    updateAll(): void;
    /**
     * Overflow fire around the tile
     */
    fireOverflow(tile: Tile): boolean;
    canPickUp(tile: Tile): TileEvent | undefined;
    blocksTile(tile: Tile): boolean;
    /**
     * Creates either blood or water blood
     * @param origin The origin around where you want to spawn around (can be any adjacent tile)
     * @returns True if the blood was created, false if not
     */
    createBlood(origin: IVector3): boolean;
    containsDamagingTileEvents(events: TileEvent[] | undefined): boolean;
    getName(typeOrEvent: CreatureType | TileEvent, article?: false | "definite" | "indefinite", count?: number, showCount?: boolean): import("../../language/impl/TranslationImpl").default;
    getEventTranslations(events: TileEvent[], article?: false | "definite" | "indefinite", context?: TextContext): Stream<import("../../language/impl/TranslationImpl").default>;
    getEventListTranslation(events: TileEvent[], article?: false | "definite" | "indefinite", context?: TextContext): import("../../language/impl/TranslationImpl").default;
}
