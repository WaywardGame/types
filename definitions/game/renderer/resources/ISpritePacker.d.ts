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
import type { ISpritePackSprite } from "@wayward/game/resource/SpritePack";
import type Vector2 from "@wayward/game/utilities/math/Vector2";
import type { Parallel } from "@wayward/utilities/promise/Parallel";
import type ResolvablePromise from "@wayward/utilities/promise/ResolvablePromise";
export interface ISpritePackerPlatform<TextureType = unknown> {
    readonly size: number;
    readonly loadedSpriteCount: number;
    readonly inverseTextureSize: Vector2;
    readonly texture: TextureType;
    delete(): void;
    load(parallel: Parallel): Promise<boolean>;
    addSprite(src: string, frontPack?: boolean): Promise<ISpriteInfo>;
}
export interface ISpriteContainer {
    src: string;
    promise: ResolvablePromise<ISpriteInfo>;
    animated?: boolean;
    frontPack?: boolean;
    sprite?: ISpritePackSprite;
}
