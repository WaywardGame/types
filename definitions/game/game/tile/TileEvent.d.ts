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
import { TileUpdateType } from "@wayward/game/game/IGame";
import type { IObject } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { IEntityMovableEvents } from "@wayward/game/game/entity/EntityMovable";
import EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type { IEntityConstructorOptions } from "@wayward/game/game/entity/IEntity";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IUncastableContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type { ITileEventDescription, TileEventTag } from "@wayward/game/game/tile/ITileEvent";
import { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type Tile from "@wayward/game/game/tile/Tile";
import FireStage from "@wayward/game/game/tile/events/fire/FireStage";
import type { Article } from "@wayward/game/language/ITranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface ITileEventEvents extends IEntityMovableEvents {
    /**
     * Emitted when the fire stage of this tile event changes.
     * Note: The fire stage of tile event is not saved, so when the tile event's fire stage is first checked on load, this event will be
     * emitted.
     */
    fireUpdate(tile: Tile, stage: FireStage | undefined): any;
}
export default class TileEvent extends EntityMovable<ITileEventDescription, TileEventType, ReferenceType.TileEvent, TileEventTag> implements IObject<TileEventType> {
    static is(value: any): value is TileEvent;
    get entityType(): EntityType.TileEvent;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, ITileEventEvents>;
    anim: number;
    fromX: number;
    fromY: number;
    decay?: number;
    gfx?: number;
    maxDur?: number;
    minDur?: number;
    spread?: number;
    step?: number;
    builderIdentifier?: string;
    /**
     * For use with the Fire TileEvent to check if it has a fuel source and should create ash by default.
     * Set to 0 to stop all ash production.
     */
    fuel?: number;
    private fireStage?;
    constructor(entityOptions?: IEntityConstructorOptions<TileEventType>);
    get isValid(): boolean;
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): TileEvent | undefined;
    get asItem(): undefined;
    get asTile(): undefined;
    get asContainer(): undefined;
    isCorpse(): this is Corpse;
    isCreature(): this is Creature;
    isDoodad(): this is Doodad;
    isHuman(): this is Human;
    get isLocalPlayer(): boolean;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
    isTileEvent(): this is TileEvent;
    isItem(): this is Item;
    isTile(): this is Tile;
    isContainer(): this is IUncastableContainer;
    get point(): IVector3;
    get tile(): Tile;
    toString(): string;
    protected get typeEnum(): typeof TileEventType;
    protected getDescription(): ITileEventDescription | undefined;
    getName(article?: Article, count?: number): TranslationImpl;
    getProducedTemperature(): number | undefined;
    updateFire(tile: Tile): void;
    protected updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    addToTile(tile: Tile): void;
    removeFromTile(updateTile: boolean): void;
    /**
     * Damages the tile event by 1 durability. If durability reaches 0, the tile event is removed and all items are dropped.
     */
    damage(): void;
    /**
     * Drops all items associated with this tile event (if any).
     */
    dropItems(): void;
    /**
     * Gets the builder/creator of this event, or `undefined` if the tile event is creatorless.
     */
    getBuilder(): Player | undefined;
    /**
     * Gets the skill type associated with the tile event, or choose a random one if the description is an array.
     */
    getSkillUse(): SkillType;
}
