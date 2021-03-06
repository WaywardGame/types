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
import ISpriteInfo from "renderer/ISpriteInfo";
import { SpritePack } from "resource/SpritePack";
import Vector2 from "utilities/math/Vector2";
interface ISpriteImage {
    width?: number;
    height?: number;
    imageOrBuffer?: HTMLImageElement | ArrayBuffer;
    src: string;
    padding: number;
    animated?: boolean;
    callback(si: ISpriteInfo, spriteImage?: ISpriteImage): void;
}
export default class SpritePacker {
    private readonly spritePack;
    private readonly gl;
    readonly size: number;
    private readonly nullSprite;
    private readonly padding;
    private readonly packLargeToSmall;
    private static readonly cachedImages;
    readonly texture: WebGLTexture;
    readonly inverseTextureSize: Vector2;
    private readonly rootNode;
    private spriteLoadCount;
    private readonly sprites;
    private readonly loadedSprites;
    private loadPromise;
    constructor(spritePack: SpritePack, gl: WebGL2RenderingContext, size: number, nullSprite: boolean, padding: number, packLargeToSmall?: boolean);
    delete(): void;
    load(): Promise<boolean>;
    addSprite(src: string, callback: (si: ISpriteInfo, spriteImage?: ISpriteImage) => void): void;
    private loadSprite;
    private spriteLoaded;
    private complete;
    private pack;
    private packSprite;
}
export {};
