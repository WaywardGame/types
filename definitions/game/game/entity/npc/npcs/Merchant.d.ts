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
import { AiType } from "game/entity/IEntity";
import type { ICustomizations } from "game/entity/IHuman";
import { EquipType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
export default class MerchantNPC extends NPC {
    constructor(id?: number, islandId?: `${number},${number}`, x?: number, y?: number, z?: number);
    getActions(): ActionType[] | undefined;
    getSellPrice(player: Player, item: Item): number | undefined;
    getBuyPrice(player: Player, item: Item): {
        base: number;
        bonus: number;
        total: number;
    } | undefined;
    protected getReputationChangeOnDeath(): number;
    protected getDefaultName(): import("../../../../language/impl/TranslationImpl").default;
    protected initializeStats(): void;
    protected getDefaultCustomization(): ICustomizations;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
    protected getDefaultAiType(): AiType;
    private canSpawnItem;
    protected runActions(): boolean;
    /**
     * Stop stat timers when they would kill
     */
    private capStatTimers;
    /**
     * Try to do something when health is below 20%
     */
    private processHealth;
    /**
     * Try to do something when hunger is below 20%
     */
    private processHunger;
    /**
     * Try to do something when thirst is below 20%
     */
    private processThirst;
    get asMerchant(): MerchantNPC;
}
