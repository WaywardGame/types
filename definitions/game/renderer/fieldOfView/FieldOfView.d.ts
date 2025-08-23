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
import type Player from "@wayward/game/game/entity/player/Player";
import type { IFieldOfViewEvents, IFieldOfViewOrigin } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import { CanASeeBType } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IBound3 } from "@wayward/game/utilities/math/Bound3";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Human from "@wayward/game/game/entity/Human";
import type { IFieldOfViewPlatform } from "@wayward/game/renderer/fieldOfView/IFieldOfViewPlatform";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
import type { IFieldOfViewCPP } from "@wayward/cplusplus/index";
export declare class FieldOfView extends EventEmitter.Host<IFieldOfViewEvents> {
    protected readonly context: IRendererContext;
    private readonly worldRenderer;
    radius: number;
    maxRadius: number;
    private readonly subdivisions;
    private static _instance;
    static get instance(): IFieldOfViewCPP;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vector2;
    transitionProgress: number;
    private transitionMovementTime;
    private readonly transitioningExploredMap;
    private lastComputedIslandId;
    /** @returns 0-1 */
    static getLightLevel(origin: IFieldOfViewOrigin, islandId: IslandId, tileX: number, tileY: number, tileZ: number, fieldOfView?: FieldOfView | undefined): number;
    /**
     * Note: CanASeeBType.ClientSide is used to skip adding a sync check for the result
     */
    static canSeePosition(origin: IFieldOfViewOrigin, type: CanASeeBType, islandId: IslandId, tileX: number, tileY: number, tileZ: number, fieldOfView?: FieldOfView | undefined, customRadius?: number): boolean;
    static getBounds(origin: IVector3, mapSize: number, radius: number): IBound3;
    /**
     * Gets the field of view radius based on either the field of view object, player, or the default value
     */
    static getRadius(fieldOfView: FieldOfView | undefined, human: Human | undefined): number;
    /**
     * Marks a set of tiles as explored
     */
    readonly rendererPlatform: IFieldOfViewPlatform;
    constructor(context: IRendererContext, worldRenderer: WorldRenderer, radius: number, maxRadius: number, subdivisions?: number);
    delete(): void;
    initialize(): void;
    updateRadius(player: Player): void;
    getTextureSize(): number;
    getSubdivisions(): number;
    startTransition(timeStamp: number): void;
    updateTransitionProgress(timeStamp: number): boolean;
    resetTransitionProgress(): void;
    /**
     * Updates the explored map at the edge of the field of view. It becomes revealed as the player moves (from 0 -> 255 alpha).
     * Set both params to undefined to fully set in-progress transitions to fully revealed
     * @param timeStamp request animation frame timeout
     * @param movementTime local players movement
     */
    private processExploredMapTransition;
    compute(timeStamp: number, force?: boolean, skipTransition?: boolean): boolean;
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
}
