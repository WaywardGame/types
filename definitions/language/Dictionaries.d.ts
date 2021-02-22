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
import { Command } from "command/ICommand";
import { DoodadType, DoodadTypeGroup, GrowingStage } from "doodad/IDoodad";
import { MapQuality } from "entity/action/actions/map/MapQuality";
import { ActionType } from "entity/action/IAction";
import { CreatureType } from "entity/creature/ICreature";
import { DamageType, StatusType } from "entity/IEntity";
import { EquipType, SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { NPCType } from "entity/npc/INPCs";
import { Source } from "entity/player/IMessageManager";
import { WeightStatus } from "entity/player/IPlayer";
import { QuestType } from "entity/player/quest/quest/IQuest";
import { QuestRequirementType } from "entity/player/quest/requirement/IRequirement";
import { ExhaustionLevel } from "entity/status/handler/IExhausted";
import { BiomeType } from "game/IBiome";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InspectType } from "game/inspection/IInspection";
import { DurabilityLevel } from "game/inspection/infoProviders/doodad/IDurability";
import { Level } from "game/inspection/infoProviders/ILevel";
import { Quality } from "game/IObject";
import { MagicalPropertyType } from "game/MagicalPropertyType";
import { DrawnMapTheme } from "game/mapping/IMapRender";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, TravelingEffectStrategy, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import { PartOfDay } from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
import { BookType, EquipEffect, ItemType, ItemTypeGroup, RecipeLevel } from "item/IItem";
import { CraftEfficacy } from "item/recipe/Crafter";
import { GameEndMessage } from "language/dictionary/GameEndMessage";
import HumanName from "language/dictionary/HumanName";
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import { MultiplayerCompatibility } from "language/dictionary/MultiplayerCompatibility";
import Note from "language/dictionary/Note";
import UiTranslation from "language/dictionary/UiTranslation";
import { ModProvide, ModType } from "mod/IModInfo";
import { CanLoadState, ModLoadFailureReason } from "mod/IModManager";
import { DisconnectReason, JoinServerRetryReason, UnableToJoinReason } from "multiplayer/IMultiplayer";
import Bindable, { BindableType } from "newui/input/Bindable";
import { Quadrant, QuadrantComponentContextMenuAction } from "newui/screen/screens/game/component/IQuadrantComponent";
import { MessageTimestamp, QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "newui/screen/screens/game/IMessages";
import { CharacterSort } from "newui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "newui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Website } from "newui/screen/screens/menu/menus/main/component/IWebsite";
import { Responsibility } from "newui/screen/screens/menu/menus/main/IAbout";
import { ModSort } from "newui/screen/screens/menu/menus/mods/IModsMenu";
import { AutoSave, MusicPlaylist, PowerMode } from "save/data/ISaveDataGlobal";
import { SaveSort } from "save/ISaveManager";
import { FireStage } from "tile/events/IFire";
import { TerrainType } from "tile/ITerrain";
import { TileEventType } from "tile/ITileEvent";
import { ChangelogSection } from "utilities/Trello";
export declare enum Dictionary {
    Action = 0,
    AutoSave = 1,
    Bindable = 2,
    BindableType = 3,
    Biome = 4,
    Book = 5,
    Challenge = 6,
    ChangelogSection = 7,
    CharacterSort = 8,
    Command = 9,
    Corpse = 10,
    CraftEfficacy = 11,
    Creature = 12,
    DamageType = 13,
    DisplayLevel = 14,
    Doodad = 15,
    DoodadGroup = 16,
    DrawnMapTheme = 17,
    DurabilityLevel = 18,
    EquipEffect = 19,
    EquipSlot = 20,
    ExhaustionLevel = 21,
    FireStage = 22,
    GameEndMessage = 23,
    GameMode = 24,
    Growth = 25,
    GrowthFungus = 26,
    HelpArticle = 27,
    HighscoreSort = 28,
    HumanName = 29,
    Input = 30,
    InspectType = 31,
    Interrupt = 32,
    InterruptChoice = 33,
    Item = 34,
    ItemGroup = 35,
    JoinServerRetryReason = 36,
    Level = 37,
    Macro = 38,
    MagicalPropertyType = 39,
    MapQuality = 40,
    Message = 41,
    MessagesDefaultFilter = 42,
    MessagesTimestampMode = 43,
    Milestone = 44,
    MilestoneModifierGroup = 45,
    Misc = 46,
    ModLoadError = 47,
    ModLoadFailureReason = 48,
    ModProvide = 49,
    ModSort = 50,
    ModType = 51,
    MultiplayerCompatibility = 52,
    MultiplayerDisconnectReason = 53,
    MusicPlaylist = 54,
    Note = 55,
    NPC = 56,
    Number = 57,
    PartOfDay = 58,
    PowerMode = 59,
    QuadrantComponent = 60,
    QuadrantComponentContextMenuAction = 61,
    Quality = 62,
    Quest = 63,
    QuestRequirement = 64,
    RecipeLevel = 65,
    SaveSlotSort = 66,
    Skill = 67,
    Source = 68,
    Stat = 69,
    StatusEffect = 70,
    TeamMemberResponsibility = 71,
    Terrain = 72,
    TileEvent = 73,
    TravelingEffectStrategy = 74,
    Ui = 75,
    UiQuadrant = 76,
    UnableToJoinReason = 77,
    UnlockedRecipesStrategy = 78,
    Website = 79,
    WeightStatus = 80,
    WorldLayer = 81
}
export declare type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaryMap: {
    0: typeof ActionType;
    1: typeof AutoSave;
    2: typeof Bindable;
    3: typeof BindableType;
    4: typeof BiomeType;
    5: typeof BookType;
    6: typeof Challenge;
    7: typeof ChangelogSection;
    8: typeof CharacterSort;
    9: typeof Command;
    10: typeof CreatureType;
    11: typeof CraftEfficacy;
    12: typeof CreatureType;
    13: typeof DamageType;
    14: typeof InfoDisplayLevel;
    15: typeof DoodadType;
    16: typeof DoodadTypeGroup;
    17: typeof DrawnMapTheme;
    18: typeof DurabilityLevel;
    19: typeof EquipEffect;
    20: typeof EquipType;
    21: typeof ExhaustionLevel;
    22: typeof FireStage;
    23: typeof GameEndMessage;
    24: typeof GameMode;
    25: typeof GrowingStage;
    26: typeof GrowingStage;
    27: typeof HelpArticle;
    28: typeof HighscoreSort;
    29: typeof HumanName;
    30: symbol;
    31: typeof InspectType;
    32: typeof Interrupt;
    33: typeof InterruptChoice;
    34: typeof ItemType;
    35: typeof ItemTypeGroup;
    36: typeof JoinServerRetryReason;
    37: typeof Level;
    38: symbol;
    39: typeof MagicalPropertyType;
    40: typeof MapQuality;
    41: typeof Message;
    42: typeof MessageFilterDefault;
    43: typeof MessageTimestamp;
    44: typeof Milestone;
    45: typeof MilestoneModifierGroup;
    46: typeof MiscTranslation;
    47: typeof CanLoadState;
    48: typeof ModLoadFailureReason;
    49: typeof ModProvide;
    50: typeof ModSort;
    51: typeof ModType;
    52: typeof MultiplayerCompatibility;
    53: typeof DisconnectReason;
    54: typeof MusicPlaylist;
    55: typeof Note;
    56: typeof NPCType;
    57: symbol;
    58: typeof PartOfDay;
    59: typeof PowerMode;
    60: typeof QuadrantComponentId;
    61: typeof QuadrantComponentContextMenuAction;
    62: typeof Quality;
    63: typeof QuestType;
    64: typeof QuestRequirementType;
    65: typeof RecipeLevel;
    66: typeof SaveSort;
    67: typeof SkillType;
    68: typeof Source;
    69: typeof Stat;
    70: typeof StatusType;
    71: typeof Responsibility;
    72: typeof TerrainType;
    73: typeof TileEventType;
    74: typeof TravelingEffectStrategy;
    75: typeof UiTranslation;
    76: typeof Quadrant;
    77: typeof UnableToJoinReason;
    78: typeof UnlockedRecipesStrategy;
    79: typeof Website;
    80: typeof WeightStatus;
    81: typeof WorldZ;
};
export { dictionaryMap as strictDictionaries };
export declare type DictionaryEnum = (typeof dictionaryMap)[Dictionary];
declare function getByEnum(enumObject: DictionaryEnum): Dictionary;
declare const dictionaries: {
    0: Enum | typeof SYMBOL_ANY_DICTIONARY;
    1: Enum | typeof SYMBOL_ANY_DICTIONARY;
    2: Enum | typeof SYMBOL_ANY_DICTIONARY;
    3: Enum | typeof SYMBOL_ANY_DICTIONARY;
    4: Enum | typeof SYMBOL_ANY_DICTIONARY;
    5: Enum | typeof SYMBOL_ANY_DICTIONARY;
    6: Enum | typeof SYMBOL_ANY_DICTIONARY;
    7: Enum | typeof SYMBOL_ANY_DICTIONARY;
    8: Enum | typeof SYMBOL_ANY_DICTIONARY;
    9: Enum | typeof SYMBOL_ANY_DICTIONARY;
    10: Enum | typeof SYMBOL_ANY_DICTIONARY;
    11: Enum | typeof SYMBOL_ANY_DICTIONARY;
    12: Enum | typeof SYMBOL_ANY_DICTIONARY;
    13: Enum | typeof SYMBOL_ANY_DICTIONARY;
    14: Enum | typeof SYMBOL_ANY_DICTIONARY;
    15: Enum | typeof SYMBOL_ANY_DICTIONARY;
    16: Enum | typeof SYMBOL_ANY_DICTIONARY;
    17: Enum | typeof SYMBOL_ANY_DICTIONARY;
    18: Enum | typeof SYMBOL_ANY_DICTIONARY;
    19: Enum | typeof SYMBOL_ANY_DICTIONARY;
    20: Enum | typeof SYMBOL_ANY_DICTIONARY;
    21: Enum | typeof SYMBOL_ANY_DICTIONARY;
    22: Enum | typeof SYMBOL_ANY_DICTIONARY;
    23: Enum | typeof SYMBOL_ANY_DICTIONARY;
    24: Enum | typeof SYMBOL_ANY_DICTIONARY;
    25: Enum | typeof SYMBOL_ANY_DICTIONARY;
    26: Enum | typeof SYMBOL_ANY_DICTIONARY;
    27: Enum | typeof SYMBOL_ANY_DICTIONARY;
    28: Enum | typeof SYMBOL_ANY_DICTIONARY;
    29: Enum | typeof SYMBOL_ANY_DICTIONARY;
    30: Enum | typeof SYMBOL_ANY_DICTIONARY;
    31: Enum | typeof SYMBOL_ANY_DICTIONARY;
    32: Enum | typeof SYMBOL_ANY_DICTIONARY;
    33: Enum | typeof SYMBOL_ANY_DICTIONARY;
    34: Enum | typeof SYMBOL_ANY_DICTIONARY;
    35: Enum | typeof SYMBOL_ANY_DICTIONARY;
    36: Enum | typeof SYMBOL_ANY_DICTIONARY;
    37: Enum | typeof SYMBOL_ANY_DICTIONARY;
    38: Enum | typeof SYMBOL_ANY_DICTIONARY;
    39: Enum | typeof SYMBOL_ANY_DICTIONARY;
    40: Enum | typeof SYMBOL_ANY_DICTIONARY;
    41: Enum | typeof SYMBOL_ANY_DICTIONARY;
    42: Enum | typeof SYMBOL_ANY_DICTIONARY;
    43: Enum | typeof SYMBOL_ANY_DICTIONARY;
    44: Enum | typeof SYMBOL_ANY_DICTIONARY;
    45: Enum | typeof SYMBOL_ANY_DICTIONARY;
    46: Enum | typeof SYMBOL_ANY_DICTIONARY;
    47: Enum | typeof SYMBOL_ANY_DICTIONARY;
    48: Enum | typeof SYMBOL_ANY_DICTIONARY;
    49: Enum | typeof SYMBOL_ANY_DICTIONARY;
    50: Enum | typeof SYMBOL_ANY_DICTIONARY;
    51: Enum | typeof SYMBOL_ANY_DICTIONARY;
    52: Enum | typeof SYMBOL_ANY_DICTIONARY;
    53: Enum | typeof SYMBOL_ANY_DICTIONARY;
    54: Enum | typeof SYMBOL_ANY_DICTIONARY;
    55: Enum | typeof SYMBOL_ANY_DICTIONARY;
    56: Enum | typeof SYMBOL_ANY_DICTIONARY;
    57: Enum | typeof SYMBOL_ANY_DICTIONARY;
    58: Enum | typeof SYMBOL_ANY_DICTIONARY;
    59: Enum | typeof SYMBOL_ANY_DICTIONARY;
    60: Enum | typeof SYMBOL_ANY_DICTIONARY;
    61: Enum | typeof SYMBOL_ANY_DICTIONARY;
    62: Enum | typeof SYMBOL_ANY_DICTIONARY;
    63: Enum | typeof SYMBOL_ANY_DICTIONARY;
    64: Enum | typeof SYMBOL_ANY_DICTIONARY;
    65: Enum | typeof SYMBOL_ANY_DICTIONARY;
    66: Enum | typeof SYMBOL_ANY_DICTIONARY;
    67: Enum | typeof SYMBOL_ANY_DICTIONARY;
    68: Enum | typeof SYMBOL_ANY_DICTIONARY;
    69: Enum | typeof SYMBOL_ANY_DICTIONARY;
    70: Enum | typeof SYMBOL_ANY_DICTIONARY;
    71: Enum | typeof SYMBOL_ANY_DICTIONARY;
    72: Enum | typeof SYMBOL_ANY_DICTIONARY;
    73: Enum | typeof SYMBOL_ANY_DICTIONARY;
    74: Enum | typeof SYMBOL_ANY_DICTIONARY;
    75: Enum | typeof SYMBOL_ANY_DICTIONARY;
    76: Enum | typeof SYMBOL_ANY_DICTIONARY;
    77: Enum | typeof SYMBOL_ANY_DICTIONARY;
    78: Enum | typeof SYMBOL_ANY_DICTIONARY;
    79: Enum | typeof SYMBOL_ANY_DICTIONARY;
    80: Enum | typeof SYMBOL_ANY_DICTIONARY;
    81: Enum | typeof SYMBOL_ANY_DICTIONARY;
} & Record<number, Enum | typeof SYMBOL_ANY_DICTIONARY | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;
