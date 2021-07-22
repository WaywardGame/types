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
import { EquipType, ICustomizations } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
export default class MerchantNPC extends NPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    update(): void;
    getActions(): ActionType[] | undefined;
    protected getReputationChangeOnDeath(): number;
    protected getDefaultName(): import("../../../../language/Translation").default;
    protected initializeStats(): void;
    protected getDefaultCustomization(): ICustomizations;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
    protected getDefaultAiType(): AiType;
    private canSpawnItem;
}
