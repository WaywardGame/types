/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import EnumCursor from "utilities/enum/EnumCursor";
export interface IAudio {
    resetMusicHandler(): void;
    getMusicHandler(): EnumCursor<Music>;
    setMusicHandler(handler: EnumCursor<Music>): void;
    playMusic(): void;
    stopMusic(): void;
    processEffects(): void;
    queueEffect(soundEffect: SfxType, x: number, y: number, z: number, delay?: number, speed?: number, noPosition?: boolean): void;
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
    Fail = 10,
    Hit = 11,
    Hurt = 12,
    Miss = 13,
    PickUp = 14,
    RockHit = 15,
    SandstoneHit = 16,
    Swim = 17,
    Throw = 18,
    Trample = 19,
    TreeHit = 20,
    UiActivate = 21,
    UiDisable = 22,
    UiEnable = 23,
    UiInput = 24,
    UiSelect = 25,
    Walk = 26,
    Water = 27
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
