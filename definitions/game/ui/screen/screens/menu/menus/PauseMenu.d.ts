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
import { BlockRow } from "ui/component/BlockRow";
import Button from "ui/component/Button";
import { CheckButton } from "ui/component/CheckButton";
import { LabelledRow } from "ui/component/LabelledRow";
import type { Heading } from "ui/component/Text";
import { Paragraph } from "ui/component/Text";
import { GameDetails } from "ui/screen/screens/game/component/GameDetails";
import Messages from "ui/screen/screens/game/static/Messages";
import Menu, { MenuSection } from "ui/screen/screens/menu/component/Menu";
import MultiplayerOptionsMenu from "ui/screen/screens/menu/menus/pause/MultiplayerOptionsMenu";
export default class PauseMenu extends Menu {
    readonly gameIcons: GameDetails;
    readonly section: MenuSection;
    readonly serverDescription: Paragraph;
    readonly labelPaused?: Heading;
    readonly buttonContinue?: Button;
    readonly continueRow: false | LabelledRow;
    readonly optionsRow: BlockRow;
    readonly multiplayerRow: BlockRow;
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
}
