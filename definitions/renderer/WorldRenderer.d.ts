/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Creature from "entity/creature/Creature";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import IWorldRenderer, { RenderFlag, SpriteBatchLayer } from "renderer/IWorldRenderer";
import { ITileAdaptor } from "renderer/TileAdaptors";
import Fence from "renderer/tileAdaptors/Fence";
import Wall from "renderer/tileAdaptors/Wall";
import WorldLayerRenderer from "renderer/WorldLayerRenderer";
import { ITile } from "tile/ITerrain";
import Vector2 from "utilities/math/Vector2";
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
     * Called when rendering the player in the viewport
     * @param player The player object
     * @param batchLayer The batch layer the player will render in
     * @returns The batch layer the player should render in or undefined to use the default logic
     */
    getPlayerSpriteBatchLayer(player: Player, batchLayer: SpriteBatchLayer): SpriteBatchLayer | undefined;
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
}
export default class WorldRenderer extends EventEmitter.Host<IWorldRendererEvents> implements IWorldRenderer {
    private readonly gl;
    private static textureShaderProgram;
    private static worldShaderProgram;
    private static fogShaderProgram;
    positionTextureBuffer: WebGLBuffer;
    positionBuffer: WebGLBuffer;
    ditherTexture: WebGLTexture;
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
    private readonly screenspaceViewport;
    private readonly worldspaceViewport;
    private tileScale;
    private zoom;
    private readonly compositeFramebuffer;
    private readonly compositeTexture;
    private readonly layerFramebuffer;
    private readonly layerTexture;
    private readonly depthBuffer;
    private readonly fogFramebuffer;
    private readonly fogTexture;
    private readonly fogTextureStorage;
    private readonly vertexArraySingle;
    private readonly vertexArrayDouble;
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
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(gl: WebGL2RenderingContext);
    dispose(): void;
    initializeSpriteBatch(layer: SpriteBatchLayer, reset?: boolean): void;
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vector2): any;
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
    renderWorld(x: number, y: number, z: number): void;
    renderWorldLayer(worldLayer: WorldLayerRenderer, x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFlags: RenderFlag, enableDepth: boolean): void;
    render(): void;
    screenToVector(screenX: number, screenY: number): Vector2;
    screenToTile(screenX: number, screenY: number): Vector2 | undefined;
    getViewportBounds(): {
        min: Vector2;
        max: Vector2;
        z: number;
    };
    computeSpritesInViewport(): void;
    batchMovable(timeStamp: number): boolean;
    private batchCreature;
    private getFlyingOffset;
    private batchShadow;
    private batchPlayers;
    private batchHuman;
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
    private computeSpritesInViewportInternal;
    private batchItems;
    private batchItem;
    private batchTileEvents;
}
