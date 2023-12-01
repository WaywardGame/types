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
    DeityEvil = 9,
    DeityGood = 10,
    DeityNeutral = 11,
    DeityNone = 12,
    Eating = 13,
    Encumbered = 14,
    Exceptional = 15,
    Extinguish = 16,
    Fail = 17,
    GraniteHit = 18,
    Hit = 19,
    Hurt = 20,
    Minecart = 21,
    Miss = 22,
    Overburdened = 23,
    PickUp = 24,
    SandstoneHit = 25,
    Slip = 26,
    Swim = 27,
    Throw = 28,
    Trample = 29,
    TreeHit = 30,
    UiActivate = 31,
    UiChoose = 32,
    UiClose = 33,
    UiDisable = 34,
    UiEnable = 35,
    UiEquip = 36,
    UiInput = 37,
    UiInputdelete = 38,
    UiInvalid = 39,
    UiOpen = 40,
    UiOpensmall = 41,
    UiProtect = 42,
    UiReorder = 43,
    UiSelect = 44,
    UiSort = 45,
    UiStack = 46,
    UiTrade = 47,
    UiUnequip = 48,
    UiUnprotect = 49,
    UiUnstack = 50,
    Walk = 51,
    Water = 52,
    Wheelbarrow = 53
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
