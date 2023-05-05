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
import type { IEventEmitter } from "event/EventEmitter";
import type Doodad from "game/doodad/Doodad";
import { ActionType } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type { CreatureType } from "game/entity/creature/ICreature";
import type Entity from "game/entity/Entity";
import type { IEntityMovableEvents } from "game/entity/EntityMovable";
import EntityMovable from "game/entity/EntityMovable";
import type Human from "game/entity/Human";
import { AttackType, DamageType, EntityType } from "game/entity/IEntity";
import type { EquipType } from "game/entity/IHuman";
import { SkillType } from "game/entity/IHuman";
import type Player from "game/entity/player/Player";
import { TileUpdateType } from "game/IGame";
import type { IObject, IObjectOptions } from "game/IObject";
import { Quality } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type { ContainerReference, DisplayableItemType, IConstructedInfo, IContainable, IContainer, IItemChangeIntoOptions, IItemDescription, IItemDisassembleResult, IItemUsed, IMagicalPropertyInfo, IMoveToTileOptions, ItemCounter, ItemTag, ItemTypeExtra } from "game/item/IItem";
import { BookType, ItemDamageResult, ItemType, ItemTypeGroup, ItemWeightChange, SYMBOL_CONTAINER_CACHED_REFERENCE } from "game/item/IItem";
import type { IPlaceOnTileOptions } from "game/item/IItemManager";
import ItemMapManager from "game/item/ItemMapManager";
import type { IHasMagic, MagicalSubPropertySubTypes } from "game/magic/MagicalPropertyManager";
import MagicalPropertyManager from "game/magic/MagicalPropertyManager";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import type { IHasInsulation, TempType } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import type Tile from "game/tile/Tile";
import TranslationImpl from "language/impl/TranslationImpl";
import { Article } from "language/Translation";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
export interface IItemEvents extends IEntityMovableEvents {
    toggleProtected(isProtected: boolean): any;
    fireUpdate(stage?: FireStage): any;
    damage(): any;
    transformed(newType: ItemType, oldType: ItemType): any;
    weightUpdate(): any;
    moved(): any;
    remove(): any;
    movedIsland(islandId: IslandId, itemId: number): any;
    /**
     * Called when the human equips an item to a slot
     * @param human The human object
     * @param slot The slot
     */
    equip(human: Human, slot: EquipType): any;
    /**
     * Called when the human unequip an item from a slot
     * @param human The human object
     * @param slot The slot
     */
    unequip(human: Human, slot: EquipType): any;
    /**
     * Called when an item is damaged
     * @param modifier The damage modifier
     * @returns The amount of damage the item shouldd take or undefined to use the default logic
     */
    shouldDamage(modifier?: number): number | false | undefined;
    qualityChange(quality: Quality, oldQuality: Quality): any;
    durabilityChange(durability: number, oldDurability: number): any;
    durabilityMaxChange(durabilityMax: number, oldDurabilityMax: number): any;
}
export default class Item extends EntityMovable<IItemDescription, ItemType, ItemTag, ItemCounter> implements Partial<IContainer>, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, IHasInsulation, IHasMagic {
    get entityType(): EntityType.Item;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, IItemEvents>;
    private maxDur;
    private minDur;
    weight: number;
    bonusAttack?: number;
    bonusDefense?: number;
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems?: Item[];
    containedWithin?: IContainer;
    containsCreature?: Creature;
    crafterIdentifier?: string;
    decay?: number;
    disassembly?: Item[];
    driverId?: number;
    driverType?: EntityType;
    equippedId?: number;
    equippedType?: EntityType;
    fireStage?: FireStage;
    itemOrders?: number[];
    magic?: MagicalPropertyManager;
    map?: ItemMapManager;
    pid?: number | null;
    protected?: boolean;
    quality?: Quality;
    startingDecay?: number;
    tradedFrom?: string[];
    used?: IItemUsed;
    vehicleFacingDirection?: Direction.Cardinal;
    weightCapacity?: number;
    weightFraction?: number;
    offsetX?: number;
    offsetY?: number;
    [SYMBOL_CONTAINER_CACHED_REFERENCE]?: ContainerReference;
    private _movementOptions?;
    constructor(itemType?: ItemType | undefined, islandId?: IslandId, quality?: Quality, human?: Human);
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): Item | undefined;
    toString(): string;
    protected updateTile(fromTile: Tile, toTile: Tile): boolean;
    get durability(): number;
    set durability(value: number);
    get durabilityMax(): number;
    set durabilityMax(value: number);
    getDisplayItem(): DisplayableItemType;
    isContainer(): this is Item & IContainer;
    /**
     * Gets the owner of this item.
     * This will be the human who crafted it.
     * Note: The owner might be different than the human whose inventory the item is currently in
     */
    getOwner(): Player | undefined;
    /**
     * Gets the current human that has the item in their inventory
     */
    getCurrentOwner(): Human | undefined;
    /**
     * Sets the item as magical with a chance based on quality (and clears any existing magical properties)
     * @param bonus The number that chances get multiplied by, for example, 2 or 3
     * @param propertiesBypass The number of magical properties to force on to the item
     * @returns True if the item has become magical
     */
    setMagicalChanceFromQuality(bonus?: number, propertiesBypass?: number): boolean;
    /**
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(): number;
    getWeaponWeight(): number;
    /**
     * @param article Whether to include an article for the name of the item. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this item that you're getting the name of. Defaults to `1`.
     * @param showCount If `true`, adds the passed count to the translation, using `MiscTranslation.CountThing`.
     * @param showQuality If `true`, shows the quality of the item.
     * @param showRenamedQuotes If `true`, show the (by default) "" quotes surrounding renamed items.
     * @param showMagicalType If `true`, show the magical type suffix.
     *
     * Examples:
     * - `item.getName()` // "a stone axe"
     * - `item.getName(false)` // "stone axe"
     * - `item.getName(undefined, 3)` // "stone axes"
     */
    getName(article?: Article, count?: number, showCount?: boolean, showQuality?: boolean, showRenamedQuotes?: boolean, showMagicalType?: boolean): TranslationImpl;
    protected getDescription(): IItemDescription | undefined;
    isTransient(): boolean;
    isValid(): boolean;
    isProtected(): boolean;
    isInGroup(itemGroup: ItemTypeGroup): boolean;
    getDriver(): Human | undefined;
    /**
     * Gets the item's damage modifier which certain special items have so they can have high durability for use, but normal damage ranges.
     */
    getDamageModifier(): number;
    isDamaged(): boolean;
    getDamagedThreshold(): number;
    isDecayed(): boolean;
    getDecayedThreshold(): number;
    getDecayAtStart(): number;
    getVisualDurability(): number;
    getVisualDecay(): number;
    private getVisualBarValue;
    /**
     * Returns the maximum decay of an item, or undefined if the item does not have the decayMax or storeDecay property.
     * @returns A number or undefined.
     */
    canDecay(): 1 | undefined;
    getDecayRate(isClientSide: boolean): number;
    getPreservationDecayMultiplier(): number;
    getTemperatureDecayMultiplier(isClientSide: boolean): number;
    getTotalWeight(bypassContainer?: boolean, targetContainer?: IContainer): number;
    getDisassemblyWeight(): number;
    getDisassemblyItems(): IItemDisassembleResult | undefined;
    isNearby(executor: Entity, allowNearby?: boolean): boolean;
    /**
     * Fixes item issues.
     * Note: Be careful with what gets fixed in multiplayer! (when onlyRestoreIslandIds is set)
     */
    verifyAndFixItem(allowFixes: boolean): void;
    /**
     * @param source A string representing the reason for this damage. Used for multiplayer debugging. Just put a unique string of characters here
     * @param modifier The amount of damage to take. Defaults to 1.
     * @param min The minimum durability that this item should have remaining. Defaults to n/a
     */
    damage(source: string, modifier?: number, min?: number): ItemDamageResult;
    isInTradeContainer(): boolean;
    getEquippedHuman(): Human | undefined;
    isEquipped(includeDisabled?: true): boolean;
    getEquipSlot(includeDisabled?: true): EquipType | undefined;
    changeInto(type: ItemType, options?: Partial<IItemChangeIntoOptions>): void;
    /**
     * Verifies an item has a proper weight combined with its magical item weight (featherweight) property and changes it if not.
     * @returns A type of change via ItemWeightChange for showing a new magical property was added or a new magical weight was added. If no change happened, it will return undefined.
     */
    verifyMagicalItemWeight(): ItemWeightChange | undefined;
    /**
     * Returns and item based on returnOnUseAndDecay.
     * @param disableNotify Set to true if no notification should be shown for the new item above the player.
     * @param craft Set to true when returning consumed items to check for whenCrafted property in returnOnUseAndDecay.
     */
    returns(disableNotify?: boolean, craft?: boolean): boolean;
    setUsed(itemUse?: IItemUsed, human?: Human): void;
    createOnBreak(tile: Tile): void;
    spawnOnDecay(tile: Tile): Creature | undefined;
    spawnCreatureOnItem(tile: Tile, creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingTile?: Human, maxTilesChecked?: number): Creature | undefined;
    get point(): IVector3 | undefined;
    get tile(): Tile | undefined;
    dropInWater(human: Human, tile?: Tile, skipParticles?: boolean): void;
    placeOnTile(tile: Tile, options?: IPlaceOnTileOptions): boolean;
    /**
     * Unsupported
     */
    moveTo(): boolean;
    /**
     * Moves an item to a target point / container while animating it
     * @param options Movement options
     * @returns True if the movement is happening, false if it wasn't able to move
     */
    moveToTile(options: IMoveToTileOptions): boolean;
    getMovementOptions(): IMoveToTileOptions | undefined;
    protected onMovementCompleted(): void;
    setQuality(human: Human | undefined, quality?: Quality): void;
    getValidMagicalProperties(): MagicalPropertyType[];
    addMagicalProperties(count: number, source?: string): boolean;
    rerollMagicalProperty(type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes): boolean;
    rerollMagicalPropertyValues(): void;
    addMagicalProperty(type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes): boolean;
    getMagicalPropertyInfo(type: MagicalPropertyType): IMagicalPropertyInfo | undefined;
    acquireNotify(human: Human): void;
    getStokeFireValue(): number | undefined;
    getStokeFireBonusValue(): number;
    getOnUseBonus(): number;
    getAttackDamage(type: AttackType.MeleeWeapon | AttackType.RangedWeapon): number;
    /**
     * Gets the worth of an item used for merchant trading. Does not consider batering or modifiers bonuses; use Item.getTraderSellPrice for that.
     * @param human The human that is trading the item for its worth (used for durability calculations).
     * @param magicalWorth Include the value of `MagicalPropertyType.Worth`, defaults to true
     */
    getWorth(human: Human | undefined, magicalWorth?: boolean): number;
    /**
     * The full price the item will go for when traded to a merchant NPC. Considers modifiers and a human's bartering skill.
     * @param human The human that is trading the item.
     * @param magicalWorth Include the value of `MagicalPropertyType.Worth`, defaults to true
     */
    getTraderSellPrice(human: Human | undefined, magicalWorth?: boolean): number;
    canBurnPlayer(): boolean;
    getBaseDefense(): number;
    getDurabilityCharge(): number;
    revertFromDoodad(doodad: Doodad): void;
    getWeightCapacity(): number | undefined;
    /**
     * Returns the container weight reduction
     * @param targetContainer Container to calculate the weight reduction for
     * @returns 1 if there is no reducton or [-50% + magical storing values]
     */
    getContainerWeightReduction(container?: IContainer | undefined): number;
    canBeRefined(): boolean;
    getProducedTemperature(): number | undefined;
    postProcessDecay(): void;
    getContainerInsulation(type: TempType): number;
    getEquipmentInsulation(type: TempType): number;
    getBaseTemperature(): number | undefined;
    /**
     * Sets the item's decay with some added randomization.
     */
    setDecay(overrideDefault?: number): void;
    /**
     * Gets the item's max decay value based on quality. The max number can be modified slightly due to overrideDefault (crafting) and adding fuel which goes over this max.
     * @param overrideDefault Override the item's decayMax definition with something else.
     * @param withRandomization True if you want to return a randomized value (useful when setting the value on an item).
     * @returns A number equal to the maximum item decay or 0 if the item should not have decay at all.
     */
    getMaxDecay(overrideDefault?: number, withRandomization?: boolean): number;
    /**
     * Gets the inherit item type.
     */
    getInheritItemRecipeSkill(): SkillType;
    getDamageType(): DamageType;
    /**
     * Returns the damage types associated with a skill with a fallback for whatever damage types the item normally provides
     * @param skillType The skill to get default damage types from
     */
    getDamageTypesForSkill(skillType: SkillType): DamageType[] | undefined;
    /**
     * Gets the item's quality and action level (how good it is at doing the action).
     * @param action The ActionType you are trying to get the level for.
     * @returns A number (possibly 0 if no quality or action level).
     */
    getItemUseBonus(action: ActionType): number;
    getBestRangedWeapon(human: Human): Item | undefined;
    /**
     * Extinguishes to item if it is lit.
     * @param human Human entity that is carrying the item to extinguish.
     */
    extinguish(human: Human | undefined): void;
    /**
     * Get the maximum durability for an item based on many factors.
     * @param human Player that we checking to get the maximum item durability (as game options can affect this).
     * @returns The maximum durability of the item as a number.
     */
    getMaxDurability(human: Human): number;
    /**
     * Get the maximum reinforcement allowed for an item based on many factors.
     * @param maxDurability The maximum durability that the item should have.
     * @param actionTier Any bonus from the item's action tier.
     * @returns The maximum reinforcement of the item as a number.
     */
    getMaxReinforcement(maxDurability: number, actionTier: number): number;
    /**
     * Check if an item will break on damage.
     * @returns True or false if the item will be broken when being damaged.
     */
    willBreakOnDamage(actionType?: ActionType): boolean;
    onUnserialized(): void;
    /**
     * Gets civilization score based on item's quality and type (if it can be build/set down) but without the magical property values.
     * @param actionType Either Build or SetDown as they are the only types that can use civilization score.
     * @returns number of score (or 0 if no civilization score is set).
     */
    getCivilizationScore(actionType: ActionType.Build | ActionType.SetDown): number;
    getVehicle(): import("game/item/IItem").IItemVehicle | undefined;
    isVehicleAllowedOnTile(tile: Tile): boolean;
    addCreature(creature: Creature, remainTamed?: boolean): void;
    /**
     * Tries restoring the creature on the target tile and fans out to nearby tiles if it's occupied
     */
    tryRestoreCreature(tile: Tile, preventRendering?: boolean): Creature | undefined;
    restoreCreature(tile: Tile, preventRendering?: boolean): Creature | undefined;
    /**
     * Update the item's display (in the case that its extras are used).
     */
    updateItemDisplay(): void;
    /**
     * Determines which graphic to show based on how full the bookcase is with books/text.
     * @returns DisplayableItemType equal to which graphic it should show.
     */
    getBookcaseFullness(): ItemTypeExtra | undefined;
    /**
     * Gives bonus attack and defense to items with have quality.
     * Example: Superior quality can get a bonus of 1-2; relics can get 5-10.
     * @returns true if bonusDefense/Attack was set.
     */
    setAttackDefenseBonus(): boolean;
    /**
     * Gets the attack damage with its bonus value.
     * Note: This does not get the value with any magical properties applied.
     * @returns number The attack value with bonus applied.
     */
    getAttackWithBonus(): number;
    /**
     * Gets the ranged attack damage with its bonus value.
     * Note: This does not get the value with any magical properties applied.
     * @returns number The ranged attack value with bonus applied.
     */
    getRangedAttackWithBonus(): number;
    /**
     * Gets the base defense with its bonus value.
     * Note: This does not get the value with any magical properties applied.
     * @returns number The base defense value.
     */
    getBaseDefenseWithBonus(): number;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
}
