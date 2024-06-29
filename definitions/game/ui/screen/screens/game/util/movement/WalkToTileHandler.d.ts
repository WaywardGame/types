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
import type Player from "@wayward/game/game/entity/player/Player";
import type Tile from "@wayward/game/game/tile/Tile";
import type Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export default class WalkToTileHandler {
    private preview;
    private forcedPathPreview;
    private overlays;
    private readonly overlayType;
    private canResetTarget;
    private readonly surfaceRef;
    get surface(): Component;
    constructor(surface: Component);
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
    onHoldMoveToTile(api: IBindHandlerApi): boolean;
    protected onCancelMoveToTile(_api: IBindHandlerApi): boolean;
    protected onHoldMoveToTilePreview(api: IBindHandlerApi): boolean;
    protected onReleaseMoveToTilePreview(): void;
    protected onPostMove(player: Player, fromTile: Tile, toTile: Tile): void;
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
    updatePreview(target: IVector2, forced?: boolean): boolean;
    /**
     * Updates the overlay to the given path
     */
    private updateOverlay;
    /**
     * Returns the overlay method to use
     */
    private getOverlayRenderMethod;
}
