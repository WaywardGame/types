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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type { TileUpdateType } from "@wayward/game/game/IGame";
import { FireType } from "@wayward/game/game/IGame";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type Human from "@wayward/game/game/entity/Human";
import type { EntityTag, ICastable, IEntityConstructorOptions, IEntityEvents } from "@wayward/game/game/entity/IEntity";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import type { IHumanBound } from "@wayward/game/game/entity/IEntityManager";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IUncastableContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import { type EntityReferenceTypes, type IReferenceable, type Reference } from "@wayward/game/game/reference/IReferenceManager";
import type { ITemperatureSource } from "@wayward/game/game/temperature/ITemperature";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import { type ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type { RenderSource, UpdateRenderFlag } from "@wayward/game/renderer/IRenderer";
import type { Renderer } from "@wayward/game/renderer/Renderer";
import type { INotificationLocation, ItemNotifierType, MarkerDescription, StatNotificationType } from "@wayward/game/renderer/notifier/INotifier";
import type { MarkerType } from "@wayward/game/renderer/notifier/INotifier";
import Debug from "@wayward/game/utilities/dev/Debug";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type WorldZ from "@wayward/utilities/game/WorldZ";
export default abstract class Entity<DescriptionType = unknown, TypeType extends number = number, EntityReferenceType extends EntityReferenceTypes = EntityReferenceTypes, TagType = unknown> extends EventEmitter.Host<IEntityEvents> implements IReferenceable, ITemperatureSource, INotificationLocation, IVector4, ICastable {
    abstract readonly entityType: EntityType;
    abstract readonly tileUpdateType: TileUpdateType;
    id: number;
    type: TypeType;
    historicalActions?: PartialRecord<ActionType, number>;
    referenceId?: number;
    renamed?: string | ISerializedTranslation;
    aestheticRandom: number;
    x: number;
    y: number;
    z: WorldZ;
    private _data?;
    private _persistentMarker?;
    private _persistentMarkerHidden?;
    /** Tags from a set specific to the entity type */
    private _tags?;
    /** Tags from a global set */
    private _entityTags?;
    islandId: IslandId;
    preventRendering?: boolean;
    private _humansWithinBound?;
    /**
     * Cached tile the entity is on.
     * This should be cleared when x,y,z is changing.
     */
    private _tile;
    protected _description?: DescriptionType;
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    get island(): Island;
    get reference(): Reference<EntityReferenceType> | undefined;
    /**
     * Get the entities description
     */
    get description(): Readonly<DescriptionType> | undefined;
    protected abstract get typeEnum(): PartialRecord<string | TypeType, TypeType | string>;
    /**
     * Adds a referenceId to the entity if it doesn't already have one
     */
    addReferenceId(): void;
    abstract getName(): Translation;
    get debug(): Debug.JIT<[]>;
    /**
     * Called when filling out the entities description for the first time
     */
    protected abstract getDescription(): DescriptionType | undefined;
    toString(): string;
    /**
     * Location of the entity on the world.
     * Parent classes will probably mark this as always defined
     */
    get point(): IVector3 | undefined;
    /**
     * Tile the entity is on in the world.
     * Parent classes will probably mark this as always defined
     */
    get tile(): Tile | undefined;
    get tilesAround(): Tile[] | undefined;
    protected setCachedTile(tile: Tile | undefined): void;
    clearTileCache(): Tile | undefined;
    isNearby(entity: Entity | Tile, includeCurrentTile?: boolean): boolean;
    /**
     * Updates the world renderer & flow field state for the tile
     */
    updateWorldTile(tileUpdateType?: TileUpdateType, updateNeighbors?: boolean, skipFlowFieldUpdate?: boolean): void;
    /**
     * Checks if the entity is within the viewport bounds of one or more humans
     */
    get isWithinHumanBounds(): boolean;
    setHumansWithinBound(humansWithinBound: IHumanBound[]): void;
    /**
     * Returns humans within this entities fov & that they can see
     */
    getHumansVisible(isClientside: boolean): Human[];
    get isOnFire(): FireType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    updateRender(source: RenderSource, flag: UpdateRenderFlag): void;
    updateView(source: RenderSource, updateFov?: boolean | UpdateRenderFlag.FieldOfView | UpdateRenderFlag.FieldOfViewSkipTransition): void;
    notifyItem(itemNotifierType: ItemNotifierType, item: Item): void;
    notifyStat(type: StatNotificationType, value: number): void;
    /**
     * This is called clientside the first time the renderer seens the entity
     */
    onFirstRender(renderer: Renderer): void;
    getCurrentMarker(): Readonly<MarkerDescription> | undefined;
    setMarkerIconHidden(hidden: boolean): void;
    /**
     * Adds a marker that shows up over the entity
     * @param description The marker description
     */
    addMarker(description: MappedOmit<MarkerDescription, "guid">): void;
    removeMarker(...types: MarkerType[]): void;
    getDynamicMarker(type: string): MarkerType | undefined;
    getProducedTemperature(): number | undefined;
    setName(renamed: string | ISerializedTranslation | undefined): void;
    canInspect(human: Human): boolean;
    hasTag(tag: TagType): boolean;
    addTag(tag: TagType): void;
    removeTag(tag: TagType): void;
    hasEntityTag(tag: EntityTag): boolean;
    addEntityTag(tag: EntityTag): void;
    removeEntityTag(tag: EntityTag): void;
    /**
     * Check if a data was set
     * @param key Data key
     * @returns True if the data exists, false if it doesn't
     */
    hasData(key: string): boolean;
    /**
     * Sets a data
     * @param key Data key
     * @param value Data value
     * @rturns The value
     */
    setData<T>(key: string, value: T): T;
    /**
     * Gets a data
     * @param key Data key
     * @returns Data value or undefined if it wasn't found
     */
    getData<T>(key: string): T | undefined;
    /**
     * Removes a data
     * @param key Data key
     * @returns True when the data is removed. False if the key wasn't set
     */
    removeData(key: string): boolean;
    abstract get isValid(): boolean;
    get asGenericEntity(): Entity;
    get asEntity(): Entity<DescriptionType, TypeType, EntityReferenceType, TagType>;
    get asEntityMovable(): EntityMovable<DescriptionType, TypeType, EntityReferenceType, TagType> | undefined;
    get asEntityWithStats(): EntityWithStats<DescriptionType, TypeType, EntityReferenceType, TagType> | undefined;
    abstract get asCorpse(): Corpse | undefined;
    abstract get asCreature(): Creature | undefined;
    abstract get asDoodad(): Doodad | undefined;
    abstract get asHuman(): Human | undefined;
    abstract get asLocalPlayer(): Player | undefined;
    get asNotLocalPlayer(): this | undefined;
    abstract get asNPC(): NPC | undefined;
    abstract get asPlayer(): Player | undefined;
    abstract get asTileEvent(): TileEvent | undefined;
    abstract get asItem(): Item | undefined;
    abstract get asTile(): Tile | undefined;
    abstract get asContainer(): (this & IUncastableContainer) | undefined;
    abstract isCorpse(): this is Corpse;
    abstract isCreature(): this is Creature;
    abstract isDoodad(): this is Doodad;
    abstract isHuman(): this is Human;
    abstract get isLocalPlayer(): boolean;
    abstract isNPC(): this is NPC;
    abstract isPlayer(): this is Player;
    abstract isTileEvent(): this is TileEvent;
    abstract isItem(): this is Item;
    abstract isTile(): this is Tile;
    abstract isContainer(): this is IUncastableContainer;
    asNot(entity: Entity): this | undefined;
    isEntity(): this is Entity;
    asType(type: TypeType): this | undefined;
    get asUnion(): Player | NPC | Creature | TileEvent | Item | Corpse | Doodad;
    /** `undefined` if this entity's island is not loaded, `this` if it is */
    get asLoaded(): this | undefined;
    /** Whether this entity's island is loaded */
    get isLoaded(): boolean;
}
