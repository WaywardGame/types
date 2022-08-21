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
import type Entity from "game/entity/Entity";
import type { IStat, StatDisplayType } from "game/entity/IStats";
import type { Reference } from "game/reference/ReferenceManager";
import type { IModdable } from "mod/ModRegistry";
import type Component from "ui/component/Component";
import type Tooltip from "ui/tooltip/Tooltip";
import type { IStringSection } from "utilities/string/Interpolator";
export interface IStatDisplayDescription extends IModdable {
    imagePath?: string | ((entity: Entity, stat: IStat) => string);
    /**
     * The CSS variable to use for the stat bar color
     * Defaults to white
     */
    color?: string | ((entity: Entity, stat: IStat) => string);
    /**
     * The CSS variable to use for the stat bar color in RGB format
     * Defaults to white
     */
    rgbColor?: string | ((entity: Entity, stat: IStat) => string);
    /**
     * The CSS variable to use for the background of the stat bar
     * Defaults to black
     */
    darkColor?: string | ((entity: Entity, stat: IStat) => string);
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
    onChange?: Array<(statElement: Component, entity: Entity, stat: IStat, oldValue?: number) => void>;
    /**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    getFormatted?(entity: Entity, stat?: IStat): IStringSection[];
    /**
     * A function that will initialize a tooltip for this stat element, or a reference to show a tooltip for
     */
    tooltip: Reference | ((tooltip: Tooltip, entity: Entity, stat: IStat) => any);
    subscribeCalculateEquipmentStats?: true;
}
export declare const STAT_DEFAULT_DISPLAY_ORDER = 100;
