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
import type { IStatChangeInfo } from "@wayward/game/game/entity/IEntity";
import type { StatChangeTimerFactory } from "@wayward/game/game/entity/StatFactory";
export declare enum Stat {
    Health = 0,
    Stamina = 1,
    Hunger = 2,
    Thirst = 3,
    Weight = 4,
    Attack = 5,
    /**
     * The base defense of the player.
     * UI only. Does not exist on `Player` instances.
     */
    Defense = 6,
    /**
     * A combination of `Stat.Hunger` + `Stat.Thirst`
     * Does not exist on `Player` instances. Used for magical items.
     */
    Metabolism = 7,
    /**
     * Used to calculate the max weight & max health of the player.
     */
    Strength = 8,
    /**
     * UI only. Does not exist on `Player` instances.
     */
    Luck = 9,
    /**
     * How much this human and their inventory is affected by temperature
     */
    InsulationHeat = 10,
    InsulationCold = 11,
    /**
     * Used for chicken eggs and goat milk
     */
    Produce = 12,
    /**
     * Used for tamed animals
     */
    Happiness = 13,
    Tamed = 14,
    Petting = 15,
    Waste = 16,
    Petted = 17,
    Curse = 18,
    Generic = 19,
    AttackDefenseRow = 20,
    Dexterity = 21,
    /**
     * Used for creatures to stop them despawning until this stat reaches 0.
     */
    DespawnProtection = 22
}
export declare const CORE_STATS: Stat[];
export type IStats = {
    [key in keyof typeof Stat]: IStat;
};
export declare const SYMBOL_STAT_TYPE: unique symbol;
export interface IStatBase {
    readonly [SYMBOL_STAT_TYPE]: Stat;
    readonly type: Stat;
    readonly value: number;
    readonly max: number | undefined;
    /**
     * If set to `true`, when the `value` changes it isn't clamped to the `max`.
     * EG: `max` in this case will usually only be useful visually
     */
    canExceedMax?: true;
    /**
     * The number of turns remaining until the stat changes.
     */
    changeTimer: number | undefined;
    /**
     * The value `changeTimer` will be reset to when it reaches `0`.
     */
    readonly nextChangeTimer: number | undefined;
    /**
     * The amount the value should change by when the `changeTimer` reaches `0`.
     * When not provided, defaults to `1`.
     */
    changeAmount?: number;
    /**
     * The speed the change timer decreases. When `undefined`, `1` is used.
     */
    changeTimerSpeed?: number;
    /**
     * A bonus value added to be added to `max` and `value`.
     */
    bonus?: number;
}
export interface IStatMax extends IStatBase {
    readonly max: number;
}
export interface IStatChanging extends IStatBase {
    changeAmount: number;
    changeTimer: number;
    readonly nextChangeTimer: number;
    changeTimerSpeed?: number;
}
export interface IStatBonus extends IStatBase {
    bonus: number;
}
export type IStat = IStatBase | IStatMax | IStatChanging | IStatBonus;
export declare enum StatDisplayType {
    /**
     * Do not display this stat
     */
    None = 0,
    /**
     * Allow implementation to decide the display type automatically
     */
    Auto = 1,
    /**
     * Display as an attribute
     */
    Attribute = 2,
    /**
     * Display as a statbar
     */
    Statbar = 3
}
export interface IStatFactory {
    get(): IStat;
}
export interface IStatEvents {
    /**
     * Called when a stat changes, for any reason
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     * @param info An IStatChangeInfo object describing why the change occurred. It will always be passed with a `reason`
     */
    statChanged(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    /**
     * Called when a stat timer changes
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     */
    statTimerChanged(stat: IStat, oldValue?: number): void;
    /**
     * Called when a stat timer will change
     * @param stat An `IStat` object, the stat that will be affected
     * @param changeFactory An object for manipulating how the new stat change timer will be set
     * @returns `false` to cancel the stat timer change, `undefined` otherwise.
     */
    statTimerWillChange(stat: IStat, changeFactory: StatChangeTimerFactory): false | undefined;
    /**
     * Called when a stat timer is removed
     * @param stat An `IStat` object, the stat that was affected
     */
    statTimerRemoved(stat: IStat): any;
    /**
     * Called when a stat's max value changes, for any reason
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     * @param info An `IStatChangeInfo` object describing why the change occurred. It will always be passed with a `reason`
     */
    statMaxChanged(stat: IStatMax, oldValue?: number, info?: IStatChangeInfo): void;
    /**
     * Called when a stat changes, for any reason
     * @param stat An IStat object, the stat that was affected
     * @param oldValue The value that the stat changed from
     * @param info An `IStatChangeInfo` object describing why the change occurred. It will always be passed with a `reason`
     */
    statBonusChanged(stat: IStat, oldValue?: number, info?: IStatChangeInfo): void;
}
