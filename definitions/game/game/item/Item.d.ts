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
import type { IHasQuality, IObject, IObjectOptions, IQualityEvents } from "@wayward/game/game/IObject";
import { Quality } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import type Entity from "@wayward/game/game/entity/Entity";
import type { IEntityMovableEvents } from "@wayward/game/game/entity/EntityMovable";
import EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type { IMovingData } from "@wayward/game/game/entity/IEntity";
import { AttackType, DamageType, EntityType } from "@wayward/game/game/entity/IEntity";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type ActionContext from "@wayward/game/game/entity/action/IActionContext";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IMobCheck, IslandId } from "@wayward/game/game/island/IIsland";
import { WaterType } from "@wayward/game/game/island/IIsland";
import type { ContainerReference, DisplayableItemType, IConstructedInfo, IContainable, IContainer, IItemChangeIntoOptions, IItemDescription, IItemDisassembleResult, IItemDisassembly, IItemGetNameOptions, IItemUsed, IItemVehicle, IMagicalPropertyInfo, IItemMovementResult as IMoveToTileMobCheckResult, IMoveToTileOptions, ItemTag } from "@wayward/game/game/item/IItem";
import { ItemTypeExtra } from "@wayward/game/game/item/IItem";
import { BookType, ContainerSort, ItemDamageResult, ItemType, ItemTypeGroup, ItemWeightChange, SYMBOL_CONTAINER_CACHED_REFERENCE } from "@wayward/game/game/item/IItem";
import type { IPlaceOnTileOptions } from "@wayward/game/game/item/IItemManager";
import ItemMapManager from "@wayward/game/game/item/ItemMapManager";
import type { MagicalLootType } from "@wayward/game/game/item/MagicalLoot";
import type { MagicalSubPropertySubTypes } from "@wayward/game/game/magic/IMagicalProperty";
import type { IHasMagic } from "@wayward/game/game/magic/IMagicalProperty";
import type { IMagicalPropertyManagerEvents } from "@wayward/game/game/magic/MagicalPropertyManager";
import MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import { type IHasInsulation, type IInsulationResult, type TempType } from "@wayward/game/game/temperature/ITemperature";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import FireStage from "@wayward/game/game/tile/events/fire/FireStage";
import { Article } from "@wayward/game/language/ITranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import type { IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
import Debug from "@wayward/game/utilities/dev/Debug";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
type ItemMagicEvents = {
    [EVENT in keyof IMagicalPropertyManagerEvents as `magic${Capitalize<EVENT>}`]: IMagicalPropertyManagerEvents[EVENT];
};
export interface IItemEvents extends IEntityMovableEvents, IQualityEvents, ItemMagicEvents {
    toggleProtected(isProtected: boolean): any;
    containerChange(newContainer: IContainer, oldContainer?: IContainer): any;
    fireUpdate(stage?: FireStage): any;
    damage(): any;
    transformed(newType: ItemType, oldType: ItemType): any;
    weightUpdate(): any;
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
    durabilityChange(durability: number, oldDurability: number): any;
    durabilityMaxChange(durabilityMax: number, oldDurabilityMax: number): any;
    decayChange(decay?: number, oldDecay?: number): any;
    addMagic(manager: MagicalPropertyManager): any;
    removeMagic(manager: MagicalPropertyManager): any;
    attackBonusChange(attackBonus: number, oldAttackBonus?: number): any;
    defenseBonusChange(defenseBonus: number, oldDefenseBonus?: number): any;
    revertFromDoodad(doodad: Doodad): any;
    becomeDoodad(doodad: Doodad): any;
    baseItem(baseItem: ItemType | undefined): any;
}
export default class Item extends EntityMovable<IItemDescription, ItemType, ReferenceType.Item, ItemTag> implements Partial<IContainer>, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, IHasInsulation, IHasMagic, IHasQuality {
    get entityType(): EntityType.Item;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, IItemEvents>;
    private maxDur;
    private minDur;
    weight: number;
    private decay?;
    addOrder?: number[];
    baseItem?: ItemType;
    bonusAttack?: number;
    bonusDefense?: number;
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems?: Item[];
    containedWithin?: IContainer;
    containsCreature?: Creature;
    crafterIdentifier?: string;
    disassembly?: Item[];
    driverReference?: Reference<ReferenceType.Player | ReferenceType.NPC>;
    equippedReference?: Reference<ReferenceType.Player | ReferenceType.NPC>;
    fireStage?: FireStage;
    holderReference?: Reference<ReferenceType.Player | ReferenceType.NPC>;
    magic?: MagicalPropertyManager;
    map?: ItemMapManager;
    protected?: boolean;
    quality?: Quality;
    sort?: ContainerSort;
    sortDirection?: SortDirection;
    stacks?: Set<ItemType>;
    startingDecay?: number;
    used?: IItemUsed;
    vehicleFacingDirection?: Direction.Cardinal;
    weightCapacity?: number;
    weightFraction?: number;
    /**
     * Includes merchant identifiers for each instance of the item being traded to/from the merchant.
     * (The property name is out of date.)
     */
    tradedFrom?: string[];
    offsetX?: number;
    offsetY?: number;
    [SYMBOL_CONTAINER_CACHED_REFERENCE]?: ContainerReference;
    private _movementOptions?;
    constructor(itemType?: ItemType | undefined, islandId?: IslandId, quality?: Quality, human?: Human, magicalLootType?: MagicalLootType);
    get asCorpse(): undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): Item | undefined;
    get asTile(): undefined;
    get asContainer(): (this & IContainer) | undefined;
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
    toString(): string;
    stopSlipping(): void;
    protected updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    get durability(): number;
    set durability(value: number);
    get durabilityMaxWithMagical(): number;
    get durabilityMax(): number;
    set durabilityMax(value: number);
    getDisplayItem(): DisplayableItemType;
    isContainer(): this is Item & IContainer;
    isWithin(container?: IContainer): boolean;
    get builtDescription(): IDoodadDescription | undefined;
    get placeDownDescription(): IDoodadDescription | undefined;
    countTradesWith(human?: Human): number;
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
     * @param contextualChanceMultiplier The number that chances get multiplied by, for example, 2 or 3. Currently used based on skill, island distance, etc
     * @param quantityOverride The number of properties to use instead of generating the quantity randomly
     * @param magicalLootType The type of magical loot to use, if any. Defaults to undefined, which won't use any weighted value. When used, the property value will always use the "min" value.
     * @returns True if the item has become magical
     */
    setMagicalChanceFromQuality(contextualChanceMultiplier?: number, quantityOverride?: number, magicalLootType?: MagicalLootType): boolean;
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
    getName(article?: Article, options?: Partial<IItemGetNameOptions>): TranslationImpl;
    get debug(): Debug.JIT<[overrideToStringTag?: string]>;
    protected get typeEnum(): typeof ItemType;
    protected getDescription(): IItemDescription | undefined;
    get isTransient(): boolean;
    get isValid(): boolean;
    isProtected(): boolean;
    isInGroup(itemGroup: ItemTypeGroup): boolean;
    /**
     * Get the driver for this item (if it's a vehicle with a driver)
     */
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
    getDecayAtStartWithMagical(): number;
    getVisualDurability(): number;
    getVisualDecay(): number;
    private getVisualBarValue;
    /**
     * Returns the maximum decay of an item, or undefined if the item does not have the decayMax or storeDecay property.
     * @returns A number or undefined.
     */
    canDecay(): number | undefined;
    getDecayRate(isClientSide: boolean): number;
    getPreservationDecayMultiplier(): number;
    getTemperatureDecayMultiplier(isClientSide: boolean): number;
    canHaveCooldown(): boolean;
    /**
     * @returns The cooldown for this item. `0` = just started cooldown, `1` = finished cooldown
     */
    getCooldown(human: Human): number;
    getVisualCooldown(human: Human): number;
    getTotalWeight(bypassContainer?: boolean, targetContainer?: IContainer): number;
    getDisassemblyItems(): IItemDisassembleResult | undefined;
    isNearby(executor: Entity, allowNearby?: boolean): boolean;
    /**
     * Fixes item issues.
     * Note: This is not called by clients joining a mp game.
     */
    verifyAndFixItem(): void;
    protected pipeMagicalPropertyManagerEvents(magic: MagicalPropertyManager): void;
    protected onMagicSet(type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes, value?: number, previousValue?: number, curse?: true): void;
    protected onMagicRemove(type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes, value?: number): void;
    verifyAndFixMagic(): void;
    /**
     * @param source A string representing the reason for this damage. Used for multiplayer debugging. Just put a unique string of characters here
     * @param modifier The amount of damage to take. Defaults to 1.
     * @param min The minimum durability that this item should have remaining. Defaults to n/a
     * @param type The type of damage being done (currently used to check for createOnBreak).
     */
    damage(source: string, modifier?: number, min?: number, type?: DamageType): ItemDamageResult;
    isInTradeContainer(): boolean;
    getEquippedHuman(): Human | undefined;
    isEquipped(includeDisabled?: true): boolean;
    getEquipSlot(includeDisabled?: true): EquipType | undefined;
    changeInto(type: ItemType, options?: Partial<IItemChangeIntoOptions>): void;
    /**
     * Verifies an item has the proper magical properties and rerolls individual ones if needed.
     * @returns True if the item had a glowing magical property.
     */
    verifyMagicalProperties(): boolean;
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
    createOnBreak(tile: Tile, damageType?: DamageType): void;
    spawnOnDecay(tile: Tile): Creature | undefined;
    spawnCreatureOnItem(tile: Tile, creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingTile?: Human, maxTilesChecked?: number): Creature | undefined;
    get point(): IVector3 | undefined;
    get tile(): Tile | undefined;
    dropInWater(human: Human | undefined, tile?: Tile, skipParticles?: boolean): void;
    placeOnTile(tile: Tile, options?: IPlaceOnTileOptions): boolean;
    /**
     * Unsupported
     */
    moveTo(): boolean;
    /**
     * Moves an item based on the result of a mob check.
     * This will apply side effects based on what the item hits / where the item lands
     */
    moveToTileWithMobCheck(mobCheck: IMobCheck, human: Human | undefined, damage?: number): IMoveToTileMobCheckResult;
    /**
     * Moves an item to a target point / container while animating it
     * @param options Movement options
     * @returns True if the movement is happening, false if it wasn't able to move
     */
    moveToTile(options: IMoveToTileOptions): boolean;
    getMovementOptions(): IMoveToTileOptions | undefined;
    protected onMovementCompleted(movingData: IMovingData): void;
    setQuality(human: Human | undefined, quality?: Quality): void;
    /**
     * Get acceptable magical types based on item
     */
    getValidMagicalProperties(): MagicalPropertyType[];
    addMagicalProperties(count: number, source?: string, magicalLootType?: MagicalLootType): boolean;
    rerollMagicalProperty(type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes): boolean;
    rerollMagicalPropertyValues(): void;
    initializeMagicalPropertyManager(): MagicalPropertyManager;
    protected updateDurabilityForPersistence(type: MagicalPropertyType, value?: number): void;
    protected clampDecayToMax(type: MagicalPropertyType, value?: number): void;
    protected clampDurabilityToMax(type: MagicalPropertyType): void;
    addMagicalProperty(type: MagicalPropertyType, subType?: MagicalSubPropertySubTypes, valueType?: "min" | "max"): boolean;
    getMagicalPropertyInfo(type: MagicalPropertyType): IMagicalPropertyInfo | undefined;
    acquireNotify(human: Human, context?: ActionContext): void;
    getStokeFireValue(): number | undefined;
    getStokeFireBonusValue(): number;
    getOnUseBonus(): number;
    getAttackDamage(type: AttackType.MeleeWeapon | AttackType.RangedWeapon): number;
    /**
     * Gets the worth of an item used for merchant trading. Does not consider bartering or modifiers bonuses; use Item.getTraderSellPrice for that.
     * @param human The human that is trading the item for its worth (used for durability calculations).
     * @param magicalWorth Include the value of `MagicalPropertyType.Worth`, defaults to true
     */
    getWorth(human: Human | undefined, magicalWorth?: boolean): number;
    /**
     * Checks to see if the item is in a fire/hot thing
     */
    canBurnPlayer(): boolean;
    /**
     * Get the base defense of an item plus its magical defense stat if applicable
     */
    getBaseDefense(): number;
    /**
     * Returns the durability of the item based on the max durability to be used as a pseudo "charge"
     */
    getDurabilityCharge(): number;
    removeMagic(): void;
    /**
     * Reverts properties of an item from a disassembly item (IItemDisassembly)
     * @param disassemblyItem	Disassembly item to revert from
     * @param placeOnTile	Place the item on a tile after reverting if set to a tile
     */
    revertFromDisassembly(disassemblyItem: IItemDisassembly, placeOnTile?: Tile): void;
    revertFromDoodad(doodad: Doodad): void;
    copyPropertiesFrom(fromItem: Item): void;
    getWeightCapacity(): number | undefined;
    /**
     * Returns the container weight reduction
     * @param targetContainer Container to calculate the weight reduction for
     * @returns 1 if there is no reducton or [-50% + magical storing values]
     */
    getContainerWeightReduction(container?: IContainer | undefined): number;
    /**
     * Can the item be refined based on disassembly items and minimum getWeight tables?
     */
    canBeRefined(): boolean;
    getProducedTemperature(): number | undefined;
    postProcessDecay(): void;
    getContainerInsulation(type: TempType): IInsulationResult | undefined;
    getEquipmentInsulation(type: TempType): IInsulationResult | undefined;
    getBaseTemperature(): number | undefined;
    /**
     * Gets the ticks until this item will decay at 1x decay speed.
     * @param resetIfUnset True if it should reset decay if it doesn't exist
     */
    getDecayTime(resetIfUnset?: boolean): number | undefined;
    /**
     * Increases the time until the item will decay (ticks until it decays at 1x decay speed).
     */
    addDecayTime(time?: number): number | undefined;
    /**
     * Decreases the time until the item will decay (ticks until it decays at 1x decay speed).
     */
    reduceDecayTime(time?: number, skipChance?: boolean): number | undefined;
    /**
     * Sets the item's decay time (ticks until it decays at 1x decay speed).
     * @param decayTime The new decay time to set, or `undefined` to remove the decay time.
     * @param bypassMax If set to true, it will not check the maximum decay time and will set it to the given value.
     * @param increaseStartingDecay If set to true, it will increase the starting decay time if the new decay time is higher than the starting decay time.
     */
    setDecayTime(decayTime?: number, capDecayMax?: boolean, increaseStartingDecay?: boolean): void;
    /**
     * Resets the item's decay with some added randomization.
     */
    resetDecayTime(overrideDefault?: number): void;
    /**
     * Gets the item's max decay value based on quality. The max number can be modified slightly due to overrideDefault (crafting) and adding fuel which goes over this max.
     * @param overrideDefault Override the item's decayMax definition with something else.
     * @param withRandomization True if you want to return a randomized value (useful when setting the value on an item).
     * @returns A number equal to the maximum item decay or `undefined` if the item should not have decay at all.
     */
    getMaxDecayTime(overrideDefault?: number, withRandomization?: boolean): number | undefined;
    /**
     * Gets the skill type associated with the item, or choose a random one if the description is an array.
     */
    getSkillUse(): SkillType;
    /**
     *
     * @param action Gets the consume skill for the given action (Eat, Heal, HealOther, DrinkItem, or Cure) on the item
     */
    getConsumeSkillUse(action: ActionType): SkillType;
    getDamageType(): DamageType;
    /**
     * Returns the damage types associated with a skill with a fallback for whatever damage types the item normally provides
     * @param skillType The skill to get default damage types from
     */
    getDamageTypesForSkill(skillType: SkillType): DamageType[] | undefined;
    /**
     * Used to return the quality bonuses for crafting with superior/remarkable/exceptional items
     */
    getCraftQualityBonus(required?: boolean): number;
    /**
     * Item tier bonus
     */
    getCraftTierBonus(group?: ItemTypeGroup, required?: boolean): number;
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
     * Spawns a slither sucker from its item form.
     * @param tile The tile to attempt to spawn on to.
     * @param human The human the creature is facing from (in the case where we prefer facing tile).
     */
    spawnSlithSucker(tile: Tile, human: Human | undefined): void;
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
     * Gets civilization score based on item's quality and type (if it can be build/set down) but without the magical property values. This also exists on doodads.
     * @param actionType Either Build or SetDown as they are the only types that can use civilization score.
     * @returns number of score (or 0 if no civilization score is set).
     */
    getCivilizationScore(actionType: ActionType.Build | ActionType.SetDown): number;
    getVehicle(): IItemVehicle | undefined;
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
    /**
     * When the item melts, it will leave behind items that are specified in the leaveDissassemblyItemsOnMelt property
     * @param container The container to leave the items in or on
     */
    dropItemsOnMelt(container: IContainer): void;
    /**
     * Sets the base item type based on the disassembly items and the overlayItem property.
     */
    setBaseItemType(): void;
    /**
     * Gets the item type that should be returned when the item is used up or decays.
     * @returns The item type that should be returned when the item is used up or decays, or ItemType.None if nothing should be returned.
     */
    getReturnType(): ItemType;
    createReturnItem(returnType: ItemType, container?: IContainer): Item | undefined;
    /**
     * Returns the type of water contained in the item in the case of containers of liquid.
     * @returns WaterType enum value.
     */
    getWaterType(): WaterType;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
}
export {};
