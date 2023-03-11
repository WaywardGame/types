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
import type Island from "game/island/Island";
import type Button from "ui/component/Button";
import Dropdown from "ui/component/Dropdown";
import type { IIslandPort } from "game/island/IIsland";
export default class IslandPortsDropdown extends Dropdown<number> {
    private island;
    constructor(island: Island | undefined);
    get selectedPort(): IIslandPort | undefined;
    setIsland(island: Island | undefined): void;
    protected getOptions(): [number, (option: Button) => Button][];
}
