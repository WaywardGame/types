/*!
 * Copyright 2011-2024 Unlok
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
    Description = 1
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
    ColorizeMagical = 15,
    ColorizeMessageType = 16,
    ColorizePrimary = 17,
    ColorizeQuality = 18,
    ColorizeSecondary = 19,
    ColorizeStat = 20,
    ColorizeVulnerability = 21,
    CorpseOf = 22,
    CountThing = 23,
    CountUnit = 24,
    Dependency = 25,
    Difference = 26,
    Dug = 27,
    EquipSlotEquipToYour = 28,
    ExpressionSeparator = 29,
    Fraction = 30,
    ListItemSeparator = 31,
    Merge = 32,
    MergeNewlines = 33,
    MergeSlash = 34,
    MergeSpaced = 35,
    Multiply = 36,
    Negate = 37,
    NPCNameColor = 38,
    NPCNameUnmet = 39,
    NumberSingleDecimal = 40,
    Overfished = 41,
    Overline = 42,
    OwnName = 43,
    Parenthesized = 44,
    Percent = 45,
    PercentRaw = 46,
    PlayerName = 47,
    Possession = 48,
    QualityAffix = 49,
    Range = 50,
    ReformatSingularNoun = 51,
    Renamed = 52,
    Sentence = 53,
    Simplify = 54,
    Tile = 55,
    Tilled = 56,
    Undiscovered = 57,
    Unknown = 58,
    UnknownItem = 59
}
export declare enum Term {
    Aberrant = 0,
    Action = 1,
    Attack = 2,
    DamageTick = 3,
    Effect = 4,
    EveryX = 5,
    Hostile = 6,
    Movement = 7,
    NextX = 8,
    Normal = 9,
    Tamed = 10,
    TimeToX = 11,
    Turn = 12,
    Undiscovered = 13,
    UsingX = 14,
    XTick = 15,
    XtoYZ = 16,
    XUndiscovered = 17,
    XY = 18
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
