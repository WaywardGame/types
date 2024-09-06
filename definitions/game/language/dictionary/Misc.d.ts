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
export declare enum MiscTranslation {
    AAndB = 0,
    Aberrant = 1,
    Add = 2,
    Fraction = 3,
    AdditionalXs = 4,
    AListAndB = 5,
    AListOrB = 6,
    AOfB = 7,
    AOrB = 8,
    ASlashB = 9,
    Binding = 10,
    BindingInputModifierSeparator = 11,
    BindingListSeparator = 12,
    BindingMacroSeparator = 13,
    BindingWhenHoveringItem = 14,
    BOfA = 15,
    Classes = 16,
    Colorize = 17,
    ColorizeDamage = 18,
    ColorizeMagical = 19,
    ColorizeMessageType = 20,
    ColorizePrimary = 21,
    ColorizeQuality = 22,
    ColorizeSecondary = 23,
    ColorizeStat = 24,
    ColorizeVulnerability = 25,
    CorpseOf = 26,
    CountThing = 27,
    CountUnit = 28,
    Dependency = 29,
    Difference = 30,
    Dug = 31,
    EquipSlotEquipToYour = 32,
    ExpressionSeparator = 33,
    ListItemSeparator = 34,
    Merge = 35,
    MergeSlash = 36,
    MergeSpaced = 37,
    Multiply = 38,
    Negate = 39,
    NPCNameColor = 40,
    NPCNameUnmet = 41,
    NumberSingleDecimal = 42,
    Overfished = 43,
    Overline = 44,
    OwnName = 45,
    Parenthesized = 46,
    Percent = 47,
    PercentRaw = 48,
    PlayerName = 49,
    Possession = 50,
    QualityAffix = 51,
    Range = 52,
    ReformatSingularNoun = 53,
    Renamed = 54,
    Sentence = 55,
    Simplify = 56,
    Tile = 57,
    Tilled = 58,
    Undiscovered = 59,
    Unknown = 60,
    UnknownItem = 61,
    XUndiscovered = 62
}
export declare enum Term {
    Aberrant = 0,
    Action = 1,
    Attack = 2,
    DamageTick = 3,
    EveryX = 4,
    Hostile = 5,
    Movement = 6,
    NextX = 7,
    Normal = 8,
    Tamed = 9,
    TimeToX = 10,
    Turn = 11,
    UsingX = 12,
    XTick = 13,
    XtoYZ = 14,
    XY = 15
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
