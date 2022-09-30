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
import type { IStatChangeInfo } from "game/entity/IEntity";
import type { IStat, IStatMax, Stat } from "game/entity/IStats";
import Component from "ui/component/Component";
import Text from "ui/component/Text";
import type { IStringSection } from "utilities/string/Interpolator";
export declare abstract class StatComponent extends Component {
    private readonly entity;
    private readonly stat;
    private readonly statIcon;
    constructor(entity: Entity, stat: Stat, noEvents?: true);
    protected onRemove(): void;
    /**
     * Returns the attached entity's `IStat` for this `StatElement`'s `Stat`.
     */
    getStat<S extends IStat>(): S & (S extends import("game/entity/IStats").IStatBase ? {
        base: S;
    } : undefined);
    /**
     * Returns the formatted string value of this stat.
     *
     * If `statDescription.getFormatted` is defined, uses this method. Else, generates based on if the stat has a `max`
     */
    getStatValue(): IStringSection[];
    /**
     * Returns the color of this stat.
     */
    getStatColor(type?: "dark" | "rgb"): string;
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    getCustomStatIconPath(): string | undefined;
    /**
     * Returns the display priority for this stat.
     */
    getDisplayOrder(): number;
    abstract getDisplayElement(): Text;
    /**
     * Returns the generic string representation of this stat.
     */
    protected getGenericStatValue(stat: IStat): IStringSection[];
    /**
     * Event handler for when a stat changes. Updates the text, color, icon, and tooltip of this `StatElement`.
     *
     * Should be used for both `value` & `max` changing.
     */
    protected onStatChange(_?: any, stat?: IStat, oldValue?: number, info?: IStatChangeInfo): void;
    /**
     * Returns the component that should have the stat tooltip
     */
    protected getTooltipElement(): Component;
    private getTooltip;
}
export declare abstract class StatsContainer<STAT_COMPONENT extends StatComponent> extends Component {
    private readonly entity;
    private readonly noEvents?;
    private readonly _stats;
    get stats(): Map<Stat, STAT_COMPONENT>;
    constructor(entity: Entity, stats: Iterable<Stat>, noEvents?: true | undefined);
    addStat(stat: Stat): void;
    protected abstract createStatComponent(entity: Entity, stat: Stat, noEvents: true | undefined): STAT_COMPONENT;
}
export declare class Statbar extends StatComponent {
    private readonly bar;
    private readonly text;
    constructor(entity: Entity, stat: Stat, noEvents?: true);
    getDisplayElement(): Text;
    getGenericStatValue(stat: IStatMax): IStringSection[];
    /**
     * Overrides the superclass method of the same name. Calls the superclass method, then updates the CSS
     * property `--stat-percent`, to update the statbar's fill width.
     */
    onStatChange(_?: any, stat?: IStat, oldValue?: number): void;
    protected getTooltipElement(): Component<HTMLElement>;
}
export declare class StatAttribute extends StatComponent {
    private readonly attribute;
    constructor(entity: Entity, stat: Stat, noEvents?: true);
    getDisplayElement(): Text;
}
export declare class Statbars extends StatsContainer<Statbar> {
    constructor(entity: Entity, stats: Iterable<Stat>, noEvents?: true);
    protected createStatComponent(entity: Entity, stat: Stat, noEvents: true | undefined): Statbar;
}
export declare class StatAttributes extends StatsContainer<StatAttribute> {
    constructor(entity: Entity, stats: Iterable<Stat>, noEvents?: true);
    protected createStatComponent(entity: Entity, stat: Stat, noEvents: true | undefined): StatAttribute;
}
