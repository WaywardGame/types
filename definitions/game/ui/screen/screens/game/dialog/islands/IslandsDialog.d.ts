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
import Input from "ui/component/Input";
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
    constructor(dialogId: DialogId, options: IIslandDialogOptions);
    private addMouseMoveListener;
    private removeMouseMoveListener;
    protected onMouseMoveWhileOver(): void;
    selectIsland(x: number, y: number): void;
    protected onLoad(): Promise<void>;
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
    private drawIsland;
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
