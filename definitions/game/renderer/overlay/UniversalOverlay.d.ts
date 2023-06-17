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
import type { IOverlayInfo } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
import GenericOverlay from "renderer/overlay/GenericOverlay";
import Vector2 from "utilities/math/Vector2";
export default abstract class UniversalOverlay<OVERLAY extends IOverlayInfo = IOverlayInfo> extends GenericOverlay<OVERLAY> {
    private readonly scheduledInvalidations;
    get minVector(): Vector2;
    get maxVector(): Vector2;
    register(): void;
    deregister(): void;
    protected onReset(): void;
    protected onPreMoveToIsland(): void;
    protected onLoadOnIsland(): void;
    protected onPostFieldOfView(): void;
    protected onChangeZOrIsland(): void;
    protected onTickEnd(): void;
    protected invalidate(tile: Tile, invalidateRange?: number): void;
    clear(): void;
    refresh(): void;
}
