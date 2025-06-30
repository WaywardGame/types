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
export declare enum StatusClasses {
    Wrapper = "status-effects",
    Wrapper_Smol = "status-effects--smol",
    Wrapper_WaitingForScale = "status-effects--waiting-for-scale",
    Main = "status-effect",
    _TitleMode = "status-effect--title-mode",
    Level = "status-effect-level",
    _Tick = "status-effect--tick",
    Layer = "status-effect-layer",
    LayerBackground = "status-effect-layer-background",
    LayerForeground = "status-effect-layer-foreground",
    LayerEffect = "status-effect-layer-effect",
    _NoHigherThreat = "status-effect--no-higher-threat",
    _Group_ = "status-effect--group-",
    _GroupThreat = "status-effect--group-threat",
    _GroupIssue = "status-effect--group-issue",
    _GroupNeutral = "status-effect--group-neutral",
    _GroupGood = "status-effect--group-good"
}
export interface IStatusesEvents extends Events<Component> {
    update(): any;
}
export default class Statuses extends Component {
    readonly stat?: Stat | undefined;
    event: IEventEmitter<this, IStatusesEvents>;
    private readonly statusIcons;
    private readonly entityRef;
    get entity(): EntityWithStats | undefined;
    constructor(entity: EntityWithStats, stat?: Stat | undefined);
    protected onToggleScreenshotMode(gameScreen: GameScreen, enabled: boolean): void;
    /**
     * Event handler for the status effects of this entity changing
     */
    onStatusChange(_: any, status: StatusType, level: number): void;
    protected updateStatusScale(): void;
    private initializeTooltipLocation;
}
