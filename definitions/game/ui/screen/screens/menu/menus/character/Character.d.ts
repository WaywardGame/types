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
import type { ICharacter } from "@wayward/game/game/entity/IHuman";
export interface ISavedCharacter extends ICharacter {
    lastUse: number;
    useCount: number;
}
export declare enum CharacterSort {
    LastUse = 0,
    Name = 1,
    UseCount = 2
}
