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
export declare enum BindableTranslation {
    Name = 0,
    Description = 1
}
export declare enum CreatureTranslation {
    Name = 0,
    Description = 1
}
export declare enum DoodadTranslation {
    Name = 0,
    Description = 1
}
export declare enum DoodadItemTranslation {
    Name = 0,
    Description = 1
}
export declare enum TileEventTranslation {
    Name = 0,
    Description = 1
}
export declare enum ItemTranslation {
    Name = 0,
    Description = 1
}
export declare enum SkillTranslation {
    Name = 0,
    Title = 1,
    Description = 2
}
export declare enum StatTranslation {
    Name = 0,
    Abbreviation = 1,
    Description = 2
}
export declare enum BookTranslation {
    Title = 0,
    Text = 1
}
export declare enum MilestoneTranslation {
    Name = 0,
    UnlockRequirement = 1,
    ModifierEffect = 2
}
export declare enum ActionTranslation {
    Name = 0,
    Verb = 1,
    Description = 2,
    TierDescription = 3
}
export declare enum UsableActionTranslation {
    Name = 0,
    Verb = 1,
    Description = 2
}
export declare enum EquipSlotTranslation {
    Name = 0,
    EquipTo = 1,
    Description = 2
}
export declare enum StatusTranslation {
    Adjective = 0,
    Name = 1,
    Description = 2
}
export declare enum CurseEventTranslation {
    Name = 0,
    Description = 1
}
export type StatusTranslationTuple = [adjective: string, name: string, description?: string];
export declare enum QuestTranslation {
    Title = 0,
    Description = 1
}
export declare enum MusicPlaylistTranslation {
    Name = 0,
    Tooltip = 1
}
export declare enum SteamInputKeyboardPositionTranslation {
    Name = 0,
    Tooltip = 1
}
export declare enum DifficultyTranslation {
    Name = 0,
    Description = 1
}
export declare enum PromptTranslation {
    Title = 0,
    Description = 1
}
export declare enum LoadingTranslation {
    Title = 0,
    Description = 1
}
export declare enum MagicalPropertyTranslation {
    Name = 0,
    CurseName = 1,
    Description = 2
}
export declare enum ContainerSortTranslation {
    Verbose = 0,
    Simple = 1
}
export declare enum DeityTranslation {
    Name = 0,
    Description = 1
}
export declare enum QualityTranslation {
    Name = 0,
    Description = 1
}
export declare enum RunekeeperDomainTranslation {
    Name = 0,
    Domain = 1
}
export declare enum DamageTypeTranslation {
    Name = 0,
    Description = 1
}
export declare enum MagicalPropertyAffixTranslation {
    Adjective = 0,
    Name = 1
}
export declare enum CustomModifierTypeTranslation {
    Title = 0,
    Description = 1
}
export declare enum MiscTranslation {
    AAndB = 0,
    Aberrant = 1,
    Add = 2,
    AdditionalXs = 3,
    AListAndB = 4,
    AListOrB = 5,
    AOrB = 6,
    ASlashB = 7,//#used in Debug Tools
    BindingInputModifierSeparator = 8,
    BindingListSeparator = 9,
    BindingMacroSeparator = 10,
    BindingWhenHoveringItem = 11,
    BOfA = 12,
    Classes = 13,
    ColorizeDamage = 14,
    ColorizeEvil = 15,
    ColorizeMagical = 16,
    ColorizeMessageType = 17,
    ColorizePrimary = 18,
    ColorizeQuality = 19,
    ColorizeSecondary = 20,
    ColorizeStat = 21,
    ColorizeVulnerability = 22,
    CorpseOf = 23,
    CountThing = 24,
    CountUnit = 25,
    Dependency = 26,
    Difference = 27,
    Dug = 28,
    EquipSlotEquipToYour = 29,
    ExpressionSeparator = 30,
    Fraction = 31,
    ListItemSeparator = 32,
    Merge = 33,
    MergeNewlines = 34,
    MergeSlash = 35,
    MergeSpaced = 36,
    Multiply = 37,
    Negate = 38,
    NPCNameColor = 39,
    NPCNameUnmet = 40,
    NumberSingleDecimal = 41,
    Overfished = 42,
    Overline = 43,
    OwnName = 44,
    Parenthesized = 45,
    Percent = 46,
    PercentRaw = 47,
    PlayerName = 48,
    Possession = 49,
    QualityAffix = 50,
    Range = 51,
    ReformatSingularNoun = 52,
    Renamed = 53,
    Sentence = 54,
    Simplify = 55,
    Tile = 56,
    Tilled = 57,
    Undiscovered = 58,
    Unknown = 59,
    UnknownItem = 60
}
export declare enum Term {
    Aberrant = 0,
    Action = 1,
    Attack = 2,
    BeRewardedByX = 3,
    CraftingDifficulty = 4,
    CraftingMagicChance = 5,
    DamageTick = 6,
    Effect = 7,
    EveryX = 8,
    GainX = 9,
    Hostile = 10,
    Movement = 11,
    NextX = 12,
    Normal = 13,
    Tamed = 14,
    TimeToX = 15,
    Turn = 16,
    Undiscovered = 17,
    UsingX = 18,
    XGain = 19,
    XReward = 20,
    XTick = 21,
    XtoYZ = 22,
    XUndiscovered = 23,
    XY = 24
}
export declare enum Label {
    LabelColonValue = 0,
    LabelParensValue = 1,
    LabelSpaceValue = 2,
    LabelDashValue = 3,
    ValueSpaceLabel = 4,
    ValueParensLabel = 5,
    ValueLabel = 6
}
