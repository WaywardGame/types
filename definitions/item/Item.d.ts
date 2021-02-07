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
import { IHasInsulation, ITemperatureSource } from "game/temperature/ITemperature";
import { BookType, IConstructedInfo, IContainable, IContainer, IItemDescription, IItemMagicalProperty, IItemUsed, IMagicalStats, IMoveToTileOptions, ItemType, MagicalPropertyType } from "item/IItem";
import { IPlaceOnTileOptions } from "item/IItemManager";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { FireStage } from "tile/events/IFire";
export interface IItemEvents {
    toggleProtected(isProtected: boolean): any;
    fireUpdate(stage?: FireStage): any;
}
export default class Item extends EventEmitter.Host<IItemEvents> implements IReferenceable, IContainer, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, ITemperatureSource, IHasInsulation {
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
    magicalProperties?: IItemMagicalProperty[];
    map?: [island: string, id: number];
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
     * If this item is a tattered map or a drawn map, this will return its associated `DrawnMap` instance.
     */
    getDrawnMap(): import("../game/mapping/DrawnMap").default | undefined;
    /**
     * Randomises which map is associated with this item.
     * @param chanceOfGivingCompletedMap By default, 10% chance of becoming associated with an already-completed map.
     */
    randomizeMap(chanceOfGivingCompletedMap?: number): void;
    setQuality(human: Human | undefined, quality?: Quality): void;
    getValidMagicalProperties(): MagicalPropertyType[];
    /**
     * Check to see if an item has a specific magical property, then return its values
     * @param magicalPropertyType Set to type of magical property to look for
     * @returns The IItemMagicalProperty on a match, undefined if no match
     */
    getMagicalProperty(magicalPropertyType: MagicalPropertyType): IItemMagicalProperty | undefined;
    /**
     * Sets the magical type for an item
     * @param bypassIndex Set to the index of item.magicalProperties that you want to modify to get the value from
     * @param bypassType Set to true if you want to keep the current magical type of the item
     * @param bypassValue Set to true if you want to keep the current magical value of the item
     * @param properties Set to the number of properties you want to attempt to give the item
     * @returns The maximum value the magical value can be for the accepted or bypassed type and if the value is a float value or integer
     */
    setMagical(bypassIndex?: number, bypassType?: boolean, bypassValue?: boolean, properties?: number): undefined | IMagicalStats;
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
