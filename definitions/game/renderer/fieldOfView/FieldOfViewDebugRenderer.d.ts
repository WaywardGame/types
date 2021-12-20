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
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import type ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import type RendererContext from "renderer/context/RendererContext";
export default class FieldOfViewDebugRenderer implements ITextureDebugRenderer {
    private readonly context;
    private readonly fov;
    private readonly gl;
    private readonly viewQuadBuffer;
    private readonly viewQuadBuffer2;
    private readonly shaderProgramAlphaDebug;
    constructor(context: RendererContext, fov: FieldOfView);
    renderDebug(): void;
}
