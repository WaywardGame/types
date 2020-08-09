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
import Entity from "entity/Entity";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import IFieldOfView, { CanASeeBType } from "renderer/fieldofview/IFieldOfView";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { CompiledProgram } from "renderer/Shaders";
import { IBound3 } from "utilities/math/Bound3";
import { IVector2 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
export interface IFieldOfViewEvents {
    getPlayerFieldOfViewRadius(radius: number, player: Player): number;
}
export default class FieldOfView extends EventEmitter.Host<IFieldOfViewEvents> implements IFieldOfView {
    private gl;
    radius: number;
    maxRadius: number;
    private readonly subdivisions;
    static hBlurProgram: CompiledProgram;
    static vBlurProgram: CompiledProgram;
    private static shaderProgram;
    private static readonly instance;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vector2;
    transitionProgress: number;
    private debugRenderer;
    private texLight01;
    private texLight02;
    private texBlurStorage;
    private framebuffer1;
    private framebuffer2;
    private viewQuadVertexArray;
    private viewQuadBuffer;
    private seed;
    private transitionFinishTime;
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(gl: WebGL2RenderingContext, radius: number, maxRadius: number, subdivisions?: number);
    resetGl(gl: WebGL2RenderingContext): void;
    updateRadius(player?: Player): void;
    getTextureSize(): number;
    getSubdivisions(): number;
    tickSeed(): void;
    updateTransitionProgress(timeStamp: number): boolean;
    resetTransitionProgress(): void;
    compute(timeStamp: number, force?: boolean): void;
    createDebugRenderer(): ITextureDebugRenderer;
    canASeeB(type: CanASeeBType, sourceEntity: Entity | undefined, aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number): boolean;
    getBounds(player: Player, radius?: number): IBound3;
    markAsExplored(player: Player, tiles: IVector2[]): boolean;
    private updateExplored;
    private computeLights;
}
