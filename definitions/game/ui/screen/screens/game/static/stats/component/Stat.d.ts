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
import type Entity from "@wayward/game/game/entity/Entity";
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { IStatChangeInfo } from "@wayward/game/game/entity/IEntity";
import type { IStat, IStatBase, IStatMax, Stat } from "@wayward/game/game/entity/IStats";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Component from "@wayward/game/ui/component/Component";
import Text from "@wayward/game/ui/component/Text";
export declare abstract class StatComponent extends Component {
    private readonly stat;
    protected readonly statDescription: import("@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription").IStatDisplayDescription | undefined;
    private readonly statIcon;
    private readonly entityRef;
    protected get entity(): EntityWithStats<unknown, number, import("@wayward/game/game/reference/IReferenceManager").EntityReferenceTypes, unknown> | undefined;
    constructor(entity: EntityWithStats, stat: Stat, noEvents?: true, statDescription?: import("@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription").IStatDisplayDescription | undefined);
    private onUpdateMilestone;
    protected onRemove(): void;
    /**
     * Returns the attached entity's `IStat` for this `StatElement`'s `Stat`.
     */
    getStat<S extends IStat>(): S & (S extends IStatBase ? {
        base: S;
    } : undefined);
    /**
     * Returns the formatted string value of this stat.
     *
     * If `statDescription.getFormatted` is defined, uses this method. Else, generates based on if the stat has a `max`
     */
    getStatValue(): Translation;
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
    abstract getTextElement(): Text | undefined;
    abstract getDisplayElement(): Component | undefined;
    /**
     * Returns the generic string representation of this stat.
     */
    protected getGenericStatValue(stat: IStat): TranslationImpl;
    /**
     * Event handler for when a stat changes. Updates the text, color, icon, and tooltip of this `StatElement`.
     *
     * Should be used for both `value` & `max` changing.
     */
    protected onStatChange(_?: any, stat?: IStat, oldValue?: number, info?: IStatChangeInfo): void;
    /**
     * Returns the component that should have the stat tooltip
     */
    protected getTooltipElement(): Component | undefined;
    private getTooltip;
    private getTooltipLocation;
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
    constructor(entity: EntityWithStats, stat: Stat, noEvents?: true);
    getTextElement(): Text;
    getDisplayElement(): Component;
    getGenericStatValue(stat: IStatMax): TranslationImpl;
    /**
     * Overrides the superclass method of the same name. Calls the superclass method, then updates the CSS
     * property `--stat-percent`, to update the statbar's fill width.
     */
    onStatChange(_?: any, stat?: IStat, oldValue?: number): void;
    protected getTooltipElement(): Component;
}
export declare class StatAttribute extends StatComponent {
    private readonly attribute;
    constructor(entity: EntityWithStats, stat: Stat, noEvents?: true, statDescription?: import("@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription").IStatDisplayDescription | undefined);
    getTextElement(): Text | undefined;
    getDisplayElement(): Text | undefined;
}
export declare class Statbars extends StatsContainer<Statbar> {
    constructor(entity: Entity, stats: Iterable<Stat>, noEvents?: true);
    protected createStatComponent(entity: EntityWithStats, stat: Stat, noEvents: true | undefined): Statbar;
}
export declare class StatAttributes extends StatsContainer<StatAttribute> {
    constructor(entity: EntityWithStats, stats: Iterable<Stat>, noEvents?: true);
    protected createStatComponent(entity: EntityWithStats, stat: Stat, noEvents: true | undefined): StatAttribute;
}
