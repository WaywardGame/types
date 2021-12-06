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
import type { Events, IEventEmitter } from "event/EventEmitter";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import type { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import type InspectionsHandler from "game/inspection/InspectionsHandler";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import type HashSet from "utilities/collection/set/HashSet";
export interface ITileInspectionsEvents extends Events<Component> {
    refreshed(isValid?: boolean): any;
    updateInspectTypeFilter(): any;
    updateDisplayLevel(): any;
}
export default abstract class InspectionsList<INSPECTIONS_HANDLER extends InspectionsHandler = InspectionsHandler> extends Component {
    protected readonly context: InfoProviderContext;
    readonly event: IEventEmitter<this, ITileInspectionsEvents>;
    private readonly paragraphInspectionsInvalid;
    private inspectTypeFilter;
    protected inspectionsHandler?: InspectionsHandler;
    protected inspectionsHandlerUpdatedInspectionsCallback?: (_: any, inspectType: InspectType, inspections: HashSet<Inspection<any>>, oldInspections: HashSet<Inspection<any>> | undefined) => Promise<void>;
    private displayLevel;
    private refreshingId?;
    private readonly inspectTypeWrappers;
    constructor(context: InfoProviderContext);
    setInspectTypeFilter(filter?: (inspectType: InspectType) => boolean): this;
    refreshInspectTypeFilter(): this;
    deregister(): void;
    setDisplayLevel(displayLevel: InfoDisplayLevel): this;
    refresh(): Promise<this | undefined>;
    protected abstract initializeInspections(): INSPECTIONS_HANDLER | undefined;
    isValid?(): boolean;
    protected getInvalidTranslation?(): TranslationGenerator | undefined;
    private deregisterInspectionsHandler;
    private refreshInspectionsOfType;
    private initializeTooltipSection;
}
