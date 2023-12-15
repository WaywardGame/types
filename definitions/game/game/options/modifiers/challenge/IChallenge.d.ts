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
import type { StatusType } from "@wayward/game/game/entity/IEntity";
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
    StartingEvilAlignment = 9,
    GoodAlignmentRate = 10,
    EvilAlignmentRate = 11,
    BiomeWetlands = 12,
    BiomeArid = 13,
    BiomeIceCap = 14,
    BiomeVolcanic = 15,
    Cursed = 16,
    Sunset = 17,
    SlitherSucker = 18
}
export declare function isPermanentEffect(effect: StatusType, options: IGameOptionsPlayer): boolean;
export declare function isEternal(time: number): (options?: IGameOptions) => boolean;
export declare function getMultiplierChallengeValue(multiplier: number, value?: number): number;
export declare function getDailyChallengeSeed(): number;
