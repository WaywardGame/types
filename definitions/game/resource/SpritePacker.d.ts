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
import type ISpriteInfo from "renderer/ISpriteInfo";
import type ResourceLoader from "resource/ResourceLoader";
import Vector2 from "utilities/math/Vector2";
export default class SpritePacker {
    private readonly resourceLoader;
    private readonly gl;
    readonly size: number;
    private readonly addNullSprite;
    private readonly packLargeToSmall;
    readonly texture: WebGLTexture;
    readonly inverseTextureSize: Vector2;
    private readonly rootNode;
    private spriteLoadCount;
    private readonly sprites;
    private readonly loadedSprites;
    private loadPromise;
    constructor(resourceLoader: ResourceLoader, gl: WebGL2RenderingContext, size: number, addNullSprite: boolean, packLargeToSmall?: boolean);
    delete(): void;
    get loadedSpriteCount(): number;
    load(): Promise<boolean>;
    addSprite(src: string, frontPack?: boolean): Promise<ISpriteInfo>;
    private loadSprite;
    private spriteLoaded;
    private complete;
    private pack;
    private packSprite;
}
