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
import Text from "ui/component/Text";
import type InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import type Tooltip from "ui/tooltip/Tooltip";
import type Vector2 from "utilities/math/Vector2";
export default abstract class InspectionsTooltipHandler<INSPECTIONS_LIST extends InspectionsList> {
    protected current: {
        initialized: boolean;
        tooltip: Tooltip;
        inspectionsList: INSPECTIONS_LIST;
        informationGuide?: Text;
        showExtraInfo?: Text;
    } | undefined;
    private lastMousePosition?;
    initializeTooltip(tooltip: Tooltip): Promise<void>;
    remove(): void;
    protected abstract initializeInspections(): INSPECTIONS_LIST | undefined;
    protected onUpdateTooltipPosition(position: Vector2): void;
    protected getTooltipClass(): string[];
    protected updateTooltipPosition(position?: Vector2): void;
    private refreshTooltipExtraInfoAndPosition;
    protected onMoveToIsland(): void;
}
