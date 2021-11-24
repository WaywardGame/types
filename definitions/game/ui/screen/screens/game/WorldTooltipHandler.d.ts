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
import TileInspectionsList from "ui/screen/screens/game/component/TileInspectionsList";
import InspectionsTooltipHandler from "ui/screen/screens/game/InspectionsTooltipHandler";
import type Vector2 from "utilities/math/Vector2";
export default class WorldTooltipHandler extends InspectionsTooltipHandler<TileInspectionsList> {
    protected getTooltipClass(): string[];
    protected initializeInspections(): TileInspectionsList | undefined;
    protected onUpdateTooltipPosition(position: Vector2): void;
    protected updatePosition(): void;
}
