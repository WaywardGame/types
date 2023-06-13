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
import type FlowFieldManager from "game/entity/flowfield/FlowFieldManager";
import type ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
export default class FlowFieldDebugRenderer implements ITextureDebugRenderer {
    private readonly ff;
    private readonly gl;
    private readonly viewQuadBuffer;
    private readonly shaderProgramAlphaDebug;
    private readonly tex;
    private readonly field;
    constructor(gl: WebGL2RenderingContext, ff: FlowFieldManager);
    update(): void;
    renderDebug(): void;
}
