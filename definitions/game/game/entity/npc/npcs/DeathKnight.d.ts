/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { AiType } from "game/entity/IEntity";
import { EquipType } from "game/entity/IHuman";
import type { INPCConstructorOptions } from "game/entity/npc/INPC";
import NPC from "game/entity/npc/NPC";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
export default class DeathKnightNPC extends NPC {
    constructor(options?: INPCConstructorOptions);
    protected initializeStats(): void;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultAiType(): AiType;
    protected getDefaultInventory(): Array<Item | ItemType>;
}
