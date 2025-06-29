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
import type Player from "@wayward/game/game/entity/player/Player";
import type { IIslandPort } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import Input from "@wayward/game/ui/component/Input";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import CanvasDialog from "@wayward/game/ui/screen/screens/game/component/CanvasDialog";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
export interface IIslandDialogOptions {
    allowRename?: boolean;
}
export declare enum IslandsDialogClasses {
    Main = "game-dialog-islands",
    Drawer = "game-dialog-islands-drawer",
    IslandTitle = "game-dialog-islands-title",
    Info = "game-dialog-islands-info",
    Ports = "game-dialog-islands-ports",
    Port = "game-dialog-islands-port",
    PortTitle = "game-dialog-islands-port-title",
    PortButton = "game-dialog-islands-port-button",
    NoPort = "game-dialog-islands-port-none",
    PortButtonSwimming = "game-dialog-islands-port-button-swimming",
    ConstructLighthousesHint = "game-dialog-islands-construct-lighthouses-hint"
}
export interface IIslandsDialogPort {
    port?: IIslandPort;
    wrapper: Component;
    button: Button;
}
export default abstract class IslandsDialog extends CanvasDialog {
    private readonly options;
    private hoveredIslandPosition?;
    protected selectedIslandPosition: Vector2;
    protected lastSailAwayCheckPosition?: Vector2;
    readonly title: Input;
    readonly info: Component<HTMLElement>;
    readonly portsWrapper: Component<HTMLElement>;
    readonly ports: IIslandsDialogPort[];
    constructor(dialogId: DialogId, options: IIslandDialogOptions);
    protected get island(): Island | undefined;
    selectIsland(x: number, y: number): void;
    protected onLoad(initial: boolean): Promise<void>;
    protected onIslandRenamed(island: Island): void;
    protected onPortsChanged(island: Island): void;
    protected isPlayerSwimming(player: Player, swimming: boolean): boolean | undefined;
    protected onMouseMove(): void;
    protected onCanvasClick(): void;
    protected onAccept(): boolean;
    protected onLeft(): boolean;
    protected onRight(): boolean;
    protected onUp(): boolean;
    protected onDown(): boolean;
    protected onSubmit(): boolean;
    private moveSelectedIsland;
    protected onChangedSelectedIsland(animate?: boolean): void;
    protected shouldDisplayConstructLighthousesHint(): boolean;
    private initializePortComponent;
    protected abstract createExecuteButton(port?: IIslandPort): Button | undefined;
    protected resetViewZoom(): void;
    protected resetViewOffset(islandPosition?: IVector2): void;
    protected canHideDrawer(): boolean;
    protected draw(): void;
    private drawBackground;
    private drawSpriteAtIslandPosition;
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
