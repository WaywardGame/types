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
export interface IProgramDescription {
    vertexName: string;
    fragmentName: string;
}
export default class WebGlCompiledProgram {
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
    delete(): void;
    initialize(): void;
    link(): Promise<void>;
    private compileShader;
}
