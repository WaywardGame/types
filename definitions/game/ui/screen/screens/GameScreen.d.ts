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
import type Human from "game/entity/Human";
import type Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import { TickFlag } from "game/IGame";
import type Island from "game/island/Island";
import type Item from "game/item/Item";
import DrawnMap from "game/mapping/DrawnMap";
import Component from "ui/component/Component";
import type { IBindHandlerApi } from "ui/input/Bind";
import Screen from "ui/screen/Screen";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import type QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
import { DialogId } from "ui/screen/screens/game/Dialogs";
import { QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import type ActionBar from "ui/screen/screens/game/static/ActionBar";
import type MenuBar from "ui/screen/screens/game/static/MenuBar";
import type Messages from "ui/screen/screens/game/static/Messages";
import type StatsQuadrant from "ui/screen/screens/game/static/Stats";
import MovementHandler from "ui/screen/screens/game/util/movement/MovementHandler";
import WorldTooltipHandler from "ui/screen/screens/game/WorldTooltipHandler";
import type { Direction } from "utilities/math/Direction";
export declare type IDialogStates = {
    [key in `${DialogId}` | `${DialogId},${string}`]: boolean;
};
declare global {
    let gameScreen: GameScreen | undefined;
}
export default class GameScreen extends Screen {
    quadrantComponentQuadrants: OptionalDescriptions<QuadrantComponentId, Quadrant>;
    menuBar: MenuBar;
    stats: StatsQuadrant;
    actionBar: ActionBar;
    messages: Messages;
    movementHandler: MovementHandler;
    worldTooltipHandler: WorldTooltipHandler;
    private quadrantContainer;
    private readonly quadrantMap;
    private readonly quadrantComponents;
    private readonly gameCanvas;
    private readonly effects;
    private readonly placeholders;
    private readonly islandIntroWrapper;
    private readonly buttonRespawn;
    constructor();
    getQuadrantComponents(): import("@wayward/goodstream").default<QuadrantComponent>;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: QuadrantComponentId): (never extends C ? QuadrantComponent : C extends never[] ? QuadrantComponent | C : {} extends C ? QuadrantComponent | Partial<QuadrantComponent> : QuadrantComponent | C) | undefined;
    getQuadrantContainer(): Component<HTMLElement>;
    isMouseWithin(): Component<HTMLElement> | undefined;
    mouseStartWasWithin(api: IBindHandlerApi): boolean | undefined;
    onGameStart(game: Game, _isLoadingSave: boolean, _playedCount: number): void;
    onLoadedOnIsland(player: Player, island: Island): void;
    private showIslandIntro;
    onGameTickEnd(game: Game, tickFlag: TickFlag): void;
    onExploreAsGhost(): void;
    /**
     * Notee: calculateEquipmentStats is always ran after calculateStats is called, so this will work
     */
    onCalculateEquipmentStats(): void;
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
    protected onDie(player: Player, showingGameEndScreen: boolean): void;
    protected onRespawn(): void;
    protected onItemMenu(api: IBindHandlerApi): boolean;
    protected onZoom(api: IBindHandlerApi): boolean;
    protected onInspect(api: IBindHandlerApi): boolean;
    protected onScreenshotMode(): boolean;
    protected onShowMoreInfo(): void;
    protected onUnshowMoreInfo(): void;
    protected onDisableHealthVignette(): void;
    protected onEquipItem(): void;
    protected onCancel(): boolean;
    protected create(): void;
    protected onHide(): void;
    protected onResize(): void;
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
}
