/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IEventEmitter } from "event/EventEmitter";
import type { IEntityMovableEvents } from "game/entity/EntityMovable";
import EntityMovable from "game/entity/EntityMovable";
import type { IEntityConstructorOptions } from "game/entity/IEntity";
import { EntityType } from "game/entity/IEntity";
import { TileUpdateType } from "game/IGame";
import type { IObject } from "game/IObject";
import { FireStage } from "game/tile/events/IFire";
import type { ITileEventDescription } from "game/tile/ITileEvent";
import { TileEventType } from "game/tile/ITileEvent";
import type Tile from "game/tile/Tile";
import type { Article } from "language/Translation";
import type { IVector3 } from "utilities/math/IVector";
export interface ITileEventEvents extends IEntityMovableEvents {
    /**
     * Emitted when the fire stage of this tile event changes.
     * Note: The fire stage of tile event is not saved, so when the tile event's fire stage is first checked on load, this event will be
     * emitted.
     */
    fireUpdate(tile: Tile, stage: FireStage | undefined): any;
}
export default class TileEvent extends EntityMovable<ITileEventDescription, TileEventType> implements IObject<TileEventType> {
    static is(value: any): value is TileEvent;
    get entityType(): EntityType.TileEvent;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, ITileEventEvents>;
    anim: number;
    fromX: number;
    fromY: number;
    decay?: number;
    gfx?: number;
    maxDur?: number;
    minDur?: number;
    spread?: number;
    step?: number;
    /**
     * For use with the Fire TileEvent to check if it has a fuel source and should create ash by default.
     * Set to 0 to stop all ash production.
     */
    fuel?: number;
    private fireStage?;
    constructor(entityOptions?: IEntityConstructorOptions<TileEventType>);
    isValid(): boolean;
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): TileEvent | undefined;
    get asItem(): undefined;
    get point(): IVector3;
    get tile(): Tile;
    toString(): string;
    protected getDescription(): ITileEventDescription | undefined;
    getName(article?: Article, count?: number): import("../../language/impl/TranslationImpl").default;
    getProducedTemperature(): number | undefined;
    updateFire(tile: Tile): void;
    protected updateTile(fromTile: Tile, toTile: Tile): boolean;
    addToTile(tile: Tile): void;
    removeFromTile(updateTile: boolean): void;
    burn(fire: TileEvent): void;
}
