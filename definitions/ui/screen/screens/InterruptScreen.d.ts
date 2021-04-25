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
import InterruptChoice from "language/dictionary/InterruptChoice";
import MenuScreen from "ui/screen/screens/menu/component/MenuScreen";
import { InterruptOptions, InterruptType } from "ui/util/IInterrupt";
export default class InterruptScreen extends MenuScreen {
    get interruptType(): InterruptType | undefined;
    private canBeInstant;
    constructor();
    backOneMenu(): this;
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
    protected onHide(): void;
}
