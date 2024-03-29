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
import type { IServerMod } from "@hosts/shared/interfaces";
import type { IPlayOptions } from "game/IGame";
export declare function startGame(gameOptions: () => IPlayOptions): () => void;
export declare function startGame(gameOptions: IPlayOptions): void;
export declare enum ModLoadability {
    NotEnabled = "notenabled",
    Enabled = "enabled",
    NotFound = "notfound",
    Error = "error"
}
export declare function isModLoadable(publishFileId: string): [string, ModLoadability];
export declare function isModLoadable(mod: IServerMod): [string, ModLoadability];
export declare function isModLoadable(index: number): [string, ModLoadability];
