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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import type { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import type InspectionsHandler from "@wayward/game/game/inspection/InspectionsHandler";
import type { ResolvedInspection } from "@wayward/game/game/inspection/InspectionTypeMap";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type HashSet from "@wayward/utilities/collection/set/HashSet";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import { PromiseSequence } from "@wayward/utilities/promise/PromiseSequence";
export interface ITileInspectionsEvents extends Events<Component> {
    refreshed(isValid?: boolean): any;
    updateInspectTypeFilter(): any;
    updateDisplayLevel(): any;
}
export type InspectionsHandlerOf<INSPECTIONS_LIST extends InspectionsList> = INSPECTIONS_LIST extends InspectionsList<infer INSPECTIONS_HANDLER> ? INSPECTIONS_HANDLER : never;
export default abstract class InspectionsList<INSPECTIONS_HANDLER extends InspectionsHandler = InspectionsHandler> extends Component {
    protected readonly context: InfoProviderContext;
    event: IEventEmitter<this, ITileInspectionsEvents>;
    private readonly paragraphInspectionsInvalid;
    private inspectTypeFilter;
    protected inspectionsHandler?: InspectionsHandler;
    protected refreshPromiseSequence: PromiseSequence;
    protected inspectionsHandlerUpdatedInspectionsCallback?: (_: any, inspectType: InspectType, inspections: HashSet<Inspection<any>>, oldInspections: HashSet<Inspection<any>> | undefined) => void;
    private displayLevel;
    private readonly inspectTypeWrappers;
    private readonly previouslyRefreshed;
    constructor(context: InfoProviderContext);
    get<TYPE extends InspectType>(type: TYPE): HashSet<ResolvedInspection<TYPE>> | undefined;
    all(): Iterable<[InspectType, HashSet<Inspection<any>>]>;
    setInspectTypeFilter(filter?: (inspectType: InspectType) => boolean): this;
    refreshInspectTypeFilter(): this;
    deregister(): Promise<void>;
    setDisplayLevel(displayLevel: InfoDisplayLevel): this;
    refresh(): this;
    private refreshAsync;
    protected abstract initializeInspections(): INSPECTIONS_HANDLER | undefined;
    isValid?(): boolean;
    protected getInvalidTranslation?(): TranslationGenerator | undefined;
    private deregisterInspectionsHandler;
    private refreshInspectionsOfType;
    private _refreshInspectionsOfType;
    private initializeTooltipSection;
}
