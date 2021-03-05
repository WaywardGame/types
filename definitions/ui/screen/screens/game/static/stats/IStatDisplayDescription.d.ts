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
import Entity from "game/entity/Entity";
import { IStat, StatDisplayType } from "game/entity/IStats";
import { IModdable } from "mod/ModRegistry";
import Component from "ui/component/Component";
import { ITooltip } from "ui/component/IComponent";
import { IStringSection } from "utilities/string/Interpolator";
export interface IStatDisplayDescription extends IModdable {
    imagePath?: string | ((entity: Entity, stat: IStat) => string);
    /**
     * Defaults to `#ffffff`
     */
    color?: string | ((entity: Entity, stat: IStat) => string);
    /**
     * Defaults to `#000000`
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
     * A function that will initialize a tooltip for this stat element
     */
    tooltip?(tooltip: ITooltip, entity: Entity, stat: IStat): any;
}
export declare const STAT_DEFAULT_DISPLAY_ORDER = 100;
