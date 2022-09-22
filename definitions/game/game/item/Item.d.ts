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
import EventEmitter from "event/EventEmitter";
import type Doodad from "game/doodad/Doodad";
import { ActionType } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type { CreatureType } from "game/entity/creature/ICreature";
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import { AttackType, DamageType, EntityType } from "game/entity/IEntity";
import type { EquipType } from "game/entity/IHuman";
import { SkillType } from "game/entity/IHuman";
import type Player from "game/entity/player/Player";
import { CreationId } from "game/IGame";
import type { IObject, IObjectOptions } from "game/IObject";
import { Quality } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type { ContainerReference, IConstructedInfo, IContainable, IContainer, IItemDescription, IItemDisassembleResult, IItemUsed, IMagicalPropertyInfo, IMoveToTileOptions, ItemTag } from "game/item/IItem";
import { BookType, ItemType, ItemTypeGroup, ItemWeightChange, SYMBOL_CONTAINER_CACHED_REFERENCE } from "game/item/IItem";
import type { IPlaceOnTileOptions } from "game/item/IItemManager";
import ItemMapManager from "game/item/ItemMapManager";
import type { IHasMagic, MagicalSubPropertySubTypes } from "game/magic/MagicalPropertyManager";
import MagicalPropertyManager from "game/magic/MagicalPropertyManager";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import type { IReferenceable } from "game/reference/IReferenceManager";
import type { IHasInsulation, ITemperatureSource, TempType } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import type { ITile } from "game/tile/ITerrain";
import type { ISerializedTranslation } from "language/ITranslation";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { Direction } from "utilities/math/Direction";
export interface IItemEvents {
    toggleProtected(isProtected: boolean): any;
    fireUpdate(stage?: FireStage): any;
    damage(): any;
    transformed(): any;
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
export default class Item extends EventEmitter.Host<IItemEvents> implements IReferenceable, Partial<IContainer>, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, ITemperatureSource, IHasInsulation, IHasMagic {
    readonly objectType = CreationId.Item;
    private maxDur;
    private minDur;
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems: Item[] | undefined;
    containedWithin: IContainer | undefined;
    containsCreature: Creature;
    crafterIdentifier?: string;
    decay?: number;
    disassembly: Item[];
    driverId?: number;
    driverType?: EntityType;
    equippedId?: number;
    equippedType?: EntityType;
    fireStage?: FireStage;
    id: number;
    itemOrders?: number[];
    pid: number | null | undefined;
    protected?: boolean;
    quality: Quality | undefined;
    referenceId?: number;
    renamed: string | ISerializedTranslation | undefined;
    startingDecay?: number;
    tradedFrom?: string[];
    type: ItemType;
    used?: IItemUsed;
    vehicleFacingDirection?: Direction.Cardinal;
    weight: number;
    weightFraction?: number;
    private _tags?;
    magic: MagicalPropertyManager;
    map: ItemMapManager;
    get tags(): Set<ItemTag>;
    islandId: IslandId;
    offsetX?: number;
    offsetY?: number;
    fromX?: number;
    fromY?: number;
    [SYMBOL_CONTAINER_CACHED_REFERENCE]?: ContainerReference;
    private _movementTime?;
    private _movementOptions?;
    private _description;
    constructor(itemType?: ItemType | undefined, islandId?: IslandId, quality?: Quality, human?: Human);
    get island(): import("../island/Island").default;
    toString(): string;
    get durability(): number;
    set durability(value: number);
    get durabilityMax(): number;
    set durabilityMax(value: number);
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
    getName(article?: false | "definite" | "indefinite", count?: number, showCount?: boolean, showQuality?: boolean, showRenamedQuotes?: boolean, showMagicalType?: boolean): import("../../language/impl/TranslationImpl").default;
    description(): IItemDescription | undefined;
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
    verifyAndFixItem(onlyRestoreIslandIds: boolean): void;
    /**
     * @param source A string representing the reason for this damage. Used for multiplayer debugging. Just put a unique string of characters here
     * @param modifier The amount of damage to take. Defaults to 1.
     * @param min The minimum durability that this item should have remaining. Defaults to n/a
     */
    damage(source: string, modifier?: number, min?: number): void;
    isInTradeContainer(): boolean;
    getEquippedHuman(): Human | undefined;
    isEquipped(includeDisabled?: true): boolean;
    getEquipSlot(includeDisabled?: true): EquipType | undefined;
    changeInto(type: ItemType, disableNotify?: boolean, emitTransformation?: boolean): void;
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
    createOnBreak(x: number, y: number, z: number): void;
    spawnOnDecay(): Creature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingDirection?: Human): Creature | undefined;
    getPoint(): import("../../utilities/math/Vector3").default | undefined;
    dropInWater(human: Human, x?: number, y?: number, skipParticles?: boolean): void;
    placeOnTile(x: number, y: number, z: number, options?: IPlaceOnTileOptions): boolean;
    moveToTile(options: IMoveToTileOptions): void;
    isMoving(): boolean;
    getMovementProgress(timeStamp: number): number;
    setQuality(human: Human | undefined, quality?: Quality): void;
    getValidMagicalProperties(): MagicalPropertyType[];
    addMagicalProperties(count: number): boolean;
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
    isVehicleAllowedOnTile(tile: ITile): boolean;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
}
