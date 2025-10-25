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
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { IEntityWithStatsEvents } from "@wayward/game/game/entity/EntityWithStats";
import type Human from "@wayward/game/game/entity/Human";
import type { IHumanEvents } from "@wayward/game/game/entity/IHuman";
import type { IStat, IStatBase, StatDisplayType } from "@wayward/game/game/entity/IStats";
import { Stat } from "@wayward/game/game/entity/IStats";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureEvents } from "@wayward/game/game/entity/creature/ICreature";
import type { IPlayerEvents } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IIslandEvents } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type Translation from "@wayward/game/language/Translation";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type Component from "@wayward/game/ui/component/Component";
import type StatComponent from "@wayward/game/ui/screen/screens/game/static/stats/component/StatComponent";
import type { IStatComponentEvents } from "@wayward/game/ui/screen/screens/game/static/stats/component/StatComponent";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { IUntilSubscriber } from "@wayward/utilities/event/EventEmitter";
export interface IStatDisplayDescription extends IModdable, IHasImagePath<string | ((entity: EntityWithStats, stat: IStat) => string | undefined)> {
    /**
     * This stat displays as multiple sub-stats. (Incompatible with all other properties)
     *
     * Sub-stats always display as `StatDisplayType.Attribute`
     */
    multi?: Map<Stat, IStatDisplayDescription>;
    imagePath?: string | ((entity: EntityWithStats | undefined, stat: IStat) => string | undefined);
    /**
     * The CSS variable to use for the stat bar color
     * Defaults to white
     */
    color?: string | ((entity: EntityWithStats | undefined, stat: IStat) => string);
    /**
     * The CSS variable to use for the stat bar color in RGB format
     * Defaults to white
     */
    rgbColor?: string | ((entity: EntityWithStats | undefined, stat: IStat) => string);
    /**
     * The CSS variable to use for the background of the stat bar
     * Defaults to black
     */
    darkColor?: string | ((entity: EntityWithStats | undefined, stat: IStat) => string);
    /**
     * By default statbars render as though they're full at the minimum value
     * so that both the ::before and ::after elements can be used for animation.
     */
    disableRenderFullAtMin?: true;
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
     * Whether this stat display should be unlockable. (Unlocked by doing `player.addMilestone(Milestone.InternalStatDiscovery, Stat[stat])`)
     */
    unlockable?: true;
    /**
     * Handlers for when the stat changes. Called when the stat changes & when the stat max changes.
     */
    onChange?: Array<(statElement: Component, entity: EntityWithStats, stat: IStat, oldValue?: number) => void>;
    /**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    getFormatted?(entity: EntityWithStats, stat?: IStat): Translation;
    /**
     * A function that will initialize a tooltip for this stat element, or a reference to show a tooltip for
     */
    tooltip?: Reference | ((tooltip: Tooltip, entity: EntityWithStats, stat: IStat) => any);
    subscriber?: (events: IStatDisplayDescriptionSubscriber, statComponent: StatComponent) => any;
    getValue?(entity?: EntityWithStats): number | undefined;
    getMin?(entity?: EntityWithStats): number | undefined;
    getMax?(entity?: EntityWithStats): number | undefined;
    tweak?(component: StatComponent): unknown;
}
export interface IStatDisplayDescriptionSubscriber {
    removed: Promise<[]>;
    entity: IUntilSubscriber<EntityWithStats, IEntityWithStatsEvents>;
    human?: IUntilSubscriber<Human, IHumanEvents>;
    player?: IUntilSubscriber<Player, IPlayerEvents>;
    creature?: IUntilSubscriber<Creature, ICreatureEvents>;
    island?: IUntilSubscriber<Island, IIslandEvents>;
    stat?: IUntilSubscriber<StatComponent, IStatComponentEvents>;
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
export declare function when(predicate: (info: IStatInfo, entity: EntityWithStats, statElement: Component) => boolean, handler: (matched: boolean, statElement: Component, entity: EntityWithStats, info: IStatInfo) => any): (statElement: Component, entity: EntityWithStats, stat: IStat, oldValue?: number) => void;
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
