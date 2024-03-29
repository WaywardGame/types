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
import type Button from "ui/component/Button";
import Dropdown from "ui/component/Dropdown";
export default class NPCDropdown extends Dropdown<number> {
    constructor();
    get selectedNPC(): import("../../../game/entity/npc/NPC").default | undefined;
    protected getOptions(): [number, (option: Button) => Button][];
}
