/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export declare enum SfxType {
    Boat = 0,
    Bow = 1,
    Chat = 2,
    Craft = 3,
    CreatureHit = 4,
    CreatureNoise = 5,
    Damaged = 6,
    DangerousMove = 7,
    Death = 8,
    Eating = 9,
    Exceptional = 10,
    Extinguish = 11,
    Fail = 12,
    GraniteHit = 13,
    Hit = 14,
    Hurt = 15,
    Minecart = 16,
    Miss = 17,
    PickUp = 18,
    SandstoneHit = 19,
    Swim = 20,
    Throw = 21,
    Trample = 22,
    TreeHit = 23,
    UiActivate = 24,
    UiChoose = 25,
    UiClose = 26,
    UiDisable = 27,
    UiEnable = 28,
    UiInput = 29,
    UiInputdelete = 30,
    UiInvalid = 31,
    UiOpen = 32,
    UiOpensmall = 33,
    UiProtect = 34,
    UiSelect = 35,
    UiUnprotect = 36,
    Walk = 37,
    Water = 38
}
export type SfxUi = Extract<keyof typeof SfxType, `Ui${string}`> extends `Ui${infer RESULT}` ? Lowercase<RESULT> : never;
export declare enum Music {
    Shipwrecked = 0,
    OpeningTheme = 1,
    DarkerWorld = 2,
    Crux = 3,
    TheFirstSpark = 4,
    HauntingInterlude = 5,
    NomadsHeartBeat = 6,
    LootStep = 7,
    PerilsOfPlunder = 8,
    DreamInterlude = 9,
    TheWildBorn = 10,
    NightOwl = 11,
    SurvivalInstinct = 12,
    Savage = 13,
    Underworld = 14,
    ThirdSunrise = 15,
    WistfulInterlude = 16,
    ShudderSounds = 17
}
