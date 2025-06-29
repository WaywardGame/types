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
import type { ISpriteContainer } from "@wayward/game/renderer/resources/ISpritePacker";
export declare class SpriteAtlasNode {
    readonly x: number;
    readonly y: number;
    private readonly width;
    private readonly height;
    private used?;
    constructor(x: number, y: number, width: number, height: number);
    insert(spriteImage: ISpriteContainer | undefined, spriteWidth: number, spriteHeight: number): SpriteAtlasNode | undefined;
}
