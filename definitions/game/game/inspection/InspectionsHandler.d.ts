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
import EventEmitter from "event/EventEmitter";
import type { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import HashSet from "utilities/collection/set/HashSet";
export interface IInspectionsHandlerEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default abstract class InspectionsHandler extends EventEmitter.Host<IInspectionsHandlerEvents> {
    protected readonly context: InfoProviderContext;
    protected readonly inspectionsMap: Map<InspectType, HashSet<Inspection<any>>>;
    static makeInspectionsSet(...values: Array<IterableOr<Inspection<any> | undefined>>): HashSet<Inspection<any>>;
    constructor(context: InfoProviderContext, inspectionsMap?: Map<InspectType, HashSet<Inspection<any>>>);
    get<TYPE extends InspectType>(inspectType: InspectType): HashSet<InstanceOf<{
        12: typeof import("./inspections/ActionInspection").default;
        14: typeof import("./inspections/CorpseInspection").default;
        15: typeof import("./inspections/CorpsesInspection").default;
        3: typeof import("./inspections/CreatureInspection").default;
        10: typeof import("./inspections/ItemInspection").default;
        4: typeof import("./inspections/DoodadInspection").default;
        7: typeof import("./inspections/EquipSlotInspection").default;
        6: typeof import("./inspections/PlayerInspection").default;
        21: typeof import("./inspections/IslandInspection").default;
        8: typeof import("./inspections/ItemInspection").default;
        13: typeof import("./inspections/ItemsInspection").default;
        11: typeof import("./inspections/ItemInspection").default;
        19: typeof import("./inspections/MilestoneInspection").default;
        2: typeof import("./inspections/NPCInspection").default;
        1: typeof import("./inspections/PlayerInspection").default;
        9: typeof import("./inspections/RecipeInspection").default;
        0: typeof import("./inspections/SelfInspection").default;
        18: typeof import("./inspections/SkillInspection").default;
        20: typeof import("./inspections/StatInspection").default;
        17: typeof import("./inspections/TileInspection").default;
        5: typeof import("./inspections/TileEventInspection").default;
        16: typeof import("./inspections/TileEventInspection").default.Minors;
    }[TYPE]>> | undefined;
    set(inspectType: InspectType, inspections: HashSet<Inspection<any>>): Map<InspectType, HashSet<Inspection<any>>>;
    [Symbol.iterator](): IterableIterator<[InspectType, HashSet<Inspection<any>>]>;
    types(): import("@wayward/goodstream").default<InspectType>;
    getInspectTypes(): InspectType[];
    register(): void;
    deregister(): void;
    protected getInspections?(inspectType: InspectType): HashSet<Inspection<any>>;
    protected createInspectionSet(...values: Array<IterableOr<Inspection<any> | undefined>>): HashSet<Inspection<any>>;
    protected updateInspections(...inspectTypes: InspectType[]): void;
    protected updateInspectionsForType(inspectType: InspectType, inspections: HashSet<Inspection<any>>): void;
}
