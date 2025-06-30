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
import TileInspectionsList from "@wayward/game/ui/screen/screens/game/component/TileInspectionsList";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import type Vector2 from "@wayward/game/utilities/math/Vector2";
export default class WorldTooltipHandler extends InspectionsTooltipHandler<TileInspectionsList> {
    private currentInspectionTile;
    private currentOverlayInfo;
    private nextInspectionTile;
    private lastCursorTile;
    private pendingSetInspectionTileTimeout;
    private lastSetInspectionTileTime;
    protected initializeHints(hints: InspectionTooltipHints): void;
    protected getTooltipClass(): string[];
    protected initializeInspections(): TileInspectionsList | undefined;
    protected onUpdateTooltipPosition(position: Vector2): void;
    private setInspectionTile;
    private renderWorldCursor;
    protected updatePosition(): void;
}
