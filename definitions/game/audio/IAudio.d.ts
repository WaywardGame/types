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
    Click = 3,
    Craft = 4,
    CreatureHit = 5,
    CreatureNoise = 6,
    Damaged = 7,
    DangerousMove = 8,
    Death = 9,
    Eating = 10,
    Exceptional = 11,
    Extinguish = 12,
    Fail = 13,
    GraniteHit = 14,
    Hit = 15,
    Hurt = 16,
    Minecart = 17,
    Miss = 18,
    PickUp = 19,
    SandstoneHit = 20,
    Swim = 21,
    Throw = 22,
    Trample = 23,
    TreeHit = 24,
    UiActivate = 25,
    UiChoose = 26,
    UiClose = 27,
    UiDisable = 28,
    UiEnable = 29,
    UiInput = 30,
    UiInputdelete = 31,
    UiInvalid = 32,
    UiOpen = 33,
    UiOpensmall = 34,
    UiProtect = 35,
    UiSelect = 36,
    UiUnprotect = 37,
    Walk = 38,
    Water = 39
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
