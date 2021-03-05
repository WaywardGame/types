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
import { IComponent } from "ui/component/IComponent";
import { IRefreshable } from "ui/component/Refreshable";
import { Tab } from "ui/screen/screens/menu/component/Menu";
export default class TabGameplay extends Tab implements IRefreshable {
    private readonly refreshables;
    constructor();
    refresh(): this;
    static createContent(isForQuickSettings: boolean, addRefreshable: (refreshable: IRefreshable) => void): ArrayOfIterablesOr<IComponent | undefined>;
    private addRefreshable;
}
