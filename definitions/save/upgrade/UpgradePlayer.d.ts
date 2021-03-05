/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Player from "game/entity/player/Player";
import { IVersionInfo } from "utilities/Version";
export default function upgradePlayer(player: Player, saveVersion: IVersionInfo): string[];
/**
 * Called after loading item & tile references
 */
export declare function upgradePlayerAfterLoadingReferences(player: Player, isAbsentPlayer: boolean): string[];
