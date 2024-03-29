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
import EventEmitter from "event/EventEmitter";
import type { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import type { ResolvedInspection } from "game/inspection/InspectionTypeMap";
import HashSet from "utilities/collection/set/HashSet";
export interface IInspectionsHandlerEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default abstract class InspectionsHandler extends EventEmitter.Host<IInspectionsHandlerEvents> {
    protected readonly context: InfoProviderContext;
    protected readonly inspectionsMap: Map<InspectType, HashSet<Inspection<any>>>;
    static makeInspectionsSet(...values: Array<IterableOr<Inspection<any> | undefined>>): HashSet<Inspection<any>>;
    constructor(context: InfoProviderContext, inspectionsMap?: Map<InspectType, HashSet<Inspection<any>>>);
    get<TYPE extends InspectType>(inspectType: InspectType): HashSet<ResolvedInspection<TYPE>> | undefined;
    set(inspectType: InspectType, inspections: HashSet<Inspection<any>>): Map<InspectType, HashSet<Inspection<any>>>;
    [Symbol.iterator](): IterableIterator<[InspectType, HashSet<Inspection<any>>]>;
    types(): IterableIterator<InspectType>;
    all(): IterableIterator<[InspectType, HashSet<Inspection<any>>]>;
    getInspectTypes(): InspectType[];
    register(): void;
    deregister(): void;
    protected getInspections?(inspectType: InspectType): HashSet<Inspection<any>>;
    protected createInspectionSet(...values: Array<IterableOr<Inspection<any> | undefined>>): HashSet<Inspection<any>>;
    protected updateInspections(...inspectTypes: InspectType[]): void;
    protected updateInspectionsForType(inspectType: InspectType, inspections: HashSet<Inspection<any>>): void;
}
