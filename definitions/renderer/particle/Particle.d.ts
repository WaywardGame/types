/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IParticle } from "renderer/particle/IParticle";
import { IRGB } from "utilities/Color";
export default class Particle implements IParticle {
    private readonly gl;
    private static shaderProgram;
    private count;
    private readonly capacity;
    private readonly positionSizeBuf;
    private readonly colorBuf;
    private readonly particles;
    private readonly positionSizeData;
    private readonly colorData;
    private readonly particleSize;
    private lastUsedParticle;
    private readonly vertexArray;
    static createShaders(gl: WebGL2RenderingContext): void;
    static linkShaders(): Promise<void>;
    constructor(gl: WebGL2RenderingContext, maxParticles?: number);
    create(tileX: number, tileY: number, tileZ: number, particle: IRGB): void;
    createMultiple(tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number, intensity?: number, ignoreFieldOfView?: boolean): void;
    clear(): void;
    simulate(): void;
    render(x: number, y: number): boolean;
    private findUnusedParticle;
    private spawn;
}
