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
import type { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import type { ResolvedInspection } from "@wayward/game/game/inspection/InspectionTypeMap";
import HashSet from "@wayward/utilities/collection/set/HashSet";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IInspectionsHandlerEvents extends IEventSubscriberEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default abstract class InspectionsHandler extends EventEmitter.Host<IInspectionsHandlerEvents> {
    protected readonly context: InfoProviderContext;
    protected readonly inspectionsMap: Map<InspectType, HashSet<Inspection<any>>>;
    private static readonly registeredInspections;
    static cleanupRegisteredInspections(): void;
    static makeInspectionsSet(...values: Array<IterableOr<Inspection<any> | undefined>>): HashSet<Inspection<any>>;
    protected registered: boolean;
    constructor(context: InfoProviderContext, inspectionsMap?: Map<InspectType, HashSet<Inspection<any>>>);
    get<TYPE extends InspectType>(inspectType: InspectType): HashSet<ResolvedInspection<TYPE>> | undefined;
    set(inspectType: InspectType, inspections: HashSet<Inspection<any>>): Map<InspectType, HashSet<Inspection<any>>>;
    [Symbol.iterator](): IteratorObject<[InspectType, HashSet<Inspection<any>>]>;
    types(): IteratorObject<InspectType>;
    all(): IteratorObject<[InspectType, HashSet<Inspection<any>>]>;
    getInspectTypes(): InspectType[];
    register(): void;
    deregister(isBeingRemoved?: boolean): void;
    protected getInspections?(inspectType: InspectType): HashSet<Inspection<any>>;
    protected createInspectionSet(...values: Array<IterableOr<Inspection<any> | undefined>>): HashSet<Inspection<any>>;
    protected updateInspections(...inspectTypes: InspectType[]): void;
    protected updateInspectionsForType(inspectType: InspectType, inspections: HashSet<Inspection<any>>): void;
}
