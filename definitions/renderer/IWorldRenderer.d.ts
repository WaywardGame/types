/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ITileAdaptor } from "renderer/TileAdaptors";
import Fence from "renderer/tileAdaptors/Fence";
import Wall from "renderer/tileAdaptors/Wall";
import WorldLayerRenderer from "renderer/WorldLayerRenderer";
import { IBound3 } from "utilities/math/Bound3";
import Vec2 from "utilities/math/Vector2";
export interface IWorldRenderer {
    positionBuffer: WebGLBuffer;
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
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setTileScale(tileScale: number): void;
    setZoom(zoom: number): void;
    setViewport(view: Vec2): void;
    getViewport(): Vec2;
    getTileViewport(): Vec2;
    /**
     * Calculates the ambient color (color of the light), a 3-value tuple of RGB numbers 0-1.
     */
    calculateAmbientColor(): [number, number, number];
    /**
     * Get the ambient color (color of the light) while in caves, a 3-value tuple of RGB numbers 0-1.
     */
    getAmbientColorCave(): [number, number, number];
    /**
     * Get the ambient color (color of the light) of daytime, a 3-value tuple of RGB numbers 0-1.
     */
    getAmbientColorDay(): [number, number, number];
    /**
     * Get the ambient color (color of the light) of nighttime, a 3-value tuple of RGB numbers 0-1.
     */
    getAmbientColorNight(): [number, number, number];
    /**
     * Get the ambient color (color of the light) of dawn, a 3-value tuple of RGB numbers 0-1.
     */
    getAmbientColorDawn(): [number, number, number];
    /**
     * Get the intensity (light level) of the ambient light.
     */
    getAmbientIntensity(): number;
    /**
     * Get the color of the fog of war, a 3-value tuple of RGB numbers 0-1.
     */
    getFogColor(): [number, number, number];
    renderWorld(x: number, y: number, z: number): void;
    render(): void;
    screenToVector(screenX: number, screenY: number): Vec2;
    screenToTile(screenX: number, screenY: number): Vec2 | undefined;
    getViewportBounds(): IBound3;
    computeSpritesInViewport(): void;
    batchCreatures(timeStamp: number): void;
    initializeSpriteBatch(layer: SpriteBatchLayer, reset?: true): void;
    dispose(): void;
}
export default IWorldRenderer;
export declare enum SpriteBatchLayer {
    Corpse = 0,
    Item = 1,
    Creature = 2,
    TileEvent = 3,
    CreatureFlying = 4,
    Overlay = 5,
    OverTrees = 6
}
export declare enum RenderFlag {
    None = 0,
    Corpse = 1,
    Item = 2,
    Player = 4,
    Creature = 8,
    Terrain = 16,
    Overlay = 32,
    OverTrees = 64,
    TileEvent = 128,
    All = 65535
}
export declare enum RenderLayerFlag {
    None = 0,
    Terrain = 1,
    TerrainOver = 2,
    TerrainDecoration = 4,
    Doodad = 8,
    DoodadOver = 16,
    All = 255
}
