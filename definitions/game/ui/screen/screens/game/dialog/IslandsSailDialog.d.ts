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
import Button from "ui/component/Button";
import type Component from "ui/component/Component";
import IslandsDialog from "ui/screen/screens/game/dialog/islands/IslandsDialog";
export default class IslandsSailDialog extends IslandsDialog {
    closeOnTravel: boolean;
    readonly sailButton: Button;
    constructor();
    protected initializeSettingsPanel(panel: Component): void;
    protected onChangedSelectedIsland(animate?: boolean): void;
    protected onMouseMoveWhileOver(): void;
    private updateSailButton;
    protected onSubmit(): boolean;
    protected sail(): void;
    protected preMoveToIsland(): void;
    protected onLoadedOnIsland(): void;
    protected onTickEnd(): void;
}
