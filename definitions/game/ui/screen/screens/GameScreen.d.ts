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
import type { Game } from "@wayward/game/game/Game";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type { ActionId, IUsableActionExecutionContext, UsableActionUsability } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { IUsableActionPossibleUsing, UsableActionExecutionContext } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type UsableActionRegistrar from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IIslandTickOptions } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import DrawnMap from "@wayward/game/game/mapping/DrawnMap";
import Tile from "@wayward/game/game/tile/Tile";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Screen from "@wayward/game/ui/screen/Screen";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type { IUsableActionExecutionOptions } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import { QuadrantComponentId, UsableActionExecutionResult } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import WorldTooltipHandler from "@wayward/game/ui/screen/screens/game/WorldTooltipHandler";
import type ContainerBucket from "@wayward/game/ui/screen/screens/game/component/ContainerBucket";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import type QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import ContainerBucketManager from "@wayward/game/ui/screen/screens/game/component/container/ContainerBucketManager";
import ContainerDialog from "@wayward/game/ui/screen/screens/game/dialog/ContainerDialog";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import MenuBar from "@wayward/game/ui/screen/screens/game/static/MenuBar";
import type Messages from "@wayward/game/ui/screen/screens/game/static/Messages";
import Placeholder from "@wayward/game/ui/screen/screens/game/static/Placeholder";
import type StatsQuadrant from "@wayward/game/ui/screen/screens/game/static/Stats";
import { ActionUseContext } from "@wayward/game/ui/screen/screens/game/static/actions/IActionBar";
import InteractionManager from "@wayward/game/ui/screen/screens/game/util/movement/InteractionManager";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type Stream from "@wayward/goodstream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum GameScreenClasses {
    PauseIcon = "pause-icon",
    PauseIcon_Paused = "pause-icon--paused",
    PauseIcon_Unpausable = "pause-icon--unpausable",
    PauseIcon_Visible = "pause-icon--visible",
    PauseIcon_Overlay = "pause-icon--overlay"
}
export type IDialogStates = Record<`${DialogId}` | `${DialogId},${string}`, boolean>;
declare global {
    let gameScreen: GameScreen | undefined;
}
export interface IGameScreenEvents extends Events<Screen> {
    toggleScreenshotMode(enabled: boolean): any;
}
export default class GameScreen extends Screen {
    event: IEventEmitter<this, IGameScreenEvents>;
    /** Current locations for visible quadrant components */
    quadrantComponentQuadrants: OptionalDescriptions<QuadrantComponentId, Quadrant>;
    /** Saved/previous locations for quadrant components that were hidden */
    quadrantComponentHeldQuadrants: OptionalDescriptions<QuadrantComponentId, Quadrant>;
    menuBar: MenuBar;
    stats: StatsQuadrant;
    actionBar: ActionBar | undefined;
    messages: Messages;
    interactionManager: InteractionManager;
    worldTooltipHandler: WorldTooltipHandler;
    private quadrantContainer;
    private readonly quadrantComponents;
    private readonly gameComponent;
    private readonly effects;
    private readonly placeholders;
    private readonly popupOverlayWrapper;
    private islandIntroPopupOverlay?;
    private readonly pausedPopupOverlay;
    private readonly nightPopupOverlay;
    private readonly buttonRespawn;
    private readonly buttonPause;
    get buckets(): ContainerBucketManager;
    get actions(): UsableActionRegistrar;
    constructor();
    get isTwoColumn(): boolean;
    private get gameCanvasComponent();
    getQuadrantComponents(): Stream<QuadrantComponent>;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: QuadrantComponentId): (never extends C ? QuadrantComponent : C extends never[] ? QuadrantComponent | C : Empty extends C ? QuadrantComponent | Partial<QuadrantComponent> : QuadrantComponent | C) | undefined;
    getQuadrantComponentQuadrants(includeHeldLocations?: boolean): Array<[QuadrantComponentId, Quadrant?]>;
    getQuadrantComponentInQuadrant(quadrant: Quadrant, includeHeldLocations: boolean, includePlaceholders?: false): QuadrantComponent | undefined;
    getQuadrantComponentInQuadrant(quadrant: Quadrant, includeHeldLocations: boolean, includePlaceholders?: boolean): QuadrantComponent | Placeholder | undefined;
    getQuadrantContainer(): Component;
    get isMouseWithin(): boolean;
    get asMouseWithin(): this | undefined;
    mouseStartWasWithin(api: IBindHandlerApi): boolean | undefined;
    getContainerBucket(container?: IContainer): ContainerBucket | undefined;
    hasOpenContainerBucket(container?: IContainer): boolean;
    hasOpenAncestorBuckets(container?: IContainer): boolean;
    openContainerDialog(container?: IContainer, fromContainer?: IContainer): false | ContainerDialog;
    closeContainerDialog(container?: IContainer): boolean;
    private readonly cinematicModeReasons;
    toggleCinematicMode(enabled: boolean, reason: string): this;
    getActionUseContext(action?: ActionId | UsableAction, using?: IUsableActionPossibleUsing): ActionUseContext;
    getActionUsing(action?: ActionId | UsableAction, using?: IUsableActionPossibleUsing, fillTiles?: boolean): IUsableActionPossibleUsing;
    private lastAttemptedAction?;
    private lastUsableResult?;
    private lastFailTime;
    private lastAttemptTime;
    private executingActionPromise?;
    private queuedActionExecutionId?;
    executeAction(action?: ActionId | UsableAction, using?: IUsableActionPossibleUsing, context?: UsableActionExecutionContext | IUsableActionExecutionContext, options?: IUsableActionExecutionOptions): UsableActionExecutionResult.UnknownAction | UsableActionExecutionResult.NotExecutable | Promise<UsableActionExecutionResult | {
        result: any;
    }>;
    isActionUsable(action?: ActionId | UsableAction, using?: IUsableActionPossibleUsing, context?: UsableActionExecutionContext | IUsableActionExecutionContext): UsableActionUsability;
    onGameStart(game: Game, _isLoadingSave: boolean, _playedCount: number): void;
    onLoadedOnIsland(player: Player, island: Island): void;
    private showIslandIntro;
    onIslandTickEnd(island: Island, options: IIslandTickOptions): void;
    onExploreAsGhost(): void;
    /**
     * Notee: calculateEquipmentStats is always ran after calculateStats is called, so this will work
     */
    onCalculateEquipmentStats(): void;
    onNightlyAlignmentChange(): Promise<void>;
    protected onItemRevertFromDoodad(item: Item, doodad: Doodad): void;
    protected onItemBecomeDoodad(item: Item, doodad: Doodad): void;
    protected onRemoveContainableFromContainer(itemManager: ItemManager, items: Item[], container?: IContainer): void;
    /**
     * Refreshed death / ghost state stuff
     */
    private refreshState;
    /**
     * Refreshed ghost/death overlays
     */
    private refreshGhostState;
    /**
     * Refreshes respawn button state
     */
    private refreshRespawnButton;
    private refreshHealthBasedEffects;
    /**
     * Refreshes the state of the hurt effect
     */
    private refreshHurtEffect;
    /**
     * Refreshes the state of the music speed
     */
    private refreshMusicSpeed;
    onOpenBook(human: Human, item: Item): void;
    protected onReadMap1(map: DrawnMap, item: Item, reader: Human): void;
    protected onSailOffMapEdge(player: Player, direction: Direction): void;
    protected onDie(player: Player, showingGameEndScreen?: boolean): void;
    protected onRespawn(): void;
    protected onEntityMoved(object: EntityMovable, lastTile: Tile, tile: Tile): void;
    protected onAscendDescend(api: IBindHandlerApi): boolean;
    protected onPickUpItem(api: IBindHandlerApi): boolean;
    protected onPickUpAllItems(api: IBindHandlerApi): boolean;
    protected onZoom(api: IBindHandlerApi): boolean;
    protected onInspect(api: IBindHandlerApi): boolean;
    protected onScreenshotMode(): boolean;
    protected onDisableHealthVignette(): void;
    protected onEquipItem(): void;
    protected onCancel(): boolean;
    protected create(): void;
    protected onHide(): void;
    protected onResize(): void;
    protected onCloseAllDialogs(): boolean;
    /**
     * Adds a quadrant element to the screen.
     *
     * The quadrant is decided following these steps:
     * 1. Starts with the `preferredQuadrant` of the element.
     * 2. If the quadrant is `Quadrant.None`, or the quadrant is already used,
     * use instead the result of `getUnusedQuadrant()`
     */
    private addQuadrantComponent;
    private onQuadrantComponentToggle;
    /**
     * Event handler for `QuadrantElementEvent.ChangeQuadrant`
     *
     * The element that is changing quadrants switches places with the element already in that quadrant.
     *
     * If the element is changing to `Quadrant.None`, it is removed from the `quadrantMap`. If the element
     * was in `Quadrant.None` and is switching places with another element, that element is removed
     * from the `quadrantMap`.
     */
    private onQuadrantComponentChange;
    private isQuadrantComponentHeldLocation;
    private onSwitchQuadrantComponents;
    private onQuadrantComponentUpdatePosition;
    /**
     * Handles top/bottom quadrants (for when in two-column mode)
     */
    private updateQuadrantPositions;
    private updateQuadrant;
    /**
     * Returns the first unused `Quadrant`, or `Quadrant.None` if there are none.
     */
    private getUnusedQuadrant;
    protected onObscureOrReveal(): void;
    private updatePauseIcon;
    private get canSelfUnpause();
    private get isRelevantlyPaused();
    private get couldBeRelevantlyPaused();
}
