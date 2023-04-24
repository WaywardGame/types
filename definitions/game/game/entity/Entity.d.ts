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
import type { SfxType } from "audio/IAudio";
import EventEmitter from "event/EventEmitter";
import type { TileUpdateType } from "game/IGame";
import { FireType } from "game/IGame";
import type Doodad from "game/doodad/Doodad";
import type EntityMovable from "game/entity/EntityMovable";
import type EntityWithStats from "game/entity/EntityWithStats";
import type Human from "game/entity/Human";
import type { IEntityConstructorOptions, IEntityEvents } from "game/entity/IEntity";
import { EntityType } from "game/entity/IEntity";
import type { IHumanBound } from "game/entity/IEntityManager";
import type Creature from "game/entity/creature/Creature";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type { IInspector } from "game/inspection/IInfoProvider";
import type { IslandId } from "game/island/IIsland";
import type Item from "game/item/Item";
import type { IReferenceable, Reference } from "game/reference/IReferenceManager";
import type { ITemperatureSource } from "game/temperature/ITemperature";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import type { RenderSource, UpdateRenderFlag } from "renderer/IRenderer";
import type { INotificationLocation, ItemNotifierType, StatNotificationType } from "renderer/notifier/INotifier";
import type { IVector3 } from "utilities/math/IVector";
import type { IVector4 } from "utilities/math/Vector4";
export default abstract class Entity<DescriptionType = unknown, TypeType extends number = number, TagType = unknown, CounterType = unknown> extends EventEmitter.Host<IEntityEvents> implements IReferenceable, IInspector, ITemperatureSource, INotificationLocation, IVector4 {
    abstract readonly entityType: EntityType;
    abstract readonly tileUpdateType: TileUpdateType;
    id: number;
    type: TypeType;
    referenceId?: number;
    private _humansVisible;
    renamed?: string | ISerializedTranslation;
    x: number;
    y: number;
    z: number;
    private _tags?;
    islandId: IslandId;
    preventRendering?: boolean;
    private _inFov;
    /**
     * Cached tile the entity is on.
     * This should be cleared when x,y,z is changing.
     */
    private _tile;
    /**
     * Cached tiles around the entity (does not include current / corner tiles)
     * This should be cleared when x,y,z is changing.
     */
    private _tilesAround;
    protected _description?: DescriptionType;
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    get island(): import("../island/Island").default;
    get reference(): Reference | undefined;
    /**
     * Get the entities description
     */
    get description(): DescriptionType | undefined;
    /**
     * Adds a referenceId to the entity if it doesn't already have one
     */
    addReferenceId(): void;
    abstract getName(): Translation;
    /**
     * Called when filling out the entities description for the first time
     */
    protected abstract getDescription(): DescriptionType | undefined;
    toString(): string;
    getInspectionId(): string;
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
    protected setCachedTile(tile: Tile): void;
    clearTileCache(): void;
    isNearby(entity: Entity<DescriptionType>): boolean;
    isInFov(): boolean;
    setInFov(inFov: boolean, humansWithinBound: IHumanBound[]): void;
    humansVisible(): Human[];
    isOnFire(): FireType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    updateRender(source: RenderSource, flag: UpdateRenderFlag): void;
    updateView(source: RenderSource, updateFov?: boolean | UpdateRenderFlag.FieldOfView | UpdateRenderFlag.FieldOfViewSkipTransition): void;
    notifyItem(itemNotifierType: ItemNotifierType, item: Item): void;
    notifyStat(type: StatNotificationType, value: number): void;
    getProducedTemperature(): number | undefined;
    setName(renamed: string | ISerializedTranslation | undefined): void;
    canInspect(human: Human): boolean;
    hasTag(tag: TagType): boolean;
    addTag(tag: TagType): void;
    removeTag(tag: TagType): void;
    abstract isValid(): boolean;
    get asEntity(): Entity<DescriptionType, TypeType, TagType>;
    get asEntityMovable(): EntityMovable<DescriptionType, TypeType, TagType> | undefined;
    get asEntityWithStats(): EntityWithStats<DescriptionType, TypeType, TagType> | undefined;
    abstract get asCorpse(): Corpse | undefined;
    abstract get asCreature(): Creature | undefined;
    abstract get asDoodad(): Doodad | undefined;
    abstract get asHuman(): Human | undefined;
    abstract get asLocalPlayer(): Player | undefined;
    abstract get asNPC(): NPC | undefined;
    abstract get asPlayer(): Player | undefined;
    abstract get asTileEvent(): TileEvent | undefined;
    abstract get asItem(): Item | undefined;
}
