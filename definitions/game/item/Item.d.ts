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
import EventEmitter from "event/EventEmitter";
import Doodad from "game/doodad/Doodad";
import { ActionType } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import { CreatureType } from "game/entity/creature/ICreature";
import Entity from "game/entity/Entity";
import Human from "game/entity/Human";
import { DamageType, EntityType } from "game/entity/IEntity";
import { EquipType, SkillType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
import { CreationId } from "game/IGame";
import { IObject, IObjectOptions, Quality } from "game/IObject";
import { BookType, ContainerReference, IConstructedInfo, IContainable, IContainer, IItemDescription, IItemUsed, IMagicalPropertyInfo, IMoveToTileOptions, ItemType, SYMBOL_CONTAINER_CACHED_REFERENCE } from "game/item/IItem";
import { IPlaceOnTileOptions } from "game/item/IItemManager";
import ItemMapManager from "game/item/ItemMapManager";
import MagicalPropertyManager, { IHasMagic } from "game/magic/MagicalPropertyManager";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import { IReferenceable } from "game/reference/IReferenceManager";
import { IHasInsulation, ITemperatureSource, TempType } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
export interface IItemEvents {
    toggleProtected(isProtected: boolean): any;
    fireUpdate(stage?: FireStage): any;
    damage(): any;
    transformed(): any;
    weightUpdate(): any;
    moved(): any;
}
export default class Item extends EventEmitter.Host<IItemEvents> implements IReferenceable, Partial<IContainer>, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, ITemperatureSource, IHasInsulation, IHasMagic {
    readonly objectType = CreationId.Item;
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems: Item[] | undefined;
    containedWithin: IContainer | undefined;
    decay?: number;
    disassembly: Item[];
    driverId?: number;
    equippedId?: number;
    equippedType?: EntityType;
    fireStage?: FireStage;
    id: number;
    itemOrders?: number[];
    magic: MagicalPropertyManager;
    map: ItemMapManager;
    maxDur: number;
    minDur: number;
    order: number;
    ownerIdentifier?: string;
    pid: number | null | undefined;
    protected?: boolean;
    quality: Quality | undefined;
    quickSlot: number | undefined;
    referenceId?: number;
    renamed: string | ISerializedTranslation | undefined;
    startingDecay?: number;
    tradedFrom?: string[];
    type: ItemType;
    used?: IItemUsed;
    weight: number;
    weightFraction: number;
    offsetX?: number;
    offsetY?: number;
    fromX?: number;
    fromY?: number;
    [SYMBOL_CONTAINER_CACHED_REFERENCE]?: ContainerReference;
    private _movementFinishTime?;
    private _movementOptions?;
    private _description;
    private _minDur;
    constructor(itemType?: ItemType | undefined, quality?: Quality, human?: Human);
    toString(): string;
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
    getDecayAtStart(): number;
    /**
     * Returns the maximum decay of an item, or undefined if the item does not have the decayMax property.
     * @returns A number or undefined.
     */
    canDecay(): number | undefined;
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
    changeInto(type: ItemType, disableNotify?: boolean, emitTransformation?: boolean): void;
    /**
     * Returns and item based on returnOnUseAndDecay.
     * @param disableNotify Set to true if no notification should be shown for the new item above the player.
     * @param craft Set to true when returning consumed items to check for whenCrafted property in returnOnUseAndDecay.
     */
    returns(disableNotify?: boolean, craft?: boolean): boolean;
    setUsed(itemUse?: IItemUsed, human?: Human): void;
    createOnBreak(x: number, y: number, z: number): void;
    spawnOnDecay(): Creature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingDirection?: Player): Creature | undefined;
    getPoint(): import("../../utilities/math/Vector3").default | undefined;
    dropInWater(human: Human, x?: number, y?: number, skipParticles?: boolean): void;
    placeOnTile(x: number, y: number, z: number, options?: IPlaceOnTileOptions): boolean;
    moveToTile(options: IMoveToTileOptions): void;
    isMoving(): boolean;
    getMovementProgress(timeStamp: number): number;
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
     * @param magicalWorth Include the value of `MagicalPropertyType.Worth`, defaults to true
     */
    getWorth(player: Player | undefined, magicalWorth?: boolean): number;
    /**
     * The full price the item will go for when traded to a merchant NPC. Considers modifiers and a player's bartering skill.
     * @param player The player that is trading the item.
     * @param magicalWorth Include the value of `MagicalPropertyType.Worth`, defaults to true
     */
    getTraderSellPrice(player: Player | undefined, magicalWorth?: boolean): number;
    canBurnPlayer(): boolean;
    getBaseDefense(): number;
    getDurabilityCharge(): number;
    revertFromDoodad(doodad: Doodad): void;
    /**
     * Returns the container weight reduction
     * @returns 1 if there is no reducton or [-50% + magical storing values]
     */
    getContainerWeightReduction(): number;
    canBeRefined(): boolean;
    getProducedTemperature(): number | undefined;
    postProcessDecay(): void;
    getContainerInsulation(type: TempType): number;
    getEquipmentInsulation(type: TempType): number;
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
    getRangedWeapon(player: Player | NPC): Item | boolean;
    onUnserialized(): void;
    private setupDurabilityHandlers;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
    private getOwner;
}
