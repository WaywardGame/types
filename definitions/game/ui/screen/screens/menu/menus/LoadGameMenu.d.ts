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
import { SaveSort, SortDirection } from "@wayward/game/save/ISaveManager";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
export declare enum LoadGameMenuClasses {
    _HasAnySelectedSlots = "menu-load-game--has-any-selected-slots"
}
export default class LoadGameMenu extends Menu {
    isMultiplayer: boolean;
    sort: SaveSort;
    sortDirection: SortDirection;
    private readonly slotLists;
    private savedGamesList?;
    private newGameButton;
    private milestonesNotUnlockableWarning;
    private readonly selectedRow;
    constructor();
    protected onSteamworksHide(): Promise<void>;
    protected goBackFrom(): void;
    protected preShow(): Promise<void>;
    private refresh;
    private loadSlots;
    private sortSlots;
    private onImport;
}
