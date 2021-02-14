/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Doodad from "doodad/Doodad";
import { ActionType } from "entity/action/IAction";
import Creature from "entity/creature/Creature";
import { CreatureType } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import { DamageType, EntityType } from "entity/IEntity";
import { EquipType, SkillType } from "entity/IHuman";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { IObject, IObjectOptions, Quality } from "game/IObject";
import { IReferenceable } from "game/IReferenceManager";
import MagicalPropertyManager, { IHasMagic } from "game/MagicalPropertyManager";
import { MagicalPropertyType } from "game/MagicalPropertyType";
import DrawnMap from "game/mapping/DrawnMap";
import { IHasInsulation, ITemperatureSource } from "game/temperature/ITemperature";
import { BookType, IConstructedInfo, IContainable, IContainer, IItemDescription, IItemUsed, IMagicalPropertyInfo, IMoveToTileOptions, ItemType } from "item/IItem";
import { IPlaceOnTileOptions } from "item/IItemManager";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { FireStage } from "tile/events/IFire";
export interface IItemEvents {
    toggleProtected(isProtected: boolean): any;
    fireUpdate(stage?: FireStage): any;
}
export default class Item extends EventEmitter.Host<IItemEvents> implements IReferenceable, IContainer, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, ITemperatureSource, IHasInsulation, IHasMagic {
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems: Item[];
    containedWithin: IContainer | undefined;
    decay?: number;
    disassembly: Item[];
    driverId?: number;
    equippedId?: number;
    equippedType?: EntityType;
    id: number;
    itemOrders?: number[];
    private map?;
    maxDur: number;
    minDur: number;
    order: number;
    ownerIdentifier?: string;
    protected?: boolean;
    quality: Quality | undefined;
    quickSlot: number | undefined;
    referenceId?: number;
    renamed: string | ISerializedTranslation | undefined;
    tradedFrom?: string[];
    type: ItemType;
    used?: IItemUsed;
    weight: number;
    weightCapacity: number;
    weightFraction: number;
    magic: MagicalPropertyManager;
    offsetX?: number;
    offsetY?: number;
    fromX?: number;
    fromY?: number;
    _movementFinishTime?: number;
    private _movementOptions?;
    private _description;
    private _minDur;
    private fireStage?;
    constructor(itemType?: ItemType | undefined, quality?: Quality, human?: Human);
    toString(): string;
    /**
     * Sets the item as magical with a chance based on quality
     * @param bonus The number that chances get multiplied by, for example, 2 or 3
     * @param propertiesBypass The number of magical properties to force on to the item
     * @returns True if the item has become magical
     */
    setMagicalChanceFromQuality(bonus?: number, propertiesBypass?: number): boolean;
    /**
     * Changes the item id for this item
     * @param id The new item id
     * @param player The player that has the item
     */
    changeId(id: number, player: Player): void;
    /**
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(): number;
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
    getName(article?: boolean, count?: number, showCount?: boolean, showQuality?: boolean, showRenamedQuotes?: boolean, showMagicalType?: boolean): Translation;
    description(): IItemDescription | undefined;
    isTransient(): boolean;
    isValid(): boolean;
    isProtected(): boolean;
    getDecayMax(): number;
    getDecayRate(isClientSide: boolean): number;
    getPreservationDecayMultiplier(): number;
    getTemperatureDecayMultiplier(isClientSide: boolean): number;
    getTotalWeight(bypassContainer?: boolean): number;
    getDisassemblyWeight(): number;
    isNearby(executor: Entity, allowNearby?: boolean): boolean;
    verifyAndFixItem(): void;
    damage(source: string, modifier?: number): void;
    /**
     * Gets the item's damage modifier which certain special items have so they can have high durability for use, but normal damage ranges.
     */
    getDamageModifier(): number;
    isDamaged(): boolean;
    isInTradeContainer(): boolean;
    isEquipped(): boolean;
    getEquippedPlayer(): Human | undefined;
    getEquipSlot(): EquipType | undefined;
    setQuickSlot(player: Player, quickSlot: number | undefined): void;
    clearQuickSlot(): void;
    isDecayed(): boolean;
    changeInto(type: ItemType, disableNotify?: boolean): void;
    /**
     * Returns and item based on returnOnUseAndDecay.
     * @param disableNotify Set to true if no notification should be shown for the new item above the player.
     * @param craft Set to true when returning consumed items to check for whenCrafted property in returnOnUseAndDecay.
     */
    returns(disableNotify?: boolean, craft?: boolean): boolean;
    setUsed(itemUse?: IItemUsed, human?: Human): void;
    spawnOnBreak(): Creature | undefined;
    spawnOnDecay(): Creature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingDirection?: Player): Creature | undefined;
    getPoint(): import("../utilities/math/Vector3").default | undefined;
    dropInWater(human: Human, x?: number, y?: number, skipParticles?: boolean): void;
    placeOnTile(x: number, y: number, z: number, options?: IPlaceOnTileOptions): boolean;
    moveToTile(options: IMoveToTileOptions): void;
    isMoving(): boolean;
    getMovementProgress(timeStamp: number): number;
    /**
     * Sets the map associated with this item.
     * @param islandId The ID of the island containing the associated map.
     * @param mapId The index of the map in the `island.treasureMaps` array.
     */
    setMap(islandId: string, mapId: number): boolean;
    /**
     * If the associated map is already on the given island, does nothing. If not, associates the map with a map on the given island,
     * chosen by the given properties:
     * @param completed Whether the associated map should be a completed one
     * @param randomDecimal A decimal to use to choose which map on this island to use
     */
    setMapIsland(island: string, completed: boolean, randomDecimal: number): boolean;
    /**
     * If this item is a tattered map or a drawn map, this will return its associated `DrawnMap` instance.
     */
    getMap(): DrawnMap | undefined;
    /**
     * @returns whether the associated map is on the current island
     */
    isMapOfIsland(): boolean;
    /**
     * Randomises which map is associated with this item.
     * @param chanceOfGivingCompletedMap By default, 10% chance of becoming associated with an already-completed map.
     * @param chanceOfGivingMapFromOtherIsland By default, 50% chance of, rather than becoming associated with an already-completed map,
     * instead becoming associated with a map on another island.
     * Note: If there are no maps on the current island, will always become associated with a map on another island regardless of chance.
     * @returns whether this item is now associated with a map on this island
     */
    randomizeMap(chanceOfGivingCompletedMap?: number, chanceOfGivingMapFromOtherIsland?: number, islandId?: string, randomDecimal?: number): boolean;
    setQuality(human: Human | undefined, quality?: Quality): void;
    getValidMagicalProperties(): MagicalPropertyType[];
    addMagicalProperties(count: number): boolean;
    rerollMagicalProperty(type: MagicalPropertyType): boolean;
    rerollMagicalPropertyValues(): void;
    addMagicalProperty(type: MagicalPropertyType): boolean;
    getMagicalPropertyInfo(type: MagicalPropertyType): IMagicalPropertyInfo | undefined;
    acquireNotify(player: Player): void;
    getStokeFireValue(): number | undefined;
    getStokeFireBonusValue(): number;
    getOnUseBonus(): number;
    /**
     * Gets the worth of an item used for merchant trading. Does not consider batering or modifiers bonuses; use Item.getTraderSellPrice for that.
     * @param player The player that is trading the item for its worth (used for durability calculations).
     * @param magicalWorth True if getting the worth including its magical worth property.
     */
    getWorth(player: Player | undefined, magicalWorth?: boolean): number;
    /**
     * The full price the item will go for when traded to a merchant NPC. Considers modifiers and a player's bartering skill.
     * @param player The player that is trading the item.
     * @param magicalWorth True if getting the worth including its magical worth property.
     */
    getTraderSellPrice(player: Player | undefined, magicalWorth?: boolean): number;
    canBurnPlayer(): boolean;
    getBaseDefense(): number;
    getDurabilityCharge(): number;
    revertFromDoodad(doodad: Doodad): void;
    getContainerWeightReduction(): number;
    canBeRefined(): boolean;
    getProducedTemperature(): number | undefined;
    postProcessDecay(): void;
    getInsulation(): number | undefined;
    getBaseTemperature(): number | undefined;
    /**
     * Sets the item's decay value based on quality, game mode and added some randomization
     */
    setDecay(overrideDefault?: number): void;
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
    onUnserialized(): void;
    private setupDurabilityHandlers;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
    private getOwner;
}
