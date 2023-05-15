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
import type { IHasImagePath } from "game/IObject";
import type EntityWithStats from "game/entity/EntityWithStats";
import type { IStat, IStatBase, StatDisplayType } from "game/entity/IStats";
import type { Reference } from "game/reference/IReferenceManager";
import type { IModdable } from "mod/ModRegistry";
import type Component from "ui/component/Component";
import type Tooltip from "ui/tooltip/Tooltip";
import type { IStringSection } from "utilities/string/Interpolator";
export interface IStatDisplayDescription extends IModdable, IHasImagePath<string | ((entity: EntityWithStats, stat: IStat) => string)> {
    imagePath?: string | ((entity: EntityWithStats, stat: IStat) => string);
    /**
     * The CSS variable to use for the stat bar color
     * Defaults to white
     */
    color?: string | ((entity: EntityWithStats, stat: IStat) => string);
    /**
     * The CSS variable to use for the stat bar color in RGB format
     * Defaults to white
     */
    rgbColor?: string | ((entity: EntityWithStats, stat: IStat) => string);
    /**
     * The CSS variable to use for the background of the stat bar
     * Defaults to black
     */
    darkColor?: string | ((entity: EntityWithStats, stat: IStat) => string);
    /**
     * Defaults to `StatDisplayType.Auto`
     */
    displayType?: StatDisplayType;
    /**
     * For the order this stat displays in. Smaller numbers appear higher in the list.
     *
     * Not providing `displayPriority` uses `100`.
     */
    displayOrder?: number;
    /**
     * Handlers for when the stat changes. Called when the stat changes & when the stat max changes.
     */
    onChange?: Array<(statElement: Component, entity: EntityWithStats, stat: IStat, oldValue?: number) => void>;
    /**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    getFormatted?(entity: EntityWithStats, stat?: IStat): IStringSection[];
    /**
     * A function that will initialize a tooltip for this stat element, or a reference to show a tooltip for
     */
    tooltip: Reference | ((tooltip: Tooltip, entity: EntityWithStats, stat: IStat) => any);
    subscribeCalculateEquipmentStats?: true;
}
export declare const STAT_DEFAULT_DISPLAY_ORDER = 100;
export interface IStatInfo extends Partial<IStatBase> {
    value: number;
    percent: number;
    oldValue?: number;
}
/**
 * Returns a `IStatDescription["onChange"]` handler that will check a predicate and run the handler with the result of that predicate.
 * @param predicate A function that takes an `IStatInfo` object and returns whether it "matches".
 * @param handler A function that takes whether the info matches, the `statElement`, the entity, and the `IStatInfo` object and "handles" it.
 */
export declare function when(predicate: (info: IStatInfo, entity: EntityWithStats) => boolean, handler: (matched: boolean, statElement: Component, entity: EntityWithStats, info: IStatInfo) => any): (statElement: Component, entity: EntityWithStats, stat: IStat, oldValue?: number) => void;
/**
 * Returns a `when()` handler that will toggle classes on a `statElement` based on whether the `predicate` matched.
 */
export declare function toggleClasses(...classes: string[]): (matched: boolean, statElement: Component) => void;
/**
 * Returns a `when()` handler that will discover a stat when the `predicate` matches.
 */
export declare function discover(matched: boolean, statElement: Component, entity: EntityWithStats, stat: IStatInfo): void;
/**
 * Shakes the stat element if `shouldShake` is true, otherwise removes the `shake` class.
 *
 * When adding the `shake` class, removes it after 250 ms.
 */
export declare function shake(shouldShake: boolean, statElement: Component): Promise<void>;
