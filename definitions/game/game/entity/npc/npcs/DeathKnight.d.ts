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
import { AiType } from "@wayward/game/game/entity/ai/AI";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import type { INPCConstructorOptions } from "@wayward/game/game/entity/npc/INPC";
import NPC from "@wayward/game/game/entity/npc/NPC";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
export default class DeathKnightNPC extends NPC {
    constructor(options?: INPCConstructorOptions);
    protected initializeStats(): void;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultAiType(): AiType;
    protected getDefaultInventory(): Array<Item | ItemType>;
}
