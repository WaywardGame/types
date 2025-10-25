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
import Text, { Paragraph } from "@wayward/game/ui/component/Text";
import type InspectionsList from "@wayward/game/ui/screen/screens/game/component/InspectionsList";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type Vector2 from "@wayward/game/utilities/math/Vector2";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
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
    /**
     * Initializes tooltips
     * @returns True if the tooltip was initialized. False if it was removed or replaced before so.
     */
    initializeTooltip(tooltip: Tooltip, ...args: TOOLTIP_ARGS): Promise<boolean>;
    remove(tooltip?: IInspectionsTooltipHandlerCurrent<INSPECTIONS_LIST, TOOLTIP_ARGS> | undefined): void;
    onInitInspections(handler: (inspections: INSPECTIONS_LIST) => any): void;
    protected abstract initializeInspections(...args: TOOLTIP_ARGS): INSPECTIONS_LIST | undefined;
    protected onUpdateTooltipPosition(position: Vector2): void;
    protected getTooltipClass(): string[];
    protected initializeHints(hints: InspectionTooltipHints, ...args: TOOLTIP_ARGS): void;
    protected updateTooltipPosition(forceUpdate?: boolean): void;
    private refreshTooltipExtraInfoAndPosition;
    protected onMoveToIsland(): void;
}
export declare class InspectionTooltipHints extends Paragraph {
    constructor();
    private _showExtraInfo?;
    get showExtraInfo(): Text;
    private _inspectInDialog?;
    get inspectInDialog(): Text;
    private _stackItems?;
    get stackItems(): Text;
}
