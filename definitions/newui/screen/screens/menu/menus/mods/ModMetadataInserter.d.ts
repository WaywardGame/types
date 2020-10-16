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
