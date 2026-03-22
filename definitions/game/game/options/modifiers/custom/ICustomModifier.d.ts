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
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type { RandomReference } from "@wayward/game/utilities/random/RandomReference";
import type { RandomInstance } from "@wayward/utilities/random/IRandom";
export declare enum CustomModifierType {
    Respawn = 0,
    RecipesNone = 1,
    RecipesAll = 2,
    NoCurseEvents = 3,
    InitialCurse = 4,
    Peaceful = 5,
    FearlessCreatures = 6,
    SpawnLimit = 7,
    SpawnRate = 8,
    Creatures = 9,
    OtherCreatures = 10,
    StartingBiome = 11,
    NoTravelEffects = 12,
    Luck = 13,
    Strength = 14,
    Health = 15,
    Stamina = 16,
    Hunger = 17,
    Thirst = 18,
    TileContainers = 19,
    NoStartingItems = 20,
    ItemDurability = 21,
    ItemDecay = 22,
    StartingSkills = 23,
    GlobalInitialSkillsValue = 24,
    GlobalSkillGainMultiplier = 25,
    Skills = 26,
    EternalDay = 27,
    EternalNight = 28,
    FrozenTime = 29,
    InitialTime = 30,
    DayLength = 31,
    DayPercent = 32,
    Bleeding = 33,
    Poisoned = 34,
    Burned = 35,
    SpecificCreatureAlwaysSpawns = 36,
    SpecificCreatureSpawningDisabled = 37,
    SpecificCreatureSpawns = 38,
    StatInitial = 39,
    StatMax = 40,
    StatMultiplier = 41,
    SpecificSkillInitial = 42,
    SpecificSkillGainMultiplier = 43,
    StatusInitial = 44,
    StatusUntreatable = 45,
    StatusPassChanceMultiplier = 46
}
export interface CustomModifierTranslationGroup {
    label: Translation;
    group: Translation[];
}
export type CustomModifierTranslation = Translation | CustomModifierTranslationGroup;
export interface CustomModifierDefinition<ARGS extends any[] = []> {
    parse?(options: IGameOptionsPartial): ARGS["length"] extends 1 ? ArrayOr<ARGS[0]> | undefined : ARGS | undefined;
    options: SupplierOr<IGameOptionsPartial, [...ARGS, random: RandomInstance | RandomReference]>;
    /** Incompatible with `translationArgs` */
    translate?(options: IGameOptionsPartial): ArrayOr<CustomModifierTranslation> | undefined;
    /** Incompatible with `translate` */
    translationArgs?(options: IGameOptionsPartial): TranslationArg[] | undefined;
}
export declare function CustomModifierDefinition<ARGS extends any[] = []>(definition: CustomModifierDefinition<ARGS>): CustomModifierDefinition<ARGS>;
export declare function SimpleCustomModifierDefinition(options: IGameOptionsPartial): CustomModifierDefinition;
