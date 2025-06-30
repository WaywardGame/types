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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface ICanvasSpriteCacheEvents {
    load(): any;
}
export declare class CanvasSpriteCache extends EventEmitter.Host<ICanvasSpriteCacheEvents> {
    private readonly cache;
    private loading;
    constructor();
    get(path: string): HTMLImageElement | Promise<HTMLImageElement | undefined> | null;
    waitFor(path: string): Promise<HTMLImageElement | null | undefined>;
    private loadSprite;
}
