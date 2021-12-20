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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type Player from "game/entity/player/Player";
import Component from "ui/component/Component";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
export default class StatsQuadrant extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    get preferredQuadrant(): Quadrant;
    private readonly stats;
    constructor();
    setPlayer(player: Player): this;
}
export interface IStatsEvents extends Events<Component> {
    update(): any;
}
export declare class Stats extends Component {
    private readonly noEvents?;
    readonly event: IEventEmitter<this, IStatsEvents>;
    private player;
    constructor(player?: Player, noEvents?: true | undefined);
    setPlayer(player: Player): this;
    private refresh;
    /**
     * Returns an object containing iterables for all stats that exist on the player and have a description,
     * separated by how a given stat should be displayed
     */
    private getStatsIterables;
    /**
     * Returns how the stat on an entity should be displayed.
     */
    private getStatDisplayType;
}
