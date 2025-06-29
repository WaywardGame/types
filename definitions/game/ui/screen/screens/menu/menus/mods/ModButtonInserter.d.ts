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
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import type Button from "@wayward/game/ui/component/Button";
import type ModRow from "@wayward/game/ui/screen/screens/menu/menus/mods/ModRow";
export default class ModButtonsHandler {
    private readonly mod;
    private readonly parent;
    static insert(parent: ModRow, intoButton: Button | undefined, mod: ModInformation, context: "modlist" | "modmenu"): ModButtonsHandler;
    buttonOptions: Button;
    buttonView?: Button;
    buttonPublish?: Button;
    private readonly hostRef;
    get host(): Button;
    private constructor();
    update(): this;
    private onDelete;
    private onPublish;
}
