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
    Peaceful = 4,
    FearlessCreatures = 5,
    SpawnLimit = 6,
    SpawnRate = 7,
    Creatures = 8,
    OtherCreatures = 9,
    StartingBiome = 10,
    NoTravelEffects = 11,
    Luck = 12,
    Strength = 13,
    Health = 14,
    Stamina = 15,
    Hunger = 16,
    Thirst = 17,
    TileContainers = 18,
    NoStartingItems = 19,
    ItemDurability = 20,
    ItemDecay = 21,
    StartingSkills = 22,
    GlobalInitialSkillsValue = 23,
    GlobalSkillGainMultiplier = 24,
    Skills = 25,
    EternalDay = 26,
    EternalNight = 27,
    FrozenTime = 28,
    InitialTime = 29,
    DayLength = 30,
    DayPercent = 31,
    Bleeding = 32,
    Poisoned = 33,
    Burned = 34,
    SpecificCreatureAlwaysSpawns = 35,
    SpecificCreatureSpawningDisabled = 36,
    SpecificCreatureSpawns = 37,
    StatInitial = 38,
    StatMax = 39,
    StatMultiplier = 40,
    SpecificSkillInitial = 41,
    SpecificSkillGainMultiplier = 42,
    StatusInitial = 43,
    StatusUntreatable = 44,
    StatusPassChanceMultiplier = 45
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
