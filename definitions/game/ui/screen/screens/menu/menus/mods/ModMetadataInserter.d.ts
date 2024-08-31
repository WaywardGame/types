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
