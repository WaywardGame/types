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
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { IGameOptions, IGameOptionsPlayer } from "@wayward/game/game/options/IGameOptions";
export declare enum Challenge {
    NoHealthRegeneration = 0,
    NoStaminaRegeneration = 1,
    EternalNight = 2,
    ThirstRate = 3,
    HungerRate = 4,
    PermanentlyBleeding = 5,
    PermanentlyBurning = 6,
    PermanentlyPoisoned = 7,
    NoStartingItems = 8,
    BiomeWetlands = 9,
    BiomeArid = 10,
    BiomeIceCap = 11,
    BiomeVolcanic = 12,
    Sunset = 13,
    SlitherSucker = 14,
    Cursed = 15
}
export declare function isPermanentEffect(statusType: StatusType, options: IGameOptionsPlayer): boolean;
export declare function isEternal(time: number): (options?: IGameOptions) => boolean;
export declare function getMultiplierChallengeValue(multiplier: number, value?: number): number;
export declare function getDailyChallengeSeed(): number;
