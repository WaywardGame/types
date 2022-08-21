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
import EventEmitter from "event/EventEmitter";
import Text, { Paragraph } from "ui/component/Text";
import type InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import type Tooltip from "ui/tooltip/Tooltip";
import type Vector2 from "utilities/math/Vector2";
export interface IInspectionsTooltipHandlerCurrent<INSPECTIONS_LIST extends InspectionsList, TOOLTIP_ARGS extends any[]> {
    initialized: boolean | Promise<any>;
    tooltip: Tooltip;
    inspectionsList: INSPECTIONS_LIST;
    hints?: InspectionTooltipHints;
    args: TOOLTIP_ARGS;
    removed: boolean;
}
export interface IInspectionsTooltipHandlerEvents<INSPECTIONS_LIST extends InspectionsList, TOOLTIP_ARGS extends any[]> {
    init(current: IInspectionsTooltipHandlerCurrent<INSPECTIONS_LIST, TOOLTIP_ARGS>): any;
    remove(): any;
}
export default abstract class InspectionsTooltipHandler<INSPECTIONS_LIST extends InspectionsList, TOOLTIP_ARGS extends any[] = []> extends EventEmitter.Host<IInspectionsTooltipHandlerEvents<INSPECTIONS_LIST, TOOLTIP_ARGS>> {
    protected current: IInspectionsTooltipHandlerCurrent<INSPECTIONS_LIST, TOOLTIP_ARGS> | undefined;
    private lastMousePosition?;
    initializeTooltip(tooltip: Tooltip, ...args: TOOLTIP_ARGS): Promise<void>;
    remove(tooltip?: IInspectionsTooltipHandlerCurrent<INSPECTIONS_LIST, TOOLTIP_ARGS> | undefined): Promise<void>;
    protected abstract initializeInspections(...args: TOOLTIP_ARGS): INSPECTIONS_LIST | undefined;
    protected onUpdateTooltipPosition(position: Vector2): void;
    protected getTooltipClass(): string[];
    protected initializeHints(hints: InspectionTooltipHints, ...args: TOOLTIP_ARGS): void;
    protected updateTooltipPosition(position?: Vector2): void;
    private refreshTooltipExtraInfoAndPosition;
    protected onMoveToIsland(): void;
}
export declare class InspectionTooltipHints extends Paragraph {
    constructor();
    private _showExtraInfo?;
    get showExtraInfo(): Text;
    private _inspectInDialog?;
    get inspectInDialog(): Text;
}
