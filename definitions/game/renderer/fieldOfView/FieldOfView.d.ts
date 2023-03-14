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
import type Player from "game/entity/player/Player";
import type CompiledProgram from "renderer/CompiledProgram";
import type { IFieldOfViewEvents, IFieldOfViewOrigin } from "renderer/fieldOfView/IFieldOfView";
import { CanASeeBType } from "renderer/fieldOfView/IFieldOfView";
import type ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import type RendererContext from "renderer/context/RendererContext";
import type WebGlContext from "renderer/WebGlContext";
import type WorldRenderer from "renderer/world/WorldRenderer";
import type { IBound3 } from "utilities/math/Bound3";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import type { IslandId } from "game/island/IIsland";
import type Human from "game/entity/Human";
export default class FieldOfView extends EventEmitter.Host<IFieldOfViewEvents> {
    protected readonly context: RendererContext;
    private readonly worldRenderer;
    radius: number;
    maxRadius: number;
    private readonly subdivisions;
    private static _instance;
    private static get instance();
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vector2;
    transitionProgress: number;
    private debugRenderer;
    hBlurProgram: CompiledProgram;
    private vBlurProgram;
    private shaderProgram;
    private framebuffer1;
    private framebuffer2;
    private texBlurStorage;
    private texLight01;
    private texLight02;
    private viewQuadBuffer;
    private viewQuadVertexArray;
    texLight: WebGLTexture | undefined;
    texLightOld: WebGLTexture | undefined;
    private seed;
    private transitionFinishTime;
    private lastComputedIslandId;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    static canSeePosition(origin: IFieldOfViewOrigin, type: CanASeeBType, islandId: IslandId, tileX: number, tileY: number, tileZ: number, fieldOfView?: FieldOfView | undefined, customRadius?: number): boolean;
    static getBounds(origin: IVector3, mapSize: number, radius: number): IBound3;
    /**
     * Gets the field of view radius based on either the field of view object, player, or the default value
     */
    static getRadius(fieldOfView: FieldOfView | undefined, human: Human | undefined): number;
    /**
     * Marks a set of tiles as exploreed
     */
    static markAsExplored(player: Player, tiles: IVector2[]): boolean;
    constructor(context: RendererContext, worldRenderer: WorldRenderer, radius: number, maxRadius: number, subdivisions?: number);
    delete(): void;
    initialize(): void;
    updateSeed(): void;
    updateRadius(player: Player): void;
    getTextureSize(): number;
    getSubdivisions(): number;
    tickSeed(): void;
    startTransition(timeStamp: number): void;
    updateTransitionProgress(timeStamp: number): boolean;
    resetTransitionProgress(): void;
    compute(timeStamp: number, force?: boolean, skipTransition?: boolean): boolean;
    createDebugRenderer(): ITextureDebugRenderer;
    /**
     * Updates the explored tiles around players
     * @param updateForGhosts Update field of ghosts too
     */
    updateExplored(updateForGhosts?: boolean): void;
    /**
     * Run this as clientside to ensure nothing desyncs
     * This prevents clientside only seed changes
     */
    private processExploredMapBounds;
    private computeLightMap;
}
