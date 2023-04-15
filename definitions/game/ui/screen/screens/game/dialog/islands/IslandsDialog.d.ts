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
import type Island from "game/island/Island";
import Component from "ui/component/Component";
import IslandPortsDropdown from "ui/component/dropdown/IslandPortsDropdown";
import Input from "ui/component/Input";
import { LabelledRow } from "ui/component/LabelledRow";
import CanvasDialog from "ui/screen/screens/game/component/CanvasDialog";
import type { DialogId } from "ui/screen/screens/game/Dialogs";
import type { IVector2 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
export interface IIslandDialogOptions {
    allowRename?: boolean;
}
export default abstract class IslandsDialog extends CanvasDialog {
    private readonly options;
    private hoveredIslandPosition?;
    protected selectedIslandPosition: Vector2;
    protected lastSailAwayCheckPosition?: Vector2;
    readonly title: Input;
    readonly info: Component<HTMLElement>;
    protected readonly portDropdown: IslandPortsDropdown;
    protected readonly portDropdownLabelContainer: LabelledRow;
    constructor(dialogId: DialogId, options: IIslandDialogOptions);
    protected get island(): Island | undefined;
    private addMouseMoveListener;
    private removeMouseMoveListener;
    protected onMouseMoveWhileOver(): void;
    selectIsland(x: number, y: number): void;
    protected onLoad(initial: boolean): Promise<void>;
    protected onIslandRenamed(island: Island): void;
    protected onPortsChanged(island: Island): void;
    protected onMouseMove(): void;
    protected onCanvasClick(): void;
    protected onAccept(): boolean;
    protected onLeft(): boolean;
    protected onRight(): boolean;
    protected onUp(): boolean;
    protected onDown(): boolean;
    private moveSelectedIsland;
    protected onChangedSelectedIsland(animate?: boolean): void;
    protected resetViewZoom(): void;
    protected resetViewOffset(islandPosition?: IVector2): void;
    protected canHideDrawer(): boolean;
    protected draw(): void;
    private drawBackground;
    private drawFogOfWar;
    protected abstract shouldDisplayIsland(x: number, y: number, island?: Island): boolean;
    private drawIsland;
    protected abstract isSelectedIslandValid(): boolean;
    private travelDotHead?;
    private drawTravelDots;
    private dotGenerationSpeed;
    private generateTravelDots;
    private mapBackgroundImage?;
    private getMapBackground;
    private getViewportBounds;
    private offset;
    private getIslandPosition;
    private getIslandOffset;
    private handleInvalidSprite;
    private getHoveredIslandPosition;
}
