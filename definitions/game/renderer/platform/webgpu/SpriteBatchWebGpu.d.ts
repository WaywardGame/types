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
import type { WebGpuRendererContext } from "@wayward/game/renderer/platform/webgpu/WebGpuRendererContext";
import type { ISpriteBatch } from "@wayward/game/renderer/spriteBatch/ISpriteBatch";
export declare class SpriteBatchWebGpu implements ISpriteBatch {
    private readonly context;
    readonly id: string;
    capacity: number;
    private readonly enforceBeginAndEnd;
    private pipeline;
    private projectionViewBindGroup;
    private textureBindGroup;
    private projectionViewMatrixBuffer;
    private readonly vertexData;
    private readonly vertexBuffer;
    private readonly indexBuffer;
    private begun;
    private spriteCount;
    constructor(context: WebGpuRendererContext, id: string, capacity: number, depthOffset: number, yOffset: number, enableAlphaMultiplcation: boolean, enforceBeginAndEnd: boolean);
    private initializePipeline;
    delete(): void;
    begin(): void;
    end(): number;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): number | undefined;
    update(index: number, tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number | undefined, offsetY?: number | undefined, red?: number | undefined, green?: number | undefined, blue?: number | undefined, alpha?: number | undefined): void;
    remove(index: number): boolean;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number, blend?: boolean | undefined): void;
}
