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
import type { WorldRenderer } from "@wayward/game/renderer/world/WorldRenderer";
import type { IRGB } from "@wayward/utilities/Color";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IRendererContext } from "@wayward/game/renderer/context/IRendererContext";
export declare class ParticleSystem {
    private readonly context;
    private readonly worldRenderer;
    private readonly maxParticles;
    readonly particles: Float32Array;
    readonly dataPerParticle = 10;
    private readonly positionSizeData;
    private readonly colorData;
    private count;
    private lastUsedParticle;
    private nextUpdate;
    private readonly renderer;
    constructor(context: IRendererContext, worldRenderer: WorldRenderer, maxParticles?: number);
    delete(): void;
    create(tile: Tile, particle: IRGB, count?: number, intensity?: number): number[] | undefined;
    clear(): void;
    /**
     * Updates particles (ticks their life)
     * @returns True if there may be particles to render, false if there are definitely no particles
     */
    private update;
    render(timeStamp: number, x: number, y: number): boolean;
    private findUnusedParticle;
    private spawn;
}
