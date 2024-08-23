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
    AdditionalXs = 3,
    AListAndB = 4,
    AListOrB = 5,
    AOfB = 6,
    AOrB = 7,
    ASlashB = 8,
    Binding = 9,
    BindingInputModifierSeparator = 10,
    BindingListSeparator = 11,
    BindingMacroSeparator = 12,
    BindingWhenHoveringItem = 13,
    BOfA = 14,
    Classes = 15,
    Colorize = 16,
    ColorizeDamage = 17,
    ColorizeMagical = 18,
    ColorizeMessageType = 19,
    ColorizePrimary = 20,
    ColorizeQuality = 21,
    ColorizeSecondary = 22,
    ColorizeStat = 23,
    ColorizeVulnerability = 24,
    CorpseOf = 25,
    CountThing = 26,
    CountUnit = 27,
    Dependency = 28,
    Difference = 29,
    Dug = 30,
    EquipSlotEquipToYour = 31,
    ExpressionSeparator = 32,
    ListItemSeparator = 33,
    Merge = 34,
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
    UnknownItem = 60,
    XUndiscovered = 61
}
export declare enum Term {
    Aberrant = 0,
    Action = 1,
    DamageTick = 2,
    EveryX = 3,
    Hostile = 4,
    Movement = 5,
    NextX = 6,
    Normal = 7,
    Tamed = 8,
    TimeToX = 9,
    Turn = 10,
    UsingX = 11,
    XTick = 12,
    XtoYZ = 13,
    XY = 14,
    Attack = 15
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
