/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Player from "@wayward/game/game/entity/player/Player";
import type { Game } from "@wayward/game/game/Game";
import type Island from "@wayward/game/game/island/Island";
import type { IGameOptions } from "@wayward/game/game/options/IGameOptions";
import type { UpgradesArrayCompressedPusher } from "@wayward/game/save/upgrade/UpgradesArray";
import type Version from "@wayward/game/utilities/Version";
export interface IUpgradeVersion {
    applies(version: Version.Info): boolean;
    upgradeGlobal?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher): any;
    upgradeGame?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, game: Game): any;
    upgradeIsland?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, island: Island): any;
    upgradePlayer?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, player: Player, isLocalPlayer: boolean, game: Game): any;
    upgradeGameOptions?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, options: IGameOptions, defaultOptions: IGameOptions): any;
}
export type UpgradeType = Exclude<keyof IUpgradeVersion, "applies">;
export type UpgradeParameters<TYPE extends UpgradeType> = Required<IUpgradeVersion>[TYPE] extends (_v: any, _u: any, ...params: infer PARAMS) => any ? PARAMS : never;
export declare function oldify<CURRENT, OLD>(current: CURRENT): Merge<CURRENT, Partial<OLD>>;
export default function (definition: IUpgradeVersion): IUpgradeVersion;
