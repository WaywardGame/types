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
import type Island from "game/island/Island";
import type EnumCursor from "utilities/enum/EnumCursor";
export interface IAudio {
    resetMusicHandler(): void;
    getMusicHandler(): EnumCursor<Music>;
    setMusicHandler(handler: EnumCursor<Music>): void;
    playMusic(): void;
    stopMusic(): void;
    processEffects(): void;
    queueEffect(soundEffect: SfxType, island: Island | undefined, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
    updateMusicSpeed(speed: number): void;
    updatePosition(): void;
    updateVolume(): void;
}
export default IAudio;
export declare enum SfxType {
    Bow = 0,
    Chat = 1,
    Click = 2,
    Craft = 3,
    CreatureHit = 4,
    CreatureNoise = 5,
    Damaged = 6,
    Death = 7,
    Eating = 8,
    Exceptional = 9,
    Extinguish = 10,
    Fail = 11,
    Hit = 12,
    Hurt = 13,
    Miss = 14,
    PickUp = 15,
    RockHit = 16,
    SandstoneHit = 17,
    Swim = 18,
    Throw = 19,
    Trample = 20,
    TreeHit = 21,
    UiActivate = 22,
    UiDisable = 23,
    UiEnable = 24,
    UiInput = 25,
    UiSelect = 26,
    Walk = 27,
    Water = 28
}
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
