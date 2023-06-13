/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IIslandPort } from "game/island/IIsland";
import type Island from "game/island/Island";
import Button from "ui/component/Button";
import type Component from "ui/component/Component";
import Bindable from "ui/input/Bindable";
import IslandsDialog from "ui/screen/screens/game/dialog/islands/IslandsDialog";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class IslandsSailDialog extends IslandsDialog {
    closeOnTravel: boolean;
    constructor();
    protected createExecuteButton(port?: IIslandPort): Button;
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onAppend(): void;
    protected initializeSettingsPanel(panel: Component): void;
    protected onChangedSelectedIsland(animate?: boolean): void;
    protected isSelectedIslandValid(): boolean;
    protected shouldDisplayIsland(x: number, y: number, island?: Island): boolean;
    private updateSailButton;
    protected sail(port?: IIslandPort): void;
    protected preMoveToIsland(): void;
    protected onLoadedOnIsland(): void;
    protected onTickEndOrPostMove(): void;
}
