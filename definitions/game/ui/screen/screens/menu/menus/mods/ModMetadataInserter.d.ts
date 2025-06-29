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
import type Component from "@wayward/game/ui/component/Component";
import ModButtonsHandler from "@wayward/game/ui/screen/screens/menu/menus/mods/ModButtonInserter";
import type ModRow from "@wayward/game/ui/screen/screens/menu/menus/mods/ModRow";
export default class ModMetadataInserter {
    private readonly mod;
    private readonly parent;
    static insert(parent: ModRow, component: Component, mod: ModInformation, context: "tooltip" | "menu"): ModMetadataInserter;
    readonly buttonHandler?: ModButtonsHandler;
    private constructor();
    private getMultiplayerCompatibility;
}
