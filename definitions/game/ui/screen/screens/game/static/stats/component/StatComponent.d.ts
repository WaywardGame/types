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
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { IStatChangeInfo } from "@wayward/game/game/entity/IEntity";
import type { IStat, IStatBase, IStatMax } from "@wayward/game/game/entity/IStats";
import { Stat, StatDisplayType } from "@wayward/game/game/entity/IStats";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { PathType } from "@wayward/game/resource/IResourceLoader";
import Component from "@wayward/game/ui/component/Component";
import Text from "@wayward/game/ui/component/Text";
import type { IStatDisplayDescription } from "@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription";
import ImagePath from "@wayward/game/ui/util/ImagePath";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum StatClasses {
    List = "stats-list",
    Row = "stat-row",
    Row_FirstOfType = "stat-row--first-of-type",
    RowBar = "stat-bar-row",
    RowAttribute = "stat-attribute-row",
    Main = "stat",
    _Type_ = "stat--type-",
    Label = "stat-label",
    Display = "stat-display",
    Text = "stat-text",
    Bar = "stat-bar",
    BarDisplay = "stat-bar-display",
    BarLabel = "stat-bar-label",
    Attribute = "stat-attribute",
    AttributeMulti = "stat-attribute-multi",
    AttributeDisplay = "stat-attribute-display",
    AttributeLabel = "stat-attribute-label"
}
export interface IStatComponentEvents extends Events<Component> {
    refresh(): any;
    update(): any;
    resubscribe(): any;
}
export default abstract class StatComponent extends Component {
    private readonly stat;
    protected readonly statDescription: IStatDisplayDescription | undefined;
    event: IEventEmitter<this, IStatComponentEvents>;
    readonly statIcon: ImagePath<PathType.StatIcon>;
    private readonly entityRef;
    get entity(): EntityWithStats | undefined;
    private hidingDueToMilestone;
    private updatingVisibility;
    constructor(entity: EntityWithStats, stat: Stat, noEvents?: true, statDescription?: IStatDisplayDescription | undefined);
    get asBar(): Statbar | undefined;
    get asAttribute(): StatAttribute | undefined;
    private subscribe;
    refresh(): void;
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
    private getTooltip;
    private getTooltipLocation;
    private updateVisibility;
}
export declare class StatsContainer extends Component {
    private readonly entity;
    private readonly noEvents?;
    private readonly _stats;
    get stats(): Map<Stat, StatComponent>;
    constructor(entity: EntityWithStats, noEvents?: true | undefined);
    addType(type: StatDisplayType.Statbar | StatDisplayType.Attribute, ...stats: Stat[]): this;
    addStat(stat: Stat, type: StatDisplayType.Statbar | StatDisplayType.Attribute, index: number): void;
}
export declare class Statbar extends StatComponent {
    readonly label: Text;
    readonly bar: Component<HTMLElement>;
    readonly text: Text;
    constructor(entity: EntityWithStats, stat: Stat, noEvents?: true);
    getTextElement(): Text;
    getDisplayElement(): Component;
    getGenericStatValue(stat: IStatMax): TranslationImpl;
    get asBar(): Statbar;
    /**
     * Overrides the superclass method of the same name. Calls the superclass method, then updates the CSS
     * property `--stat-percent`, to update the statbar's fill width.
     */
    onStatChange(_?: any, stat?: IStat, oldValue?: number): void;
}
export declare class StatAttribute extends StatComponent {
    readonly attribute?: Text;
    readonly label?: Text;
    get asAttribute(): StatAttribute;
    constructor(entity: EntityWithStats, stat: Stat, noEvents?: true, statDescription?: IStatDisplayDescription | undefined);
    getTextElement(): Text | undefined;
    getDisplayElement(): Text | undefined;
}
