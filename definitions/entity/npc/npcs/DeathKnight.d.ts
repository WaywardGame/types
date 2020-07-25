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
import { AiType } from "entity/IEntity";
import { EquipType, ICustomizations } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { ItemType } from "item/IItem";
import Item from "item/Item";
export default class DeathKnightNPC extends NPC {
    constructor(id?: number, x?: number, y?: number, z?: number);
    protected initializeStats(): void;
    protected getDefaultCustomization(): ICustomizations;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultAiType(): AiType;
    protected getDefaultInventory(): Array<Item | ItemType>;
}
