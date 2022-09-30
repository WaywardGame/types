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
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import type { InspectionTooltipHints } from "ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "ui/screen/screens/game/InspectionsTooltipHandler";
import type { ActionSlot } from "ui/screen/screens/game/static/ActionBar";
import type HashSet from "utilities/collection/set/HashSet";
export declare enum ActionSlotTooltipClasses {
    Hints = "game-action-slot-tooltip-hints"
}
export default class ActionSlotTooltipHandler extends InspectionsTooltipHandler<ActionSlotInspectionsList, [slot: ActionSlot]> {
    protected initializeInspections(slot: ActionSlot): ActionSlotInspectionsList;
    protected initializeHints(hints: InspectionTooltipHints, slot: ActionSlot): void;
    private onSlotChanged;
}
declare class ActionSlotInspectionsList extends InspectionsList<ActionSlotInspectionsHandler> {
    readonly slot: ActionSlot;
    constructor(slot: ActionSlot, context: InfoProviderContext);
    isValid(): boolean;
    protected initializeInspections(): ActionSlotInspectionsHandler;
}
declare class ActionSlotInspectionsHandler extends InspectionsHandler {
    private readonly slot;
    constructor(slot: ActionSlot, context: InfoProviderContext);
    getInspectTypes(): InspectType[];
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
}
export {};
