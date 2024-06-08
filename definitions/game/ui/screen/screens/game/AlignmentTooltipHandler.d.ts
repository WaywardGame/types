/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import InspectionsHandler from "@wayward/game/game/inspection/InspectionsHandler";
import InspectionsTooltipHandler from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsList from "@wayward/game/ui/screen/screens/game/component/InspectionsList";
import type HashSet from "@wayward/utilities/collection/set/HashSet";
export declare enum AlignmentTooltipClasses {
    InspectionsList = "tooltip-alignment-inspections-list"
}
export default class AlignmentTooltipHandler extends InspectionsTooltipHandler<AlignmentInspectionsList> {
    protected initializeInspections(): AlignmentInspectionsList;
}
export declare class AlignmentInspectionsList extends InspectionsList<AlignmentInspectionsHandler> {
    constructor(context: InfoProviderContext);
    isValid(): boolean;
    protected initializeInspections(): AlignmentInspectionsHandler;
    protected onInspect(): boolean;
}
declare class AlignmentInspectionsHandler extends InspectionsHandler {
    constructor(context: InfoProviderContext);
    getInspectTypes(): InspectType[];
    protected getInspections(): HashSet<Inspection<any>>;
}
export {};
