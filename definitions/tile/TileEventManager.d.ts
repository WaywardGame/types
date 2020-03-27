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
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import Translation from "language/Translation";
import { ITile } from "tile/ITerrain";
import { ITileEvent, TileEventType } from "tile/ITileEvent";
import { IVector3 } from "utilities/math/IVector";
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
}
export default class TileEventManager extends EventEmitter.Host<ITileManagerEvents> {
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    createFake(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEvent: ITileEvent): void;
    moveTo(tileEvent: ITileEvent, x: number, y: number, z: number): void;
    get(tile: ITile, type: TileEventType): ITileEvent | undefined;
    canGather(tile: ITile): ITileEvent | undefined;
    updateAll(): void;
    fireOverflow(x: number, y: number, z: number): boolean;
    getMovementProgress(tileEvent: ITileEvent): number;
    inspect(inspection: Inspection, ...events: ITileEvent[]): InspectionResult;
    is(thing: any): thing is ITileEvent;
    canPickup(tile: ITile): ITileEvent | undefined;
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
    moveExcrement(position: IVector3): void;
    containsDamagingTileEvents(events: ITileEvent[] | undefined): boolean;
    getName(tileEvent: ITileEvent): Translation;
    private _addToTile;
    private _removeFromTile;
}
