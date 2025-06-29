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
import type { ISpriteInfo } from "@wayward/game/renderer/ISpriteInfo";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { Parallel } from "@wayward/utilities/promise/Parallel";
import type { ISpriteContainer, ISpritePackerPlatform } from "@wayward/game/renderer/resources/ISpritePacker";
import { SpriteAtlasNode } from "@wayward/game/renderer/resources/SpriteAtlasNode";
export declare abstract class SpritePackerBase<TextureType> implements ISpritePackerPlatform<TextureType> {
    readonly size: number;
    private readonly addNullSprite;
    private readonly packLargeToSmall;
    abstract readonly texture: TextureType;
    readonly inverseTextureSize: Vector2;
    private readonly rootNode;
    private readonly spriteContainers;
    private readonly loadedSprites;
    constructor(size: number, addNullSprite: boolean, packLargeToSmall?: boolean);
    abstract delete(): void;
    get loadedSpriteCount(): number;
    load(parallel: Parallel): Promise<boolean>;
    addSprite(src: string, frontPack?: boolean): Promise<ISpriteInfo>;
    private loadSprite;
    private pack;
    private packSprite;
    protected abstract insertSpriteIntoTexture(node: SpriteAtlasNode, spriteContainer: ISpriteContainer): void;
}
