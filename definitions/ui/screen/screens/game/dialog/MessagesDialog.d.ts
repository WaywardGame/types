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
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "ui/screen/screens/game/component/Dialog";
export default class MessagesDialog extends Dialog {
    constructor();
    getName(): UiTranslation;
    protected willRemove(): void;
    private onFocus;
    private onBlur;
}
