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
import { SpriteBatchBase } from "renderer/spriteBatch/SpriteBatchBase";
/**
 * SpriteBatch for WebGl 1
 */
export default class SpriteBatch1 extends SpriteBatchBase {
    setup(): void;
    bindBuffers(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
}
