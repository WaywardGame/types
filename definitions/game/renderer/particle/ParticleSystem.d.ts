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
import type RendererContext from "renderer/context/RendererContext";
import type WebGlContext from "renderer/WebGlContext";
import type WorldRenderer from "renderer/world/WorldRenderer";
import type { IRGB } from "utilities/Color";
import type Tile from "game/tile/Tile";
export default class ParticleSystem {
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
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: RendererContext, worldRenderer: WorldRenderer, maxParticles?: number);
    delete(): void;
    create(tile: Tile, particle: IRGB, count?: number, intensity?: number): number[] | undefined;
    clear(): void;
    update(timeStamp: number): void;
    render(x: number, y: number): boolean;
    private findUnusedParticle;
    private spawn;
}
