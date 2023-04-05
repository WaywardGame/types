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
import { ActionType } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import { AiType } from "game/entity/IEntity";
import { EquipType } from "game/entity/IHuman";
import type { INPCConstructorOptions } from "game/entity/npc/INPC";
import NPC from "game/entity/npc/NPC";
import type { IContainer } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
export interface IMerchantBuyPrice {
    base: number;
    bonus: number;
    total: number;
}
export default class MerchantNPC extends NPC {
    credit: Record<string, number>;
    constructor(options?: INPCConstructorOptions);
    getCustomerCredit(customer: Human): number;
    modifyCustomerCredit(customer: Human, creditChange: number): number;
    getActions(): ActionType[] | undefined;
    getPublicContainer(): IContainer | undefined;
    getSellPrice(human: Human, item: Item): number | undefined;
    getBuyPrice(human: Human, item: Item): IMerchantBuyPrice | undefined;
    /**
     * Closes container dialogs
     */
    closeContainerDialogs(): void;
    protected getReputationChangeOnDeath(): number;
    protected getDefaultName(): import("../../../../language/impl/TranslationImpl").default;
    protected initializeStats(): void;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
    protected getDefaultAiType(): AiType;
    private canSpawnItem;
    protected runActions(): boolean;
    get asMerchant(): MerchantNPC;
    get asShipper(): undefined;
}
