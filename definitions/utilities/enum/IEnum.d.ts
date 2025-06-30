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
export declare namespace EnumProperty {
    const NAME: unique symbol;
    const OFFICIAL_MAX: unique symbol;
    const MOD_START: unique symbol;
    const EXCLUDED: unique symbol;
    const KEYS: unique symbol;
    const VALUES: unique symbol;
    const LARGESTVALUE: unique symbol;
    const ENTRIES: unique symbol;
    const DEPENDANTS: unique symbol;
    const COMPUTE: unique symbol;
}
export type EnumObject<T> = T & {
    [EnumProperty.NAME]?: ArrayOr<string>;
    [EnumProperty.OFFICIAL_MAX]?: number;
    [EnumProperty.MOD_START]?: number;
    [EnumProperty.EXCLUDED]?: ReadonlySet<keyof T>;
    [EnumProperty.KEYS]?: ReadonlyArray<keyof T>;
    [EnumProperty.VALUES]?: ReadonlyArray<Exclude<T[keyof T], AnyFunction>>;
    [EnumProperty.LARGESTVALUE]?: number;
    [EnumProperty.ENTRIES]?: ReadonlyArray<[keyof T, Exclude<T[keyof T], AnyFunction>]>;
    [EnumProperty.DEPENDANTS]?: Set<WeakRef<any>>;
    [EnumProperty.COMPUTE]?(): void;
};
export declare namespace EnumObject {
    function get<E>(enumObject: E): EnumObject<E>;
    /**
     * Sets the enum keys that won't be iterated over in the enum.
     */
    function setExcluded<E>(enumObject: E, ...keys: Array<keyof E>): void;
    function clearCache(enumObject: any): void;
}
export declare enum EnumId {
    CreatureType = 0,
    Bindable = 1,
    ActionType = 2,
    ItemType = 3,
    TerrainType = 4,
    DoodadType = 5,
    Message = 6,
    SkillType = 7,
    HairStyle = 8,
    HairColor = 9,
    SkinColor = 10,
    Dictionary = 11,
    Music = 12,
    SoundEffect = 13,
    Command = 14,
    Stat = 15,
    Status = 16,
    MenuBarButton = 17,
    CorpseType = 18,
    TileEventType = 19,
    TileLayer = 20,
    OverlayType = 21,
    MessageSource = 22,
    NPCType = 23,
    HelpArticle = 24,
    Note = 25,
    Dialog = 26,
    InterruptChoice = 27,
    ItemTypeGroup = 28,
    InspectType = 29,
    Quest = 30,
    QuestRequirement = 31,
    TerrainDecoration = 32,
    Prompt = 33,
    Recipe = 34,
    DoodadTypeGroup = 35,
    WorldLayer = 36,
    Load = 37,
    QuadrantComponent = 38,
    Biome = 39,
    UsableActionType = 40,
    UsableActionTypePlaceholder = 41,
    MagicalProperty = 42,
    ItemTag = 43,
    DoodadTag = 44,
    EntityTag = 45,
    ItemTypeExtra = 46,
    DoodadTypeExtra = 47,
    EquipType = 48,
    TileGroup = 49,
    EnumId = 50
}
