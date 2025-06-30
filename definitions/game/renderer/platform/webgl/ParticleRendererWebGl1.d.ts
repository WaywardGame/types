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
import type { WebGlRendererContext } from "@wayward/game/renderer/platform/webgl/WebGlRendererContext";
import type { IParticleRendererPlatform } from "@wayward/game/renderer/particle/IParticleRendererPlatform";
import type { IProgramDescription } from "@wayward/game/renderer/platform/webgl/WebGlCompiledProgram";
import type { WebGlContext } from "@wayward/game/renderer/platform/webgl/WebGlContext";
export declare const particleRendererShaderProgramDescription: IProgramDescription;
/**
 * Particle renderer for webgl 1
 */
export declare class ParticleRendererWebGl1 implements IParticleRendererPlatform {
    private readonly context;
    private readonly positionSizeData;
    private readonly colorData;
    private readonly shaderProgram;
    private readonly positionSizeBuffer;
    private readonly colorBuffer;
    static initializePrograms(webGlContext: WebGlContext): Promise<void>;
    constructor(context: WebGlRendererContext, maxParticles: number, positionSizeData: Float32Array, colorData: Uint8Array);
    delete(): void;
    render(x: number, y: number, count: number): boolean;
}
