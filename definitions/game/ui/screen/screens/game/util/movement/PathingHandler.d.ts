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
import type { WalkTo } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { FindPathRange } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import InteractionHandler from "@wayward/game/ui/screen/screens/game/util/movement/InteractionHandler";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export default class PathingHandler extends InteractionHandler {
    private preview;
    private forcedPathPreview;
    private overlays;
    private readonly overlayType;
    private canResetTarget;
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
    protected onWalkToChange(player: Player, walkTo: WalkTo | undefined): void;
    private resetToMouse;
    /**
     * Removes the overlay from the tiles and updates the game view
     * @returns True if the overlays were reset
     */
    private resetOverlays;
    /**
     * Finds a path to a target and then updates the overlay to that path (if it was valid)
     */
    updatePreview(target: IVector2, forced?: boolean, range?: FindPathRange): IVector2[] | undefined;
    forcePreviewPath(path: IVector2[]): void;
    /**
     * Updates the overlay to the given path
     */
    private updateOverlay;
    /**
     * Returns the overlay method to use
     */
    private getOverlayRenderMethod;
}
