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
import { SfxType } from "@wayward/game/audio/IAudio";
declare enum Deity {
    Single = -2,
    All = -1,
    None = 0,
    Evil = 1,
    Chaos = 2,
    Good = 3
}
export default Deity;
export type DeityReal = Exclude<Deity, Deity.All | Deity.Single | Deity.None>;
export declare namespace DeityReal {
    function is(value: unknown): value is DeityReal;
}
export declare enum DeityDiscovery {
}
export declare const DEITY_ENEMIES: PartialRecord<DeityReal, DeityReal>;
export declare const DEITY_SOUNDS: PartialRecord<DeityReal, SfxType>;
export declare function getDeityEnemies(deity: ArrayOr<DeityReal>, orElse?: ArrayOr<DeityReal>): ArrayOr<DeityReal>;
