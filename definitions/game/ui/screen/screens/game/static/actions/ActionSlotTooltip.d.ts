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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import InspectionsHandler from "@wayward/game/game/inspection/InspectionsHandler";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsList from "@wayward/game/ui/screen/screens/game/component/InspectionsList";
import { type ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
import type HashSet from "@wayward/utilities/collection/set/HashSet";
export declare enum ActionSlotTooltipClasses {
    Hints = "game-action-slot-tooltip-hints"
}
export default class ActionSlotTooltipHandler extends InspectionsTooltipHandler<ActionSlotInspectionsList, [slot: ActionSlot]> {
    protected initializeInspections(slot: ActionSlot): ActionSlotInspectionsList;
    protected initializeHints(hints: InspectionTooltipHints, slot: ActionSlot): void;
    private onSlotChanged;
}
export declare class ActionSlotInspectionsList extends InspectionsList<ActionSlotInspectionsHandler> {
    readonly slot: ActionSlot;
    constructor(slot: ActionSlot, context: InfoProviderContext);
    isValid(): boolean;
    protected initializeInspections(): ActionSlotInspectionsHandler;
    protected onInspect(): boolean;
}
declare class ActionSlotInspectionsHandler extends InspectionsHandler {
    private readonly slot;
    constructor(slot: ActionSlot, context: InfoProviderContext);
    getInspectTypes(): InspectType[];
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
}
export {};
