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
export interface ISpritePackSprite {
    filePath: string;
    width: number;
    height: number;
    data: Uint8Array;
}
export declare class SpritePack {
    private readonly filePath;
    static load(file: string): Promise<SpritePack>;
    readonly sprites: Map<string, ISpritePackSprite>;
    private constructor();
    private load;
}
