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
import Component from "@wayward/game/ui/component/Component";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
export type ModOptionSectionInitializer = (component: Component) => any;
export default class TabMods extends Tab implements IRefreshable {
    private static readonly modOptions;
    static registerModOptions(mod: ModInformation, initializer: ModOptionSectionInitializer): void;
    static deleteModOptions(mod: ModInformation): void;
    static modHasOptions(mod: ModInformation): boolean;
    constructor();
    refresh(): this;
}
