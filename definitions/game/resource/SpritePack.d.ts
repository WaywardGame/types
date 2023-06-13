/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
interface ISpritePackSprite {
    width: number;
    height: number;
    data: Uint8Array | HTMLImageElement;
}
declare class SpritePack {
    private readonly filePath;
    readonly sprites: Map<string, ISpritePackSprite>;
    private loadPromise;
    constructor(filePath: string);
    clear(): void;
    load(): Promise<void>;
    private _load;
}
export declare const spritePack: SpritePack;
export {};
