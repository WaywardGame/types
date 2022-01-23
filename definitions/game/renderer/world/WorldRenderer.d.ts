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
import EventEmitter from "event/EventEmitter";
import type Creature from "game/entity/creature/Creature";
import type NPC from "game/entity/npc/NPC";
import type Island from "game/island/Island";
import { TerrainType } from "game/tile/ITerrain";
import type { ITile } from "game/tile/ITerrain";
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import Notifier from "renderer/notifier/Notifier";
import Particle from "renderer/particle/Particle";
import type RendererContext from "renderer/context/RendererContext";
import type ISpriteBatch from "renderer/spriteBatch/ISpriteBatch";
import Fence from "renderer/tile/adaptors/Fence";
import Wall from "renderer/tile/adaptors/Wall";
import type TileAtlas from "renderer/tile/atlas/TileAtlas";
import type { ITileAdaptor } from "renderer/tile/TileAdaptors";
import type WebGlContext from "renderer/WebGlContext";
import { RenderFlag, SpriteBatchLayer } from "renderer/world/IWorldRenderer";
import WorldLayerRenderer from "renderer/world/WorldLayerRenderer";
import Vector2 from "utilities/math/Vector2";
import type { TerrainTileInfo } from "renderer/tile/TerrainTileInfo";
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
export interface IWorldRendererEvents {
    /**
     * Called when calculating creatures in the viewport
     * @param creature The creature object
     * @param tile The tile the creature is on
     * @returns False if the player should not see the creature or undefined to use the default logic
     */
    canSeeCreature(creature: Creature, tile: ITile): boolean | undefined;
    /**
     * Called when calculating npcs in the viewport
     * @param npc The npc object
     * @param tile The tile the npc is on
     * @returns False if the player should not see the npc or undefined to use the default logic
     */
    canSeeNPC(npc: NPC, tile: ITile): boolean | undefined;
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
     */
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
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
export default class WorldRenderer extends EventEmitter.Host<IWorldRendererEvents> {
    private readonly context;
    private readonly textureShaderProgram;
    private readonly worldShaderProgram;
    private readonly fogShaderProgram;
    readonly fieldOfView: FieldOfView;
    readonly particle: Particle;
    readonly notifier: Notifier;
    layers: Record<number, WorldLayerRenderer>;
    tillAdaptor: ITileAdaptor;
    waterAdaptor: ITileAdaptor;
    lavaAdaptor: ITileAdaptor;
    fenceAdaptor: Fence;
    mountainAdaptor: ITileAdaptor;
    mountainGroundAdaptor: ITileAdaptor;
    wallAdaptor: Wall;
    defaultAdaptor: ITileAdaptor;
    floorAdaptor: ITileAdaptor;
    defaultBackground: TerrainTileInfo;
    defaultBackgroundType: TerrainType;
    private readonly screenspaceViewport;
    private readonly worldspaceViewport;
    private tileScale;
    private zoom;
    private _island;
    readonly positionTextureBuffer: WebGLBuffer;
    readonly positionBuffer: WebGLBuffer;
    readonly ditherTexture: WebGLTexture;
    private readonly compositeFramebuffer;
    private readonly compositeTexture;
    private readonly layerFramebuffer;
    private readonly layerTexture;
    private readonly depthRenderBuffer;
    private readonly fogFramebuffer;
    private readonly fogTexture;
    private readonly fogTextureStorage;
    private readonly vertexArraySingle;
    private readonly vertexArrayDouble;
    private _tileAtlas;
    private _spriteAtlas;
    private belowDoodadsBatch;
    private itemBatch;
    private itemMovingBatch;
    private corpseBatch;
    private creatureBatch;
    private tileEventBatch;
    private overTreesBatch;
    private creatureFlyingBatch;
    private overlayBatch;
    private readonly entitiesInViewport;
    private viewportSpritesDirty;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: RendererContext);
    get island(): Island;
    get tileAtlas(): TileAtlas;
    delete(): void;
    load(island: Island): void;
    update(timeStamp: number): void;
    updateAllTiles(): void;
    refreshExploredMap(): void;
    initializeSpriteBatch(layer: SpriteBatchLayer): void;
    private setResources;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setTileScale(tileScale: number): void;
    setZoom(zoom: number): void;
    setViewport(view: Vector2): void;
    getViewport(): Vector2;
    getTileViewport(): Vector2;
    calculateAmbientColor(): [number, number, number];
    getAmbientColorCave(): [number, number, number];
    getAmbientColorDay(): [number, number, number];
    getAmbientColorNight(): [number, number, number];
    getAmbientColorDawn(): [number, number, number];
    getAmbientIntensity(): number;
    getFogColor(): [number, number, number];
    shouldRender(): RenderFlag;
    renderWorld(timeStamp: number, x: number, y: number, z: number): void;
    renderWorldLayer(worldLayer: WorldLayerRenderer, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFlags: RenderFlag, enableDepth: boolean): void;
    render(): void;
    screenToVector(screenX: number, screenY: number): Vector2;
    screenToTile(screenX: number, screenY: number): Vector2 | undefined;
    getViewportBounds(): {
        min: Vector2;
        max: Vector2;
        z: number;
    };
    getBounds(): {
        viewportBounds: {
            min: Vector2;
            max: Vector2;
            z: number;
        };
        startX: number;
        endX: number;
        startY: number;
        endY: number;
    };
    computeSpritesInViewport(): void;
    batchMovable(timeStamp: number): boolean;
    private batchCreature;
    private getFlyingOffset;
    private batchShadow;
    private batchHuman;
    private batchAttackAnimation;
    /**
     * Renders the status effects currently on the human.
     */
    private renderStatusEffects;
    private shouldRenderBaseLayer;
    /**
     * Renders a status effect image.
     */
    private renderStatusEffect;
    private spriteBatchForLayer;
    computeSpritesInViewportImmediately(): void;
    private batchItems;
    private batchItem;
    private batchTileEvents;
}
