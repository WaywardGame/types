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
import { InfoProviderContext } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import { Reference } from "game/ReferenceManager";
import InspectionsList from "newui/screen/screens/game/component/InspectionsList";
import InspectionsTooltipHandler from "newui/screen/screens/game/InspectionsTooltipHandler";
export default class ReferenceTooltipHandler extends InspectionsTooltipHandler<ReferenceInspectionsList> {
    private readonly reference;
    private readonly args;
    constructor(reference: Reference, ...args: any[]);
    protected initializeInspections(): ReferenceInspectionsList;
}
export declare class ReferenceInspectionsList extends InspectionsList<ReferenceInspectionsHandler> {
    private readonly reference;
    private readonly args;
    private readonly context;
    constructor(reference: Reference, ...args: any[]);
    isValid(): boolean;
    protected initializeInspections(): ReferenceInspectionsHandler;
    protected onInspect(): boolean;
}
export declare class ReferenceInspectionsHandler extends InspectionsHandler {
    constructor(context: InfoProviderContext, ...inspections: Array<Inspection<any>>);
}