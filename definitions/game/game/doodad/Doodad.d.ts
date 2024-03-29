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
import type { DisplayableDoodadType, DoodadTag, DoodadTypeExtra, DoorOrientation, IDoodadDescription, IDoodadOptions, IHasBuilder, IHasWater } from "game/doodad/IDoodad";
import { DoodadType, DoodadTypeGroup, GrowingStage } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type { IEntityConstructorOptions, IEntityEvents } from "game/entity/IEntity";
import { EntityType } from "game/entity/IEntity";
import type { SkillType } from "game/entity/IHuman";
import { EquipType } from "game/entity/IHuman";
import type Player from "game/entity/player/Player";
import { TileUpdateType } from "game/IGame";
import type { IObject } from "game/IObject";
import { Quality } from "game/IObject";
import type { IWell } from "game/island/IIsland";
import { LiquidType } from "game/island/IIsland";
import type { DisplayableItemType, IContainer, ILiquidGather } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { IHasMagic } from "game/magic/MagicalPropertyManager";
import MagicalPropertyManager from "game/magic/MagicalPropertyManager";
import type { IHasInsulation, TempType } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import type Tile from "game/tile/Tile";
import { Article } from "language/Translation";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { IRGB } from "utilities/Color";
import type { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
export interface IDoodadEvents extends IEntityEvents {
    /**
     * Called when an doodad is being updated
     * @param tile The tile the doodad is on
     * @param tileContainer The tile container the doodad is on
     * @returns True to prevent the doodad from running its update logic, or undefined to use the default logic
     */
    /**
     * Called when an doodad is being picked up
     * @param human The human object
     * @returns False if the doodad cannot be picked up, or undefined to use the default logic
     */
    canPickUp(human: Human): boolean | undefined;
    /**
     * Emitted when the fire stage of this doodad changes.
     * Note: The fire stage of doodads is not saved, so when the doodad's fire stage is first checked on load, this event will be
     * emitted.
     */
    fireUpdate(tile: Tile, stage: FireStage | undefined): any;
    /**
     * Emitted when the doodad is created.
     */
    create(creator?: Human): any;
    /**
     * Emitted when the doodad is removed.
     */
    remove(): any;
    /**
     * Emitted when the doodad's type changes.
     */
    transformed(newType: DoodadType, oldType: DoodadType): any;
    durabilityChange(durability: number, oldDurability: number): any;
    durabilityMaxChange(durability: number, oldDurability: number): any;
}
export default class Doodad extends Entity<IDoodadDescription, DoodadType, DoodadTag> implements IUnserializedCallback, IObject<DoodadType>, IDoodadOptions, Partial<IContainer>, IHasInsulation, IHasBuilder, IHasMagic {
    static is(value: any): value is Doodad;
    get constructorFunction(): typeof Doodad;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    protected static registrarId: number;
    get entityType(): EntityType.Doodad;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, IDoodadEvents>;
    maxDur: number;
    minDur: number;
    private fireStage?;
    aberrant?: boolean;
    bonusAttack?: number;
    builderIdentifier?: string;
    containedItems?: Item[];
    crafterIdentifier?: string;
    decay?: number;
    disassembly?: Item[];
    gatherReady?: number;
    growth?: GrowingStage;
    hasWater?: IHasWater;
    hitchedCreature?: number;
    itemOrders?: number[];
    magic?: MagicalPropertyManager;
    meltDecay?: number;
    orientation?: DoorOrientation | Direction.Cardinal;
    quality?: Quality;
    spread?: number;
    startingDecay?: number;
    step?: number;
    stillContainer?: Item;
    tradedFrom?: string[];
    weight?: number;
    private _tileId?;
    /**
     * Separate property just for wells because isInGroup is still expensive for processWell()
     */
    private _isWell?;
    private readonly _doodadGroupCache;
    constructor(entityOptions?: IEntityConstructorOptions<DoodadType>, options?: IDoodadOptions);
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): Doodad | undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get asContainer(): this & IContainer | undefined;
    toString(): string;
    getRegistrarId(): number;
    /**
     * @param article Whether to include an article for the name of the doodad. Uses the article rules on the language.`.
     * @param count The number of this doodad that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `doodad.getName()` // "a stone furnace"
     * - `doodad.getName(Article.None)` // "stone furnace"
     * - `doodad.getName(Article.None, 3)` // "stone furnaces"
     */
    getName(article?: Article, count?: number): import("../../language/impl/TranslationImpl").default;
    protected getDescription(): IDoodadDescription | undefined;
    updateTile(tileUpdateType: TileUpdateType): void;
    changeType(doodadType: DoodadType): void;
    isValid(): boolean;
    isInGroup(doodadTypeGroup: DoodadTypeGroup): boolean;
    updateGroupCache(doodadTypeGroup: DoodadTypeGroup): boolean;
    get point(): IVector3;
    get tile(): Tile;
    getTileId(): number;
    canGrow(): boolean;
    setGrowingStage(stage: GrowingStage): void;
    /**
     * Checks if the doodad will be rendered as tall (2 tiles)
     * @returns True if the doodad is tall
     */
    isTall(): boolean;
    canPickUp(human: Human): boolean;
    getPickUpTypes(): ItemType[] | undefined;
    getAssociatedItem(): ItemType | import("game/item/IItem").ItemTypeExtra;
    getActions(): ActionType[] | undefined;
    /**
     * Can the doodad be gathered from in its current form?
     */
    canGather(): boolean;
    /**
     * Can the doodad be gathered from at all?
     */
    isGatherable(): boolean;
    isEmbers(): boolean;
    getVehicle(): import("game/item/IItem").IItemVehicle | undefined;
    isVehicle(): boolean;
    canHarvest(): boolean;
    /**
     * Returns whether the doodad can be trampled
     */
    canTrample(): boolean | undefined;
    /**
     * Trampling growing things.
     */
    checkForTrampling(source: Human | Creature): boolean;
    isDangerous(human: Human): boolean;
    getDamage(human: Human, equipType?: EquipType): number;
    /**
     * Gets the crafter of this doodad, or `undefined` if the doodad is crafterless.
     */
    getCrafter(): Player | undefined;
    /**
     * Gets the crafter of this doodad. If this doodad has no crafter, and this is not a multiplayer server, returns the local player.
     */
    getCrafterOrLocalPlayer(): Player | undefined;
    /**
     * Gets the builder of this doodad, or `undefined` if the doodad is builderless.
     */
    getBuilder(): Player | undefined;
    unhitch(): void;
    damage(forceBreak?: boolean, skipDropAsItem?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(random?: import("../../utilities/random/Random").Random<import("../../utilities/random/generators/LegacySeededGenerator").LegacySeededGenerator | import("../../utilities/random/generators/PCGSeededGenerator").PCGSeededGenerator>): number;
    /**
     * Gets the container to use for doodad executed actions
     */
    getTargetContainer(): IContainer | undefined;
    addTreasureChestLoot(): void;
    attachStillContainer(item: Item): void;
    detachStillContainer(human: Human): Item | undefined;
    blocksMove(): boolean;
    update(ticks: number, playingHumans: Human[], playerHumanTiles: Set<Tile>, updatesPerTick?: number): void;
    canCauseStatus(): boolean;
    /**
     * Potentially animates a skeleton (if it can spawn) and returns a message to all those who can see it.
     */
    animateSkeletalRemains(): void;
    setOffTrap(human?: Human, withMessage?: boolean, damage?: boolean): void;
    getGrowthParticles(): IRGB | undefined;
    /**
     * Increased the fertility (spread) of a plant/growing doodad.
     * @param bypassChange Set to true if you just want to check if fertility can be increased.
     * @returns True or false depending on if it increased in fertility or not.
     */
    increaseFertility(bypassChange?: boolean): boolean;
    /**
     * Return extra trap damage based on player multiplier and magical status
     */
    getTrapDamageBonus(baseDamage: number, human?: Human): number;
    /**
     * Keep our wells up-to-date with what is happening underground
     */
    setWellStatus(well?: IWell): IWell;
    /**
     * Switch unlimited/limited water status based on underground water changes
     */
    switchWellStatus(): void;
    /**
     * Returns the type of liquid that can be gathered from this doodad
     */
    getLiquidGatherType(): keyof ILiquidGather | undefined;
    getProducedTemperature(): number | undefined;
    getInsulation(type: TempType): number | undefined;
    isIslandPort(): boolean;
    /**
     * Refills solar stills when they are on shallow water automatically.
     */
    refillSolarStill(): void;
    /**
     * Gets the doodad's quality and action level (how good it is at doing the action) based on the item it is based off of (using repairItem property).
     * @param action The ActionType you are trying to get the level for.
     * @returns A number (possibly 0 if no quality or action level).
     */
    getItemUseBonus(action: ActionType): number;
    /**
     * Increases or decreases plant fertility, growth and durability (health) based on the liquid applied.
     * @param liquid The LiquidType that is to be applied.
     * @param growthBonus The bonus that is applied (on top of a default of 10) to the plants decay (so it grows faster).
     */
    healOrHarmPlant(liquid: LiquidType, growthBonus?: number): void;
    isLitAndCanRevert(): boolean;
    /**
     * Reverts lit doodads if they provide fire and have a revert doodad type set.
     */
    revert(): boolean;
    onUnserialized(): void;
    get durability(): number;
    set durability(value: number);
    get durabilityMax(): number;
    set durabilityMax(value: number);
    canInspect(human: Human): boolean;
    private processSpecials;
    /**
     * Check for items on top of lit/fire doodads, set them on fire
     */
    private processFire;
    /**
     * Fill wells back up randomly (simulating rain)
     */
    private processWell;
    /**
     * Spread the doodad around the world
     */
    private processSpread;
    /**
     * Regenerate (heal durability) over time
     */
    private processRegeneration;
    /**
     * Melt doodads (or things on doodads over time)
     * @param description Doodad description
     * @param updatesPerTick Amount of melting to perform
     */
    private processMelting;
    /**
     * Gets the decay rate of a doodad based on the temperature (returns as a default of 0).
     * @param terrainType The doodad description to check.
     * @returns The number of melt reduction of the doodad given the temperature of the point.
     */
    getMeltRate(description: IDoodadDescription): number;
    /**
     * Initialized the doodad's melting decay number
     */
    setMeltingDecay(): void;
    /**
     * Gives civilization score based on how much is defined for this doodad.
     */
    changeCivilizationScore(add: boolean): void;
    /**
     * Updates a bookcase's graphics and civilization score (based on if books are added).
     * @param item The item that is being added to the bookcase.
     * @param add True if adding score, false if you are substracting.
     */
    updateBookcase(items: Item[], add: boolean): void;
    /**
     * Determines which graphic to show based on how full the bookcase is with books/text.
     * @param item set to true if DisplayableItemType is to be returned.
     * @returns DoodadTypeExtra or DisplayableItemType equal to which graphic it should show.
     */
    getBookcaseFullness(item?: boolean): DoodadTypeExtra | DisplayableItemType | undefined;
    /**
     * Gets if the doodad is set to display any extra graphics/assets.
     * @returns DisplayableDoodadType or DoodadType (if no extra is set)
     */
    getDisplayDoodad(): DisplayableDoodadType;
    /**
     * Gets civilization score based on doodad's quality and type, but without the magical property values.
     * @returns number of score (or 0 if no civilization score is set).
     */
    getCivilizationScore(excludeMagic?: boolean): number;
    /**
     * Gets a set of skill types and values from doodads that have "containedItemGroupProvidesSkill" set for items that provide adjacent skill bonuses.
     * @returns Map of skill type and number (skill value).
     */
    getcontainedItemSkillBonuses(): Map<SkillType, number>;
    /**
     * Gets a set of skill types and values for magical adjacent skill bonuses from doodads.
     * @returns Map of skill type and number (skill value).
     */
    getMagicalDoodadSkills(): Map<SkillType, number>;
    /**
     * Forces a boat to be drydocked (revert from doodad to an item if water was taken away for some reason).
     */
    dryDockBoat(human: Human): void;
    /**
     * Decay over time
     */
    private processDecay;
    private postProcessDecay;
    private randomAshSpawn;
}
