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
import Island from "game/island/Island";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import Input from "ui/component/Input";
import CanvasDialog from "ui/screen/screens/game/component/CanvasDialog";
import type { IVector2 } from "utilities/math/IVector";
export default class IslandsDialog extends CanvasDialog {
    private hoveredIslandPosition?;
    private selectedIslandPosition;
    private lastSailAwayCheckPosition?;
    readonly title: Input;
    readonly info: Component<HTMLElement>;
    readonly sailButton: Button;
    closeOnTravel: boolean;
    constructor();
    protected initializeSettingsPanel(panel: Component): void;
    private addMouseMoveListener;
    private removeMouseMoveListener;
    selectIsland(x: number, y: number): void;
    protected onLoad(): Promise<void>;
    protected sail(): void;
    protected onIslandRenamed(island: Island): void;
    protected preMoveToIsland(): void;
    protected onLoadedOnIsland(): void;
    protected onMouseMove(): void;
    protected onCanvasClick(): void;
    protected onAccept(): boolean;
    protected onSubmit(): boolean;
    protected onLeft(): boolean;
    protected onRight(): boolean;
    protected onUp(): boolean;
    protected onDown(): boolean;
    private moveSelectedIsland;
    private onChangedSelectedIsland;
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
    private canSailAway;
}
