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
import type { ISpriteBatch } from "@wayward/game/renderer/spriteBatch/ISpriteBatch";
/**
 * A sprite batch that doesn't reset on each frame.
 * Works similar to tile layers (tile / doodad rendering)
 */
export declare class PersistantSpriteBatch implements ISpriteBatch {
    readonly spriteBatch: ISpriteBatch;
    private _dirty;
    private readonly _freeIndexes;
    constructor(spriteBatch: ISpriteBatch);
    get capacity(): number;
    delete(): void;
    begin(): void;
    end(): number;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number | undefined, offsetY?: number | undefined, red?: number | undefined, green?: number | undefined, blue?: number | undefined, alpha?: number | undefined): number | undefined;
    update(index: number, tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, offsetX?: number, offsetY?: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    remove(index: number): boolean;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
