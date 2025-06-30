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
import type { IProgramDescription } from "@wayward/game/renderer/platform/webgl/WebGlCompiledProgram";
import WebGlCompiledProgram from "@wayward/game/renderer/platform/webgl/WebGlCompiledProgram";
import ResourceLoader from "@wayward/game/resource/ResourceLoader";
export declare class WebGlContext {
    readonly id: number;
    readonly canvas: HTMLCanvasElement;
    readonly gl: WebGL2RenderingContext;
    readonly version: number;
    private readonly programs;
    readonly resourceLoader: ResourceLoader;
    constructor(id: number, canvas: HTMLCanvasElement, gl: WebGL2RenderingContext, version: number);
    delete(): void;
    /**
     * Initializes shaders and resource loader
     */
    initialize(): Promise<void>;
    /**
     * Completes once the context is ready for rendering
     */
    load(background?: boolean): Promise<void>;
    /**
     * Links game shaders to the context
     * @param webGlContext Webgl context
     */
    private configureShaders;
    initializeProgram(programDescription: IProgramDescription): Promise<WebGlCompiledProgram>;
    getProgram(programDescription: IProgramDescription): WebGlCompiledProgram;
    clearPrograms(): void;
    deletePrograms(): void;
    recompilePrograms(): Promise<void>;
}
