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
import EventEmitter from "event/EventEmitter";
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import HashSet from "utilities/collection/set/HashSet";
export interface IInspectionsHandlerEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default abstract class InspectionsHandler extends EventEmitter.Host<IInspectionsHandlerEvents> {
    protected readonly context: InfoProviderContext;
    protected readonly inspectionsMap: Map<InspectType, HashSet<Inspection<any>>>;
    static makeInspectionsSet(values: IterableOr<Inspection<any>>): HashSet<Inspection<any>>;
    constructor(context: InfoProviderContext, inspectionsMap?: Map<InspectType, HashSet<Inspection<any>>>);
    get(inspectType: InspectType): HashSet<Inspection<any>> | undefined;
    set(inspectType: InspectType, inspections: HashSet<Inspection<any>>): Map<InspectType, HashSet<Inspection<any>>>;
    [Symbol.iterator](): IterableIterator<[InspectType, HashSet<Inspection<any>>]>;
    types(): import("@wayward/goodstream/Stream").default<InspectType>;
    register(): void;
    deregister(): void;
    protected getInspections?(inspectType: InspectType): HashSet<Inspection<any>>;
    protected updateInspections(...inspectTypes: InspectType[]): void;
    protected updateInspectionsForType(inspectType: InspectType, inspections: HashSet<Inspection<any>>): void;
}
