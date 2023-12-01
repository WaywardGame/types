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
import type { Game } from "@wayward/game/game/Game";
import { TickFlag } from "@wayward/game/game/IGame";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type Human from "@wayward/game/game/entity/Human";
import type Player from "@wayward/game/game/entity/player/Player";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import DrawnMap from "@wayward/game/game/mapping/DrawnMap";
import type Tile from "@wayward/game/game/tile/Tile";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Screen from "@wayward/game/ui/screen/Screen";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import { QuadrantComponentId } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import WorldTooltipHandler from "@wayward/game/ui/screen/screens/game/WorldTooltipHandler";
import ContainerBucket from "@wayward/game/ui/screen/screens/game/component/ContainerBucket";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import type QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import type ContainerDialog from "@wayward/game/ui/screen/screens/game/dialog/ContainerDialog";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import MenuBar from "@wayward/game/ui/screen/screens/game/static/MenuBar";
import type Messages from "@wayward/game/ui/screen/screens/game/static/Messages";
import type StatsQuadrant from "@wayward/game/ui/screen/screens/game/static/Stats";
import MovementHandler from "@wayward/game/ui/screen/screens/game/util/movement/MovementHandler";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type Stream from "@wayward/goodstream";
export type IDialogStates = {
    [key in `${DialogId}` | `${DialogId},${string}`]: boolean;
};
declare global {
    let gameScreen: GameScreen | undefined;
}
export default class GameScreen extends Screen {
    quadrantComponentQuadrants: OptionalDescriptions<QuadrantComponentId, Quadrant>;
    menuBar: MenuBar;
    stats: StatsQuadrant;
    actionBar: ActionBar | undefined;
    messages: Messages;
    movementHandler: MovementHandler;
    worldTooltipHandler: WorldTooltipHandler;
    private quadrantContainer;
    private readonly quadrantMap;
    private readonly quadrantComponents;
    private readonly gameComponent;
    private readonly effects;
    private readonly placeholders;
    private readonly popupOverlayWrapper;
    private islandIntroPopupOverlay?;
    private readonly pausedPopupOverlay;
    private readonly nightPopupOverlay;
    private readonly buttonRespawn;
    constructor();
    private get gameCanvasComponent();
    getQuadrantComponents(): Stream<QuadrantComponent>;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: QuadrantComponentId): (never extends C ? QuadrantComponent : C extends never[] ? QuadrantComponent | C : {} extends C ? QuadrantComponent | Partial<QuadrantComponent> : QuadrantComponent | C) | undefined;
    getQuadrantContainer(): Component;
    isMouseWithin(): Component | undefined;
    mouseStartWasWithin(api: IBindHandlerApi): boolean | undefined;
    getContainerBucket(container?: IContainer): ContainerBucket | undefined;
    hasOpenContainerBucket(container?: IContainer): boolean;
    hasOpenAncestorBuckets(container?: IContainer): boolean;
    openContainerDialog(container?: IContainer): false | ContainerDialog;
    closeContainerDialog(container?: IContainer): boolean;
    private readonly cinematicModeReasons;
    toggleCinematicMode(enabled: boolean, reason: string): this;
    onGameStart(game: Game, _isLoadingSave: boolean, _playedCount: number): void;
    onLoadedOnIsland(player: Player, island: Island): void;
    private showIslandIntro;
    onIslandTickEnd(island: Island, tickFlag: TickFlag): void;
    onExploreAsGhost(): void;
    /**
     * Notee: calculateEquipmentStats is always ran after calculateStats is called, so this will work
     */
    onCalculateEquipmentStats(): void;
    onNightlyAlignmentChange(): Promise<void>;
    protected onItemRevertFromDoodad(item: Item, doodad: Doodad): void;
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
    private updatePauseIcon;
    private get canUnpause();
}
