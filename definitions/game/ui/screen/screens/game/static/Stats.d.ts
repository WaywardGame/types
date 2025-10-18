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
import type Human from "@wayward/game/game/entity/Human";
import Component from "@wayward/game/ui/component/Component";
import Bindable from "@wayward/game/ui/input/Bindable";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum StatsClasses {
    Quadrant = "stats-quadrant",
    Main = "stats",
    DiscoveryHint = "stats-discovery-hint",
    GenericStatuses = "stats-generic-statuses"
}
export default class StatsQuadrant extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    get preferredQuadrant(): Quadrant;
    private readonly stats;
    constructor();
    getBindable(): Bindable;
    setPlayer(human: Human): this;
}
export interface IStatsEvents extends Events<Component> {
    update(): any;
}
export declare class Stats extends Component {
    private readonly noEvents?;
    event: IEventEmitter<this, IStatsEvents>;
    private human;
    private moreStatsToDiscover;
    constructor(human?: Human, noEvents?: true | undefined);
    setHuman(human: Human): this;
    private refresh;
    protected onMilestonesUpdate(): void;
    /**
     * Returns an object containing iterables for all stats that exist on the player and have a description,
     * separated by how a given stat should be displayed
     */
    private getStats;
    private getStat;
    private getDisplayOrder;
    /**
     * Returns how the stat on an entity should be displayed.
     */
    private getStatDisplayType;
}
