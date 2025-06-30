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
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
export default abstract class GenericOverlay<OVERLAY extends IOverlayInfo = IOverlayInfo, PARAMS extends any[] = []> {
    protected readonly overlay: Map<Tile, OVERLAY>;
    protected alpha: number;
    constructor(hideByDefault?: boolean);
    get isHidden(): boolean;
    getDefaultAlpha(): number;
    show(): void;
    hide(): void;
    addOrUpdate(tile: Tile, ...params: PARAMS): void;
    protected abstract generateOverlayInfo(tile: Tile, existingOverlay: OVERLAY | undefined, ...params: PARAMS): OVERLAY | undefined;
    protected updateOverlayAlpha(tile: Tile, overlay: OVERLAY, alpha: number): OVERLAY | undefined;
    clear(): void;
    private updateAlpha;
}
