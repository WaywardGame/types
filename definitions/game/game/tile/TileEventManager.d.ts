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
import EntityManager from "@wayward/game/game/entity/EntityManager";
import type Human from "@wayward/game/game/entity/Human";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type Tile from "@wayward/game/game/tile/Tile";
import TileEvent from "@wayward/game/game/tile/TileEvent";
import type { TextContext } from "@wayward/game/language/ITranslation";
import { Article } from "@wayward/game/language/ITranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import Stream from "@wayward/goodstream/Stream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface ITileManagerEvents extends Events<EntityManager<TileEvent>> {
    /**
     * Called when a tile event is about to be created
     * @param type The type of tile event
     * @param tile The tile where the tile event will be created
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canCreate(type: TileEventType, tile: Tile): boolean | undefined;
}
export default class TileEventManager extends EntityManager<TileEvent> {
    readonly static: typeof TileEventManager;
    protected readonly name = "TileEventManager";
    event: IEventEmitter<this, ITileManagerEvents>;
    loadEntity(tileEvent: TileEvent): void;
    create(type: TileEventType, tile: Tile): TileEvent | undefined;
    createFake(type: TileEventType, tile: Tile, id?: number): TileEvent | undefined;
    protected onRemove(tileEvent: TileEvent): boolean;
    getFromTile(tile: Tile, type: TileEventType): TileEvent | undefined;
    /**
     * Gets an array of tile events that have the water property at a given tile.
     * @param tile Tile that you want to look at.
     * @returns Array of tile events with water properties or undefined
     */
    getLiquids(tile: Tile): TileEvent[] | undefined;
    canGather(tile: Tile): TileEvent | undefined;
    updateAll(ticks: number): void;
    /**
     * Overflow fire around the tile
     */
    fireOverflow(tile: Tile, human?: Human): boolean;
    canPickUp(tile: Tile): TileEvent | undefined;
    /**
     * Creates either blood or water blood
     * @param origin The origin around where you want to spawn around (can be any adjacent tile)
     * @returns True if the blood was created, false if not
     */
    createBlood(origin: IVector3): boolean;
    containsDamagingTileEvents(events: TileEvent[] | undefined): boolean;
    /**
     * Removes all tile events from the tile
     * @param tile The tile to remove all tile events from
     */
    removeAll(tile: Tile): void;
    getName(typeOrEvent: CreatureType | TileEvent, article?: Article, count?: number, showCount?: boolean): TranslationImpl;
    getEventTranslations(events: TileEvent[], article?: Article, context?: TextContext): Stream<TranslationImpl>;
    getEventListTranslation(events: TileEvent[], article?: Article, context?: TextContext): TranslationImpl;
}
