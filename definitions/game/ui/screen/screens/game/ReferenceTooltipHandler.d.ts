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
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import type { Reference } from "game/reference/IReferenceManager";
import InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import type { InspectionTooltipHints } from "ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "ui/screen/screens/game/InspectionsTooltipHandler";
import type Tooltip from "ui/tooltip/Tooltip";
export default class ReferenceTooltipHandler extends InspectionsTooltipHandler<ReferenceInspectionsList> {
    private readonly context;
    private readonly reference;
    private readonly initializer?;
    constructor(context: InfoProviderContext, reference: Reference, initializer?: ((tooltip: Tooltip, handler: ReferenceTooltipHandler) => any) | undefined);
    initializeTooltip(tooltip: Tooltip): Promise<void>;
    protected initializeInspections(): ReferenceInspectionsList;
    protected initializeHints(hints: InspectionTooltipHints): void;
}
export declare class ReferenceInspectionsList extends InspectionsList<ReferenceInspectionsHandler> {
    private readonly reference;
    constructor(context: InfoProviderContext, reference: Reference);
    isValid(): boolean;
    protected initializeInspections(): ReferenceInspectionsHandler;
    protected onInspect(): boolean;
}
export declare class ReferenceInspectionsHandler extends InspectionsHandler {
    constructor(context: InfoProviderContext, ...inspections: Array<Inspection<any>>);
}
