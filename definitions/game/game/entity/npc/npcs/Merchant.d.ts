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
import type Human from "@wayward/game/game/entity/Human";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import type { IActionHandlerApi, IActionNotUsable, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { ITradeArgument } from "@wayward/game/game/entity/action/actions/trade/TradeArgument";
import { AiType } from "@wayward/game/game/entity/ai/AI";
import { type INPCConstructorOptions } from "@wayward/game/game/entity/npc/INPC";
import NPC from "@wayward/game/game/entity/npc/NPC";
import type { IContainer } from "@wayward/game/game/item/IItem";
import { ContainerType, ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IMerchantItemWorth {
    /**
     * The base worth of this item, without bartering bonus or merchant modifiers.
     */
    base: number;
    /**
     * The bonus value that will be added to items you trade,
     * and the same value of discount that will be applied to items traded from a merchant.
     */
    barteringBonus: number;
    /**
     * The credit that the item requires, without bartering bonus.
     */
    sellingBase: number;
    /**
     * The credit that the item requires, with bartering bonus applied.
     */
    selling: number;
    /**
     * The credit that the merchant will give for an item, without bartering bonus.
     */
    buyingBase: number;
    /**
     * The credit that the merchant will give for an item, with bartering bonus applied.
     */
    buying: number;
}
export declare enum MerchantCustomerKnowledgeState {
    None = 0,
    KnowsOfNewStock = 1,
    HasSeenInventory = 2
}
export interface IMerchantNPCEvents extends Events<NPC> {
    trade(human: Human, trade: ITradeArgument): any;
}
export default class MerchantNPC extends NPC {
    event: IEventEmitter<this, IMerchantNPCEvents>;
    credit: Map<string, number>;
    customerKnowledge: Map<string, MerchantCustomerKnowledgeState>;
    containerType: ContainerType;
    constructor(options?: INPCConstructorOptions);
    knowsOfUnseenStock(customer: Human): boolean;
    getCustomerCredit(customer: Human): number;
    modifyCustomerCredit(customer: Human, creditChange: number): number;
    getActions(): ActionType[] | undefined;
    getPublicContainer(): IContainer | undefined;
    getWorth(human: Human, item: Item, magicalWorth?: boolean): IMerchantItemWorth | undefined;
    getGreeting(human: Human, timeSinceLastChat: number | false): TranslationImpl | undefined;
    canInteract(human: Human): IActionUsable | IActionNotUsable;
    interact(action: IActionHandlerApi<Human>, interactType?: number | undefined): void;
    protected getDefaultName(): TranslationImpl;
    protected initializeStats(): void;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
    protected getDefaultAiType(): AiType;
    getWeightCapacity(): number;
    getBaseWeightCapacity(): number;
    calculateAdditionalWeightCapacityFromContainers(items: Item[]): number;
    protected onSpawn(): void;
    private canSpawnItem;
    protected runActions(): boolean;
    get asMerchant(): MerchantNPC;
    get asShipper(): undefined;
}
