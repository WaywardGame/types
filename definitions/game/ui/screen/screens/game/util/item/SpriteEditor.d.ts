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
import type { ItemType, ItemTypeExtra } from "@wayward/game/game/item/IItem";
import DataCache from "@wayward/game/ui/util/DataCache";
import type { IRGB, IRGBA } from "@wayward/utilities/Color";
interface ISprite {
    id: string;
    dataUrl: string;
}
export interface ISpriteEditorFilters {
    glowColors?: IRGBA[];
    opacity?: number;
    /**
     * 0 = current saturation, 1 = full grayscale
     */
    grayscale?: number;
    /**
     * 0 = black, 1 = current colour, 2 = white
     */
    brightness?: number;
}
export default class SpriteEditor {
    static readonly CACHE: DataCache<ISprite>;
    static readonly CACHE_COMMON_COLORS: DataCache<IRGB>;
    private static getVersion;
    private static getGitVersionID;
    static save(): Promise<void>;
    static getMostCommonColor(path: string): Promise<IRGB | undefined>;
    static getMostCommonItemColor(item: ItemType | ItemTypeExtra): Promise<IRGB | undefined>;
    private readonly data;
    private readonly canvas;
    private readonly context;
    constructor();
    /**
     * Clears the cache of sprites from the user's database.
     */
    clearCache(): Promise<void>;
    /**
     * Releases a cache of data used for generation.
     */
    releaseGenerationImageDataCache(): void;
    render(path: string, filters?: ISpriteEditorFilters, signal?: AbortSignal): Promise<string>;
    private renderInternal;
    private renderGlow;
}
export {};
