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
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import InspectionsHandler from "@wayward/game/game/inspection/InspectionsHandler";
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsList from "@wayward/game/ui/screen/screens/game/component/InspectionsList";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export default class ReferenceTooltipHandler extends InspectionsTooltipHandler<ReferenceInspectionsList> {
    private readonly context;
    private readonly reference;
    private readonly initializer?;
    constructor(context: InfoProviderContext, reference: Reference, initializer?: ((tooltip: Tooltip, handler: ReferenceTooltipHandler) => any) | undefined);
    initializeTooltip(tooltip: Tooltip): Promise<boolean>;
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
