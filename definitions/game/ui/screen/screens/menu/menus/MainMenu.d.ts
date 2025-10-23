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
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import Button from "@wayward/game/ui/component/Button";
import RowSection from "@wayward/game/ui/component/RowSection";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import SaveSlot from "@wayward/game/ui/screen/screens/menu/menus/loadgame/SaveSlot";
declare class UpdateBanner extends Button {
    constructor(versionName: string, isNewVersion: boolean);
    protected onViewChangelog(): void;
    private init;
}
export default class MainMenu extends Menu {
    private isNewVersion;
    readonly updateBanner: UpdateBanner;
    readonly gameSection: RowSection;
    continueGameButton?: SaveSlot;
    readonly newLoadRow: BlockRow;
    readonly newGameButton: Button;
    readonly loadGameButton: Button;
    readonly multiplayerButton: false | Button;
    readonly metaSection: RowSection;
    readonly highscoresButton: false | Button;
    readonly optionsRow: BlockRow;
    readonly optionsButton: Button;
    readonly modsButton: Button;
    readonly aboutRow: BlockRow | undefined;
    readonly newsButton: Button | undefined;
    readonly aboutButton: Button | undefined;
    readonly quitButton: Button | undefined;
    private aboutMenu;
    private newsMenu;
    constructor();
    protected preShow(): Promise<void>;
    private initContinueNewGame;
    private updateNewsButton;
    protected onModsSetup(): void;
    private static shownGameInterrupts;
    private checkAndShowGameInterrupts;
    private getAboutMenu;
    private getNewsMenu;
    private getEnabledModsTooltip;
}
export {};
