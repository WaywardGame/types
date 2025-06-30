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
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class TabDeveloper extends Tab implements IRefreshable {
    private readonly refreshables;
    private readonly buttonDeveloperMode;
    private readonly buttonOpenLogsFolder;
    private readonly buttonToggleDevTools;
    private readonly buttonReloadGame;
    private readonly buttonReloadStylesheets;
    private readonly buttonReloadTexturesCache;
    private readonly buttonTogglePrepackedSprites;
    private readonly buttonToggleContainerDesyncMessages;
    private readonly buttonToggleTraceRecording;
    private readonly buttonDisposeReflection;
    private readonly blockLogSourceFiltering;
    private readonly checkButtonReportErrors;
    private onTryEnableReportErrors;
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
    private createSteamBetasDropdown;
    private onSteamBetaSelect;
}
