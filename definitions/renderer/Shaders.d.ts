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
export declare module Shaders {
    function load(): Promise<void>;
    function getOrCreate(gl: WebGL2RenderingContext, vertexName: string, fragmentName: string): CompiledProgram;
    function count(): number;
    function clear(): void;
    function recompile(): Promise<void>;
}
export declare class CompiledProgram {
    private readonly gl;
    private readonly vertexName;
    private readonly fragmentName;
    program: WebGLProgram;
    uniforms: Record<string, number>;
    attribs: Record<string, number>;
    private vs;
    private fs;
    private parallelShaderCompilation;
    constructor(gl: WebGL2RenderingContext, vertexName: string, fragmentName: string);
    initialize(): void;
    link(): Promise<void>;
    private compileShader;
}
