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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { IRefreshable } from "ui/component/Refreshable";
import { Tab } from "ui/screen/screens/menu/component/Menu";
interface ITabSaveDataEvents extends Events<Tab> {
    refresh(): any;
}
export default class TabSaveData extends Tab implements IRefreshable {
    event: IEventEmitter<this, ITabSaveDataEvents>;
    private readonly refreshables;
    constructor();
    refresh(): this;
    private onClearBindings;
    private onClearOptions;
    private onClearSaves;
    private onClearCharacters;
    private onClearHighscores;
    private onClearMilestones;
    private onClearCraftingRecipes;
    private exportGlobalSaveData;
    private importGlobalSaveData;
    private onClearAll;
    private openBackupsFolder;
}
export {};
