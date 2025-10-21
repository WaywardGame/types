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
import type Entity from "@wayward/game/game/entity/Entity";
export declare enum DataComponentType {
    None = 0,
    CurseSleeplessness = 1,
    CurseCumulativeEvilCrafting = 2,
    CurseCumulativeKilling = 3,
    CurseHighestAttack = 4,
    CurseHighestDefense = 5,
    CurseMilestoneObliviousness = 6
}
interface DataComponent<T, DEFAULT_VALUE extends T | undefined = undefined> {
    readonly type: DataComponentType;
    has(entity: Entity): boolean;
    get(entity: Entity): T | DEFAULT_VALUE;
    compute(entity: Entity, compute: (defaultValue: DEFAULT_VALUE) => T): T;
    set(entity: Entity, value: T): void;
    modify(entity: Entity, modify: (current: T | DEFAULT_VALUE) => T): T;
    remove(entity: Entity): void;
}
declare function DataComponent<T>(type: DataComponentType, defaultValue: T): DataComponent<T, T>;
declare function DataComponent<T>(type: DataComponentType, defaultValue?: T): DataComponent<T>;
declare namespace DataComponent {
    interface Live<T> {
        get(entity: Entity): T;
        update(entity: Entity): void;
    }
    function Live<T>(type: DataComponentType, compute: (entity: Entity, current: T | undefined) => T): Live<T>;
}
export default DataComponent;
