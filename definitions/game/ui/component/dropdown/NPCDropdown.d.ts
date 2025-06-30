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
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Button from "@wayward/game/ui/component/Button";
import Dropdown from "@wayward/game/ui/component/Dropdown";
export default class NPCDropdown extends Dropdown<number> {
    constructor();
    get selectedNPC(): NPC | undefined;
    protected getOptions(): Array<[number, (option: Button) => Button]>;
}
