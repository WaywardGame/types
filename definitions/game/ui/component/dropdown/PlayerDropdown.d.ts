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
import type Player from "@wayward/game/game/entity/player/Player";
import type Button from "@wayward/game/ui/component/Button";
import Dropdown from "@wayward/game/ui/component/Dropdown";
export default class PlayerDropdown extends Dropdown<string> {
    constructor(defaultOption?: string);
    get selectedPlayer(): Player | undefined;
    protected getOptions(): Array<[string, (option: Button) => Button]>;
}
