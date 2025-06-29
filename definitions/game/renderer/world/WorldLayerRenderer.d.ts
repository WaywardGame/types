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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IDoodadUpdate } from "@wayward/game/renderer/world/IWorldLayer";
import type { IWorldLayerRendererEvents } from "@wayward/game/renderer/world/IWorldLayerRenderer";
import { RenderLayerFlag } from "@wayward/game/renderer/world/IWorldRenderer";
import type { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type ExploredMapClientData from "@wayward/game/save/clientStore/clientData/ExploredMap";
import type { IBound3 } from "@wayward/game/utilities/math/Bound3";
import type { IWorldLayerRendererPlatform } from "@wayward/game/renderer/world/IWorldLayerRendererPlatform";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
import type { ITileLayerRendererPlatform } from "@wayward/game/renderer/tile/ITileLayerRendererPlatform";
export declare class WorldLayerRenderer extends EventEmitter.Host<IWorldLayerRendererEvents> {
    readonly context: IRendererContext;
    protected readonly worldRenderer: WorldRenderer;
    width: number;
    height: number;
    private exploredMap;
    /**
     * Flag for marking that there are changes that need to be rendered in one or more tile layers
     */
    private dirty;
    private dirtyTiles;
    private dirtyDoodads;
    private readonly dirtyDoodadUpdates;
    private readonly tileLayers;
    private readonly tileLayerMap;
    private readonly tilesToFlush;
    private readonly doodadsToFlush;
    /**
     * Stores the light block map that was sent to the GPU
     */
    private lightBlockMapInGpu;
    /**
     * Terrain tiles
     */
    private terrainLayer;
    /**
     * Rendered over terrain tiles and over terrain decorations
     */
    private terrainCoverLayer;
    /**
     * Rendered over terrain tiles, but under terrain decorations
     */
    private terrainOverLayer;
    /**
     * Rendered over terrain tiles, but under doodads
     */
    private terrainDecorationsLayer;
    /**
     * Doodad objects such as trees
     */
    private doodadLayer;
    /**
     * Rendered after all sprites (includes top of trees)
     */
    private doodadOverLayer;
    private worldLayer;
    readonly rendererPlatform: IWorldLayerRendererPlatform;
    constructor(context: IRendererContext, worldRenderer: WorldRenderer);
    delete(): void;
    private deleteTileLayers;
    reset(): void;
    setWorldLayer(worldLayer: WorldLayer, exploredMapClientData: ExploredMapClientData): void;
    addTileLayer(tileLayer: ITileLayerRendererPlatform): void;
    updateAll(): void;
    updateDoodad({ x, y }: Tile, flushTileImmediately: boolean, { doodadDescription, doodadInfo, doodadVariationX, doodadVariationY, terrainMasks }: IDoodadUpdate): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFixedDepth: boolean, flags?: RenderLayerFlag): void;
    getDataIndex(x: number, y: number): number;
    /**
     * Ensures tiles in the view are rendered/flushed
     * Tiles & doodads are flushed the first time they are visible within the fov
     * @returns True when there's more rendering to be done
     */
    ensureRendered({ min, max }: IBound3, ignoreFieldOfView?: boolean): boolean;
    /**
     * Processes pending tile/doodad updates
     */
    private processUpdates;
    updateTile(tile: Tile, flushTileImmediately?: boolean, debug?: boolean): void;
    private computeDoodad;
    private computeTilled;
    private computeDug;
    private computeOverfished;
    private computeDecorations;
    private updateTileLightBlock;
    private flush;
}
