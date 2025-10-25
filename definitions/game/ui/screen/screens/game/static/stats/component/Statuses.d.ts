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
import type { Stat } from "@wayward/game/game/entity/IStats";
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import Component from "@wayward/game/ui/component/Component";
import type GameScreen from "@wayward/game/ui/screen/screens/GameScreen";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IStatusesEvents extends Events<Component> {
    update(): any;
}
export default class Statuses extends Component {
    readonly stat?: (Stat | "all") | undefined;
    event: IEventEmitter<this, IStatusesEvents>;
    private readonly statusIcons;
    private readonly entityRef;
    get entity(): EntityWithStats | undefined;
    constructor(entity: EntityWithStats, stat?: (Stat | "all") | undefined);
    protected onToggleScreenshotMode(gameScreen: GameScreen, enabled: boolean): void;
    /**
     * Event handler for the status effects of this entity changing
     */
    onStatusChange(_: any, type: StatusType, level: number): void;
    private removeStatusIcons;
    protected updateStatusScale(): void;
    private initializeTooltipLocation;
}
