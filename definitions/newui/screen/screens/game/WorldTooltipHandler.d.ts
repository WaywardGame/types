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
import TileInspectionsList from "newui/screen/screens/game/component/TileInspectionsList";
import InspectionsTooltipHandler from "newui/screen/screens/game/InspectionsTooltipHandler";
import Vector2 from "utilities/math/Vector2";
export default class WorldTooltipHandler extends InspectionsTooltipHandler<TileInspectionsList> {
    protected getTooltipClass(): string[];
    protected initializeInspections(): TileInspectionsList;
    protected onUpdateTooltipPosition(position: Vector2): void;
    protected updatePosition(): void;
}
