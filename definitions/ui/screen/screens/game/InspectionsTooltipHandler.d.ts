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
import { ITooltip } from "ui/component/IComponent";
import InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import Vector2 from "utilities/math/Vector2";
export default abstract class InspectionsTooltipHandler<INSPECTIONS_LIST extends InspectionsList> {
    protected inspectionsList?: INSPECTIONS_LIST;
    private lastMousePosition?;
    private tooltip?;
    private informationGuide;
    private showExtraInfo;
    initializeTooltip(tooltip: ITooltip): ITooltip | undefined;
    protected abstract initializeInspections(): INSPECTIONS_LIST | undefined;
    protected onUpdateTooltipPosition(position: Vector2): void;
    protected getTooltipClass(): string[];
    protected updateTooltipPosition(position?: Vector2): void;
    private refreshTooltipExtraInfoAndPosition;
}
