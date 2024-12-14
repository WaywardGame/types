/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Component from "@wayward/game/ui/component/Component";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class TabGameplay extends Tab implements IRefreshable {
    private readonly refreshables;
    constructor();
    refresh(): this;
    static createContent(isForQuickSettings: boolean, addRefreshable: (refreshable: IRefreshable) => void): ArrayOfIterablesOr<Component | undefined>;
}
