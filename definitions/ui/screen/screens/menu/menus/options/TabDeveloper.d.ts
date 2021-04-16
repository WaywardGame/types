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
import { IRefreshable } from "ui/component/Refreshable";
import { Tab } from "ui/screen/screens/menu/component/Menu";
export default class TabDeveloper extends Tab implements IRefreshable {
    private readonly refreshables;
    private readonly buttonDeveloperMode;
    private readonly buttonUnlockAllMilestones;
    private readonly buttonUnlockAllRecipes;
    private readonly buttonOpenLogsFolder;
    private readonly buttonToggleDevTools;
    private readonly buttonToggleTraceRecording;
    private readonly buttonReloadGame;
    private readonly buttonReloadStylesheets;
    private readonly blockLogSourceFiltering;
    private readonly blockUIExperiments;
    constructor();
    refresh(): this;
    private addRefreshable;
    private toggleLogSource;
    private toggleUIExperiment;
    private toggleDeveloperTools;
    private openLogsFolder;
    private toggleTraceRecording;
    private toggleDeveloperMode;
    private reloadGame;
    private unlockAllMilestones;
    private unlockAllRecipes;
}
