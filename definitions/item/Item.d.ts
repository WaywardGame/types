/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Doodad from "doodad/Doodad";
import Creature from "entity/creature/Creature";
import { CreatureType } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import { EntityType } from "entity/IEntity";
import { EquipType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import { IObject, IObjectOptions, Quality } from "game/IObject";
import { ITemperatureSource } from "game/temperature/ITemperature";
import { BookType, IConstructedInfo, IContainable, IContainer, IItemDescription, IItemLegendary, IItemUsed, ItemType, LegendaryType, TatteredMap } from "item/IItem";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { IVector3 } from "utilities/math/IVector";
export default class Item implements IContainer, IContainable, IUnserializedCallback, IObject<ItemType>, IObjectOptions, IContainable, Partial<IContainer>, ITemperatureSource {
    book?: BookType;
    constructedFrom?: IConstructedInfo;
    containedItems: Item[];
    containedWithin: IContainer;
    decay?: number;
    disassembly: Item[];
    equippedId?: number;
    equippedType?: EntityType;
    id: number;
    itemOrders?: number[];
    legendary?: IItemLegendary;
    maxDur: number;
    minDur: number;
    order: number;
    ownerIdentifier?: string;
    quality: Quality | undefined;
    quickSlot: number | undefined;
    renamed: string | ISerializedTranslation;
    tatteredMap?: TatteredMap;
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
    private _description;
    constructor(itemType?: ItemType | undefined, quality?: Quality, human?: Human);
    toString(): string;
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
     *
     * Examples:
     * - `item.getName()` // "a stone axe"
     * - `item.getName(false)` // "stone axe"
     * - `item.getName(undefined, 3)` // "stone axes"
     */
    getName(article?: boolean, count?: number, showCount?: boolean, showQuality?: boolean, showRenamedQuotes?: boolean): Translation;
    description(): IItemDescription | undefined;
    isValid(): boolean;
    isProtected(human: Human): boolean;
    areItemsProtectedWithin(human: Human): boolean;
    getDecayMax(): number;
    getTotalWeight(): number;
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
    returns(disableNotify?: boolean): boolean;
    setUsed(itemUse?: IItemUsed, human?: Human): void;
    spawnOnBreak(): Creature | undefined;
    spawnOnDecay(): Creature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined, forceAberrant?: boolean, bypass?: boolean, preferFacingDirection?: Player): Creature | undefined;
    getPoint(): IVector3 | undefined;
    dropInWater(human: Human, x?: number, y?: number, skipParticles?: boolean): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    moveToTile(x: number, y: number, z: number, tileContainer?: IContainer, fromPoint?: IVector3): void;
    isMoving(): boolean;
    getMovementProgress(timeStamp: number): number;
    /**
     * Set the coordinates for a tattered or drawn map, or set it to reinitialize later.
     * @param reinitialize Set to true if you want the map to require decoding before use (the coords will get generated at that point).
     * @param player The player that decoded the map.
     */
    initializeMap(reinitialize: boolean, player?: Player): void;
    setQuality(human: Human | undefined, quality?: Quality): void;
    getAcceptableLegendaryTypes(): LegendaryType[];
    setLegendary(bypassType?: boolean): void;
    acquireNotify(player: Player): void;
    getStokeFireValue(): number | undefined;
    getStokeFireBonusValue(): number;
    getOnUseBonus(): number;
    getWorth(legendaryWorth?: boolean): number;
    getTraderSellPrice(player: Player | NPC, legendaryWorth?: boolean): number;
    canBurnPlayer(): boolean;
    getBaseDefense(): number;
    getDurabilityCharge(): number;
    revertFromDoodad(doodad: Doodad): void;
    getContainerWeightReduction(): number;
    canBeRefined(): boolean;
    getProducedTemperature(): number | undefined;
    /**
     * Sets the item's decay value based on quality, game mode and added some randomization
     */
    setDecay(overrideDefault?: number): void;
    onUnserialized(): void;
    private checkIfItemsMatch;
    private checkIfItemArraysMatch;
    private getOwner;
}
