/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
import Vector3 from "utilities/math/Vector3";
export default class InspectDialog extends Dialog {
    private readonly inspections;
    constructor();
    getName(): UiTranslation;
    setPosition(position: Vector3): this;
    protected onClose(): void;
    private removeOverlay;
}
