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
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Island from "@wayward/game/game/island/Island";
import type { IOverlayInfo } from "@wayward/game/game/tile/ITerrain";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import { Notifier } from "@wayward/game/renderer/notifier/Notifier";
import { ParticleSystem } from "@wayward/game/renderer/particle/ParticleSystem";
import type { ISpriteBatch } from "@wayward/game/renderer/spriteBatch/ISpriteBatch";
import type { TerrainTileInfo } from "@wayward/game/renderer/tile/TerrainTileInfo";
import type { ITileAdaptor } from "@wayward/game/renderer/tile/TileAdaptors";
import FenceTileAdaptor from "@wayward/game/renderer/tile/adaptors/Fence";
import WallTileAdaptor from "@wayward/game/renderer/tile/adaptors/Wall";
import type TileAtlas from "@wayward/game/renderer/tile/atlas/TileAtlas";
import type { IBounds } from "@wayward/game/renderer/world/IWorldRenderer";
import { RenderFlag, SpriteBatchLayer } from "@wayward/game/renderer/world/IWorldRenderer";
import { WorldLayerRenderer } from "@wayward/game/renderer/world/WorldLayerRenderer";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
import type { IWorldRendererPlatform } from "@wayward/game/renderer/world/IWorldRendererPlatform";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
export interface IWorldRendererEvents {
    /**
     * Called when calculating creatures in the viewport
     * @param creature The creature object
     * @param tile The tile the creature is on
     * @returns False if the player should not see the creature or undefined to use the default logic
     */
    canSeeCreature(creature: Creature, tile: Tile): boolean | undefined;
    /**
     * Called when calculating npcs in the viewport
     * @param npc The npc object
     * @param tile The tile the npc is on
     * @returns False if the player should not see the npc or undefined to use the default logic
     */
    canSeeNPC(npc: NPC, tile: Tile): boolean | undefined;
    /**
     * Called when rendering creatures in the viewport
     * @param creature The creature object
     * @param batchLayer The batch layer the creature will render in
     * @returns The batch layer the creature should render in or undefined to use the default logic
     */
    getCreatureSpriteBatchLayer(creature: Creature, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    /**
     * Called when rendering the origin in the viewport
     * @param origin The origin object
     * @param batchLayer The batch layer the player will render in
     * @returns The batch layer the player should render in or undefined to use the default logic
     */
    getPlayerSpriteBatchLayer(origin: IRendererOrigin, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
    /**
     * Called when initializing each sprite batch layer.
     * @param layer The SpriteBatchLayer that is being initialized
     * @param maxSprites The default number of sprites that can be rendered at one time on this layer
     * @returns The number of sprites that can be rendered at one time on this layer
     */
    getMaxSpritesForLayer(maxSprites: number, layer: SpriteBatchLayer): number;
    /**
     * Called when the zoom level is changed.
     */
    updateZoom(zoom: number, oldZoom: number): any;
    /**
     * Called before rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     * @param timeStamp The animation frame timestamp
     */
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number, timeStamp: number): void;
    /**
     * Caller after rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    postRenderWorld?(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Caller before post processing the world render
     */
    preRenderPostProcess?(): void;
    /**
     * Caller after post processing the world render
     */
    postRenderPostProcess?(): void;
    /**
     * Called when rendering the overlay
     * @param spriteBatch The overlay sprite batch
     */
    renderOverlay(spriteBatch: ISpriteBatch): void;
    /**
     * Called when different object types are rendered
     * @returns A bitwise list of render flags or undefined to use the default logic
     */
    shouldRender(): RenderFlag | undefined;
}
export declare class WorldRenderer extends EventEmitter.Host<IWorldRendererEvents> {
    private readonly context;
    readonly fieldOfView: FieldOfView;
    readonly particleSystem: ParticleSystem;
    readonly notifier: Notifier;
    private readonly overlays;
    layers: Record<number, WorldLayerRenderer>;
    defaultAdaptor: ITileAdaptor;
    doodadLikeAdaptor: ITileAdaptor;
    fenceAdaptor: FenceTileAdaptor;
    floorAdaptor: ITileAdaptor;
    lavaAdaptor: ITileAdaptor;
    mountainAdaptor: ITileAdaptor;
    mountainGroundAdaptor: ITileAdaptor;
    tillAdaptor: ITileAdaptor;
    dugAdaptor: ITileAdaptor;
    trackAdaptor: ITileAdaptor;
    wallAdaptor: WallTileAdaptor;
    waterAdaptor: ITileAdaptor;
    defaultBackground: TerrainTileInfo;
    defaultBackgroundType: TerrainType;
    private readonly worldspaceViewport;
    private tileScale;
    private zoom;
    private _island;
    private _tileAtlas;
    private _spriteAtlas;
    private belowDoodadsBatch;
    private itemBatch;
    private itemMovingBatch;
    private corpseBatch;
    private playerCreatureBatch;
    private tileEventBatch;
    private overTreesBatch;
    private creatureFlyingBatch;
    private overlayBatch;
    private vehicleBatch;
    private readonly entitiesToRenderInViewport;
    private readonly doodadsToNotRenderInViewport;
    /**
     * A set of entities seen before (rendered on screen at least once)
     */
    private entititiesRenderedBefore;
    private viewportSpritesDirty;
    private cachedBounds;
    private cachedBoundsTimestamp;
    readonly rendererPlatform: IWorldRendererPlatform;
    constructor(context: IRendererContext);
    get island(): Island;
    get tileAtlas(): TileAtlas;
    /**
     * Prevent some rendering when zoomed out too much (with debug tools)
     */
    private get shouldRenderEntities();
    delete(): void;
    load(island: Island): void;
    render(): void;
    renderWorld(timeStamp: number, x: number, y: number, z: number): void;
    updateAllTiles(): void;
    initializeSpriteBatch(layer: SpriteBatchLayer): void;
    private setResources;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    private setTileScale;
    setZoom(zoom: number): void;
    syncViewport(): void;
    private syncTileScale;
    getViewport(): IVector2;
    calculateAmbientColor(): [number, number, number];
    getAmbientColorCave(): [number, number, number];
    getAmbientColorDay(): [number, number, number];
    getAmbientColorNight(): [number, number, number];
    getAmbientColorDawn(): [number, number, number];
    getAmbientIntensity(): number;
    getFogColor(): [number, number, number];
    addOrUpdateOverlay(tile: Tile, overlay: IOverlayInfo): void;
    removeOverlay(tile: Tile, overlay: IOverlayInfo): void;
    shouldRender(): RenderFlag;
    renderWorldLayer(worldLayer: WorldLayerRenderer, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFlags: RenderFlag, enableDepth: boolean): void;
    screenToVector(screenX: number, screenY: number, timeStamp?: number): Vector2;
    screenToTile(screenX: number, screenY: number): Tile | undefined;
    private getViewportBounds;
    getBounds(timeStamp: number): IBounds;
    computeSpritesInViewport(): void;
    /**
     * Batches entities
     * @returns True when there's more rendering to be done
     */
    batchMovable(timeStamp: number): boolean;
    private batchCreature;
    private batchShadow;
    private batchDoodadOrVehicle;
    private batchHuman;
    private batchAttackAnimation;
    /**
     * Renders the status effects currently on the human.
     */
    private renderStatuses;
    private shouldRenderBaseLayer;
    /**
     * Renders a status effect image.
     */
    private renderStatus;
    private spriteBatchForLayer;
    addTileToViewport(timeStamp: number, visibleTiles: Set<Tile>, tile: Tile, itemBatch: ISpriteBatch | undefined): void;
    private addDoodadToViewport;
    private addCreatureToViewport;
    private addNPCToViewport;
    private addCorpsesToViewport;
    /**
     * Computes sprites in the viewport
     * @returns True when there's more rendering to be done
     */
    private computeSpritesInViewportImmediately;
    private batchTileItems;
    private batchItems;
    private batchItem;
    private batchTileEvents;
}
