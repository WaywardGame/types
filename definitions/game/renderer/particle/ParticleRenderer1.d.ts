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
import type RendererContext from "renderer/context/RendererContext";
import type { IParticleRenderer } from "renderer/particle/IParticleRenderer";
/**
 * Particle renderer for webgl 1
 */
export declare class ParticleRenderer1 implements IParticleRenderer {
    private readonly context;
    private readonly positionSizeData;
    private readonly colorData;
    private readonly shaderProgram;
    private readonly positionSizeBuffer;
    private readonly colorBuffer;
    constructor(context: RendererContext, maxParticles: number, positionSizeData: Float32Array, colorData: Uint8Array);
    delete(): void;
    render(x: number, y: number, count: number): boolean;
}
