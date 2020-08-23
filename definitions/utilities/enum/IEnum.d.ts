/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export declare module EnumProperty {
    const NAME: unique symbol;
    const OFFICIAL_MAX: unique symbol;
    const MOD_START: unique symbol;
    const EXCLUDED: unique symbol;
    const KEYS: unique symbol;
    const VALUES: unique symbol;
    const ENTRIES: unique symbol;
}
export declare type EnumObject<T> = T & {
    [EnumProperty.NAME]?: string;
    [EnumProperty.OFFICIAL_MAX]?: number;
    [EnumProperty.MOD_START]?: number;
    [EnumProperty.EXCLUDED]?: ReadonlySet<keyof T>;
    [EnumProperty.KEYS]?: ReadonlyArray<keyof T>;
    [EnumProperty.VALUES]?: ReadonlyArray<T[keyof T]>;
    [EnumProperty.ENTRIES]?: ReadonlyArray<[keyof T, T[keyof T]]>;
};
export declare module EnumObject {
    function get<E>(enumObject: E): EnumObject<E>;
    /**
     * Sets the enum keys that won't be iterated over in the enum.
     */
    function setExcluded<E>(enumObject: E, ...keys: Array<keyof E>): void;
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
    StatusEffect = 16,
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
    Interrupt = 33,
    Recipe = 34,
    DoodadTypeGroup = 35,
    WorldLayer = 36
}
