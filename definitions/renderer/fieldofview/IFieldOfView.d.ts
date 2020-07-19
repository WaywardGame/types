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
import Player from "entity/player/Player";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IBound3 } from "utilities/math/Bound3";
import Vector2 from "utilities/math/Vector2";
export interface IFieldOfView {
    blurEnabled: boolean;
    computeOffset: Vector2;
    disabled: boolean;
    readonly maxRadius: number;
    readonly radius: number;
    readonly transitionProgress: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, lightLevel?: number): boolean;
    compute(timeStamp: number, force?: boolean): void;
    createDebugRenderer(): ITextureDebugRenderer;
    getBounds(player: Player, radius?: number): IBound3;
    getSubdivisions(): number;
    getTextureSize(): number;
    resetGl(gl: WebGL2RenderingContext): void;
    tickSeed(): void;
    updateTransitionProgress(timeStamp: number): boolean;
    resetTransitionProgress(): void;
}
export default IFieldOfView;
