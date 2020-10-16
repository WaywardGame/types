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
import Button from "newui/component/Button";
import ModRow from "newui/screen/screens/menu/menus/mods/ModRow";
export default class ModButtonsHandler {
    private readonly containerButton;
    private readonly index;
    private readonly parent;
    static insert(parent: ModRow, intoButton: Button | undefined, modIndex: number, context: "modlist" | "modmenu"): ModButtonsHandler;
    buttonOptions: Button;
    buttonView?: Button;
    buttonPublish?: Button;
    private readonly info;
    private constructor();
    update(): this;
    private canPublish;
    private onDelete;
    private onPublish;
}
