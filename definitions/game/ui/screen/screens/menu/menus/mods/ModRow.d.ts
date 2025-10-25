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
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import type Component from "@wayward/game/ui/component/Component";
import ModMetadataInserter from "@wayward/game/ui/screen/screens/menu/menus/mods/ModMetadataInserter";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IModRowEvents extends Events<CheckButton> {
    shouldRefreshMenu(): any;
    deleted(): any;
}
export default class ModRow extends CheckButton {
    readonly mod: ModInformation;
    event: IEventEmitter<this, IModRowEvents>;
    private readonly buttonHandler;
    constructor(mod: ModInformation);
    shouldDisableButtonButtonsOnUnchecked(): boolean;
    insertMetadata(into: Component, mod: ModInformation, context: "tooltip" | "menu"): ModMetadataInserter;
    setEnabled(enabled: boolean, prompts?: boolean, changingAllStates?: boolean): Promise<boolean>;
    protected onToggle(checked: boolean): Promise<void>;
    private checkDependants;
    private checkDependencies;
    private tryEnableDependencies;
    private getDependencyNames;
    private getTooltip;
}
export {};
