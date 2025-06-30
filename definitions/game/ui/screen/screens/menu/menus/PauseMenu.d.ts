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
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import { LabelledRow } from "@wayward/game/ui/component/LabelledRow";
import type { Heading } from "@wayward/game/ui/component/Text";
import { Paragraph } from "@wayward/game/ui/component/Text";
import { GameDetails } from "@wayward/game/ui/screen/screens/game/component/GameDetails";
import Messages from "@wayward/game/ui/screen/screens/game/static/Messages";
import Menu, { MenuSection } from "@wayward/game/ui/screen/screens/menu/component/Menu";
import MultiplayerOptionsMenu from "@wayward/game/ui/screen/screens/menu/menus/pause/MultiplayerOptionsMenu";
export default class PauseMenu extends Menu {
    readonly gameIcons: GameDetails;
    readonly section: MenuSection;
    readonly serverDescription: Paragraph;
    readonly labelPaused?: Heading;
    readonly buttonContinue?: Button;
    readonly continueRow: false | LabelledRow;
    readonly optionsRow: BlockRow;
    readonly multiplayerRow: BlockRow;
    readonly helpRow: BlockRow;
    readonly quitButton: Button;
    readonly modesButton: Button;
    readonly multiplayerButton: Button;
    readonly pauseButton: CheckButton;
    multiplayerOptionsMenu: MultiplayerOptionsMenu;
    messages: Messages;
    constructor();
    showMultiplayerOptionsMenu(): this;
    protected onShow(): void;
    private showGameSettingsMenu;
    private getHeadingText;
    private getParagraphText;
    private onTogglePaused;
    private isPaused;
    private onQuitButtonClick;
    private onQuitButtonClickNoSave;
    private quit;
}
