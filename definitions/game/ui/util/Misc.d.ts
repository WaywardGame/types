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
import type { IPlayOptions } from "@wayward/game/game/IGame";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import type { IServerMod } from "@wayward/hosts/shared/interfaces";
export declare function startGame(gameOptions: () => IPlayOptions): () => void;
export declare function startGame(gameOptions: IPlayOptions): void;
export declare enum ModLoadability {
    NotEnabled = "notenabled",
    Enabled = "enabled",
    NotFound = "notfound",
    Error = "error"
}
export declare function isModLoadable(publishFileIdOrServerModOrMod: string | IServerMod | ModInformation): [string, ModLoadability];
