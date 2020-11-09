/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IStat } from "entity/IStats";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import Component from "newui/component/Component";
import { IBindHandlerApi } from "newui/input/Bind";
import { ITile } from "tile/ITerrain";
import { IVector2 } from "utilities/math/IVector";
export interface IWalkToTileHandlerEvents {
    /**
     * Called when calculating the movement penalty of a tile.
     * @param penalty The current penalty of the tile
     * @param tile The tile to get the movement penalty of
     */
    getTilePenalty(penalty: number, tile: ITile): number;
}
export default class WalkToTileHandler extends EventEmitter.Host<IWalkToTileHandlerEvents> {
    private readonly gameScreen;
    private previewTarget;
    private previewPath;
    private overlays;
    private readonly overlayType;
    private canResetTarget;
    constructor(gameScreen: Component);
    register(): void;
    deregister(): void;
    stopMovement(): void;
    /**
     * Event handler for when the movement completes
     */
    onMoveComplete(): void;
    /**
     * Resets the handler, removing any intent, path, and target.
     * @param target Resets the overlays to this target
     * @param clearWalkPath Resets the walk along path
     */
    reset(target?: IVector2, clearWalkPath?: boolean): void;
    protected onMoveToTile(api: IBindHandlerApi): boolean;
    protected onHoldMoveToTile(api: IBindHandlerApi): boolean;
    protected onCancelMoveToTile(_api: IBindHandlerApi): boolean;
    protected onHoldMoveToTilePreview(api: IBindHandlerApi): boolean;
    protected onReleaseMoveToTilePreview(): void;
    protected onStatChanged(player: Player, stat: IStat): void;
    protected onPostMove(player: Player, fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile): void;
    protected onWalkPathChange(player: Player, walkPath: IVector2[] | undefined): void;
    private resetToMouse;
    /**
     * Removes the overlay from the tiles and updates the game view
     * @returns True if the overlays were reset
     */
    private resetOverlays;
    /**
     * Finds a path to a target and then updates the overlay to that path (if it was valid)
     */
    private findPath;
    /**
     * Returns the penalty of the given tile (just how much we *don't* want to step there)
     */
    private getTilePenalty;
    /**
     * Updates the overlay to the given path
     */
    private updateOverlay;
    /**
     * Returns the overlay method to use
     */
    private getOverlayRenderMethod;
}
