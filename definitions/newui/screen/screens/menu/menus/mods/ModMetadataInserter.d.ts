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
import Component from "newui/component/Component";
import ModButtonsHandler from "newui/screen/screens/menu/menus/mods/ModButtonInserter";
import ModRow from "newui/screen/screens/menu/menus/mods/ModRow";
export default class ModMetadataInserter {
    private readonly index;
    private readonly parent;
    static insert(parent: ModRow, component: Component, index: number, context: "tooltip" | "menu"): ModMetadataInserter;
    readonly buttonHandler?: ModButtonsHandler;
    private constructor();
    private getMultiplayerCompatibility;
}
