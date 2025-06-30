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
import type { IParticleRendererPlatform } from "@wayward/game/renderer/particle/IParticleRendererPlatform";
import type { WebGpuRendererContext } from "@wayward/game/renderer/platform/webgpu/WebGpuRendererContext";
export declare class ParticleRendererWebGpu implements IParticleRendererPlatform {
    constructor(context: WebGpuRendererContext, maxParticles: number, dataArray: Float32Array, colorArray: Uint8Array);
    delete(): void;
    render(x: number, y: number, count: number): void;
}
