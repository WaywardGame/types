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
import type { IHasQuality, IObject, IQualityEvents } from "@wayward/game/game/IObject";
import { Quality } from "@wayward/game/game/IObject";
import type { DisplayableDoodadType, DoorOrientation, IDoodadDescription, IDoodadGetNameOptions, IDoodadOptions, IHasBuilder, IHasWater } from "@wayward/game/game/doodad/IDoodad";
import { DoodadTypeExtra } from "@wayward/game/game/doodad/IDoodad";
import { DoodadTag, DoodadType, DoodadTypeGroup, GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import type { IEntityMovableEvents } from "@wayward/game/game/entity/EntityMovable";
import EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type { IEntityConstructorOptions } from "@wayward/game/game/entity/IEntity";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IWell } from "@wayward/game/game/island/IIsland";
import { LiquidType } from "@wayward/game/game/island/IIsland";
import type { ContainerSort, DisplayableItemType, IContainer, IItemVehicle, ILiquidGather, IUncastableContainer, ItemTypeExtra } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { IHasMagic } from "@wayward/game/game/magic/IMagicalProperty";
import MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type { IHasInsulation, IInsulationResult, TempType } from "@wayward/game/game/temperature/ITemperature";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import FireStage from "@wayward/game/game/tile/events/fire/FireStage";
import { Article } from "@wayward/game/language/ITranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import type { IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IRGB } from "@wayward/utilities/Color";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IDoodadEvents extends IEntityMovableEvents, IQualityEvents {
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
    revertToItem(item: Item): any;
    becomeFromItem(item: Item): any;
    melted(producedItems: Item[], producedTileEvents: TileEvent[], producedDoodad: Doodad | undefined): any;
    addMagic(magic: MagicalPropertyManager): any;
    removeMagic(magic: MagicalPropertyManager): any;
}
export default class Doodad extends EntityMovable<IDoodadDescription, DoodadType, ReferenceType.Doodad, DoodadTag> implements IUnserializedCallback, IObject<DoodadType>, IDoodadOptions, Partial<IContainer>, IHasInsulation, IHasBuilder, IHasMagic, IHasQuality {
    static is(value: any): value is Doodad;
    get constructorFunction(): typeof Doodad;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    protected static registrarId: number;
    get entityType(): EntityType.Doodad;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, IDoodadEvents>;
    maxDur: number;
    minDur: number;
    private fireStage?;
    aberrant?: boolean;
    addOrder?: number[];
    bonusAttack?: number;
    builderIdentifier?: string;
    connectedEntityReference?: Reference<ReferenceType.Player | ReferenceType.NPC>;
    containedItems?: Item[];
    crafterIdentifier?: string;
    decay?: number;
    disassembly?: Item[];
    equipped?: Map<EquipType, Item>;
    gatherReady?: number;
    growth?: GrowingStage;
    hasWater?: IHasWater;
    hitchedCreature?: number;
    magic?: MagicalPropertyManager;
    meltDecay?: number;
    orientation?: DoorOrientation;
    quality?: Quality;
    sort?: ContainerSort;
    sortDirection?: SortDirection;
    spread?: number;
    stacks?: Set<ItemType>;
    startingDecay?: number;
    step?: number;
    stillContainer?: Item;
    tradedFrom?: string[];
    weight?: number;
    /**
     * Used to store protection status for built doodads
     */
    protected?: boolean;
    /**
     * Separate property just for wells because isInGroup is still expensive for processWell()
     */
    private _isWell?;
    private readonly _doodadGroupCache;
    constructor(entityOptions?: IEntityConstructorOptions<DoodadType>, options?: IDoodadOptions);
    protected get typeEnum(): typeof DoodadType;
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): Doodad | undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get asTile(): undefined;
    get asContainer(): this & IContainer | undefined;
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
    toString(): string;
    getRegistrarId(): number;
    /**
     * Entity controlling this doodad (for wheel barrows)
     */
    get connectedEntity(): Human | undefined;
    /**
     * @param article Whether to include an article for the name of the doodad. Uses the article rules on the language.`.
     * @param count The number of this doodad that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `doodad.getName()` // "a stone furnace"
     * - `doodad.getName(Article.None)` // "stone furnace"
     * - `doodad.getName(Article.None, 3)` // "stone furnaces"
     */
    getName(article?: Article, options?: Partial<IDoodadGetNameOptions>): TranslationImpl;
    protected getDescription(): IDoodadDescription | undefined;
    protected updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    changeType(doodadType: DoodadType): void;
    get isValid(): boolean;
    isInGroup(doodadTypeGroup: DoodadType | DoodadTypeGroup): boolean;
    updateGroupCache(doodadTypeGroup: DoodadType | DoodadTypeGroup): boolean;
    get point(): IVector3;
    get tile(): Tile;
    /**
     * @deprecated This is the correct way to change quality, but it is not completely implemented.
     * It does not perform any required changes due to the quality change, like durability, all it does is change the quality and emit an event.
     */
    setQuality(quality: Quality): void;
    canGrow(): boolean;
    setGrowingStage(stage: GrowingStage): void;
    /**
     * Checks if the doodad will be rendered as tall (2 tiles)
     * @returns True if the doodad is tall
     */
    isTall(): boolean;
    canPickUp(human: Human): boolean;
    getPickUpTypes(): ItemType[] | undefined;
    getAssociatedItem(): ItemType | ItemTypeExtra;
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
    getVehicle(): IItemVehicle | undefined;
    get isVehicle(): boolean;
    canHarvest(): boolean;
    /**
     * Returns whether the doodad can be trampled
     */
    canTrample(): boolean;
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
    removeMagic(): void;
    unhitch(): void;
    damage(forceBreak?: boolean, skipDropAsItem?: boolean, skipSound?: boolean, skipResources?: boolean, damage?: number): void;
    getDefaultDurability(random?: import("@wayward/utilities/random/Random").Random<import("@wayward/utilities/random/generators/PCGSeededGenerator").PCGSeededGenerator | import("@wayward/utilities/random/generators/LegacySeededGenerator").LegacySeededGenerator>): number;
    /**
     * Gets the container to use for doodad executed actions
     */
    getTargetContainer(): IContainer | undefined;
    addTreasureChestLoot(): void;
    attachStillContainer(item: Item): void;
    detachStillContainer(human: Human): Item | undefined;
    displayItem(item: Item, equipType: EquipType): void;
    undisplayItem(human: Human, equipType: EquipType): Item | undefined;
    undisplayAllItems(human: Human | undefined, equip?: boolean): Item[];
    get blocksMove(): boolean;
    update(ticks: number, playingHumans: Human[], playerHumanTiles: Set<Tile>): void;
    canCauseStatus(): boolean;
    /**
     * Potentially animates a skeleton (if it can spawn) and returns a message to all those who can see it.
     */
    animateSkeletalRemains(): void;
    setOffTrap(human?: Human, withMessage?: boolean, damage?: boolean): void;
    getGrowthParticles(): IRGB | undefined;
    /**
     * Increased the fertility (spread) of a plant/growing doodad when its ripening.
     * @param bypassChange Set to true if you just want to check if fertility can be increased.
     * @returns True or false depending on if it increased in fertility or not.
     */
    increaseFertility(bypassChange?: boolean, sendMessage?: boolean, bypassRipeningCheck?: boolean): boolean;
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
    getInsulation(type: TempType): IInsulationResult | undefined;
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
    initializeMagicalPropertyManager(): MagicalPropertyManager;
    isLitAndCanRevert(): boolean;
    /**
     * Reverts lit doodads if they provide light and have a revert doodad type set.
     */
    revert(): boolean;
    onUnserialized(): void;
    get durability(): number;
    set durability(value: number);
    get durabilityMaxWithMagical(): number;
    get durabilityMax(): number;
    set durabilityMax(value: number);
    canInspect(human: Human): boolean;
    private processSpecials;
    /**
     * Check for items on top of lit/fire doodads (that are OpenFireSource), and automatically "stoke" the items
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
     * Process the magical properties of the doodad when updating
     * @param ticks the number of ticks to process
     */
    private processMagicalProperties;
    /**
     * Melt doodads (or things on doodads over time)
     * @param description Doodad description
     * @param ticks Amount of melting to perform
     */
    private processMelting;
    /**
     * Processes any damaging effects to doodads.
     * @param ticks The number of ticks processDamage to process.
     */
    private processDamage;
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
     * Gets the skill type associated with the doodad, or choose a random one if the description is an array.
     */
    getSkillUse(): SkillType;
    /**
     * Checks if a solar still can work in the current temperature.
     * @returns True if the solar still can work in the current temperature, false if not.
     */
    willStillWorkInTemperature(): boolean;
    forceDecayTick(): void;
    /**
     * Stokes fire from the StokeFire action and other events like directly dropping items into open fire sources.
     * @param stokeValue The amount to stoke the fire by.
     * @param human The human that is stoking the fire.
     * @returns True if fire overflowed, false if not.
     */
    stokeFire(stokeValue: number, human?: Human): boolean;
    getDecayAtStartWithMagical(): number;
    /**
     * Decay over time
     */
    private processDecay;
    /**
     * Called for solar stills
     */
    private processSolarStill;
    /**
     * Called for dripstones
     */
    private processDripstone;
    private postProcessDecay;
    private randomAshSpawn;
}
