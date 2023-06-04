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
import type Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import Version from "utilities/Version";
export default function upgradePlayer(game: Game, player: Player, saveVersion: Version.Info, isLocalPlayer: boolean): string[];
/**
 * Called after loading item & tile references
 */
export declare function upgradePlayerAfterLoadingReferences(player: Player, isAbsentPlayer: boolean): string[];
