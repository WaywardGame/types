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
import type Button from "ui/component/Button";
import type ModRow from "ui/screen/screens/menu/menus/mods/ModRow";
export default class ModButtonsHandler {
    private readonly index;
    private readonly parent;
    static insert(parent: ModRow, intoButton: Button | undefined, modIndex: number, context: "modlist" | "modmenu"): ModButtonsHandler;
    buttonOptions: Button;
    buttonView?: Button;
    buttonPublish?: Button;
    private readonly info;
    private readonly hostRef;
    get host(): Button;
    private constructor();
    update(): this;
    private canPublish;
    private onDelete;
    private onPublish;
}
