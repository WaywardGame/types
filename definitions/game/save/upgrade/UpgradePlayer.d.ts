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
import type { Game } from "@wayward/game/game/Game";
import type Player from "@wayward/game/game/entity/player/Player";
import UpgradesArray from "@wayward/game/save/upgrade/UpgradesArray";
import type Version from "@wayward/utilities/Version";
export default function upgradePlayer(game: Game, player: Player, saveVersion: Version.Info, isLocalPlayer: boolean): UpgradesArray;
/**
 * Called after loading item & tile references
 */
export declare function upgradePlayerAfterLoadingReferences(player: Player, isAbsentPlayer: boolean): string[];
