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
import { BiomeType } from "game/biome/IBiome";
import { DoodadType, DoodadTypeGroup, GrowingStage } from "game/doodad/IDoodad";
import { MapQuality } from "game/entity/action/actions/map/MapQuality";
import { ActionType } from "game/entity/action/IAction";
import { CreatureType } from "game/entity/creature/ICreature";
import { DamageType, StatusType } from "game/entity/IEntity";
import { EquipType, SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import { NPCType } from "game/entity/npc/INPCs";
import { Source } from "game/entity/player/IMessageManager";
import { WeightStatus } from "game/entity/player/IPlayer";
import { QuestType } from "game/entity/player/quest/quest/IQuest";
import { QuestRequirementType } from "game/entity/player/quest/requirement/IRequirement";
import { BadTemperatureLevel } from "game/entity/status/handler/IBadTemperature";
import { ExhaustionLevel } from "game/entity/status/handler/IExhausted";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InspectType } from "game/inspection/IInspection";
import { DurabilityLevel } from "game/inspection/infoProviders/doodad/IDurability";
import { Level } from "game/inspection/infoProviders/ILevel";
import { Quality } from "game/IObject";
import { BookType, EquipEffect, ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import { CraftEfficacy } from "game/item/recipe/Crafter";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import { DrawnMapTheme } from "game/mapping/IMapRender";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, TravelingEffectStrategy, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import Riddle from "game/riddle/Riddle";
import { TempType } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import { TerrainType } from "game/tile/ITerrain";
import { TileEventType } from "game/tile/ITileEvent";
import { PartOfDay } from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
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
import { AutoSave, MusicPlaylist, PowerMode } from "save/data/ISaveDataGlobal";
import { SaveSort } from "save/ISaveManager";
import Bindable, { BindableType } from "ui/input/Bindable";
import { Quadrant, QuadrantComponentContextMenuAction } from "ui/screen/screens/game/component/IQuadrantComponent";
import { MessageTimestamp, QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "ui/screen/screens/game/IMessages";
import { CharacterSort } from "ui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "ui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Website } from "ui/screen/screens/menu/menus/main/component/IWebsite";
import { Responsibility } from "ui/screen/screens/menu/menus/main/IAbout";
import { ModSort } from "ui/screen/screens/menu/menus/mods/IModsMenu";
import { Direction } from "utilities/math/Direction";
import { ChangelogSection } from "utilities/Trello";
export declare enum Dictionary {
    Action = 0,
    AutoSave = 1,
    BadTemperature = 2,
    Bindable = 3,
    BindableType = 4,
    Biome = 5,
    Book = 6,
    Challenge = 7,
    ChangelogSection = 8,
    CharacterSort = 9,
    Command = 10,
    Corpse = 11,
    CraftEfficacy = 12,
    Creature = 13,
    DamageType = 14,
    Direction = 15,
    DisplayLevel = 16,
    Doodad = 17,
    DoodadGroup = 18,
    DrawnMapTheme = 19,
    DurabilityLevel = 20,
    EquipEffect = 21,
    EquipSlot = 22,
    ExhaustionLevel = 23,
    FireStage = 24,
    GameEndMessage = 25,
    GameMode = 26,
    Growth = 27,
    GrowthFungus = 28,
    HelpArticle = 29,
    HighscoreSort = 30,
    HumanName = 31,
    Input = 32,
    InspectType = 33,
    Interrupt = 34,
    InterruptChoice = 35,
    Item = 36,
    ItemGroup = 37,
    JoinServerRetryReason = 38,
    Level = 39,
    Macro = 40,
    MagicalPropertyType = 41,
    MapQuality = 42,
    Message = 43,
    MessagesDefaultFilter = 44,
    MessagesTimestampMode = 45,
    Milestone = 46,
    MilestoneModifierGroup = 47,
    Misc = 48,
    ModLoadError = 49,
    ModLoadFailureReason = 50,
    ModProvide = 51,
    ModSort = 52,
    ModType = 53,
    MultiplayerCompatibility = 54,
    MultiplayerDisconnectReason = 55,
    MusicPlaylist = 56,
    Note = 57,
    NPC = 58,
    Number = 59,
    PartOfDay = 60,
    PowerMode = 61,
    QuadrantComponent = 62,
    QuadrantComponentContextMenuAction = 63,
    Quality = 64,
    Quest = 65,
    QuestRequirement = 66,
    RecipeLevel = 67,
    Riddle = 68,
    SaveSlotSort = 69,
    Skill = 70,
    Source = 71,
    Stat = 72,
    StatusEffect = 73,
    TeamMemberResponsibility = 74,
    TemperatureType = 75,
    Terrain = 76,
    TileEvent = 77,
    TravelingEffectStrategy = 78,
    Ui = 79,
    UiQuadrant = 80,
    UnableToJoinReason = 81,
    UnlockedRecipesStrategy = 82,
    Website = 83,
    WeightStatus = 84,
    WorldLayer = 85
}
export declare type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaryMap: {
    0: typeof ActionType;
    1: typeof AutoSave;
    2: typeof BadTemperatureLevel;
    3: typeof Bindable;
    4: typeof BindableType;
    5: typeof BiomeType;
    6: typeof BookType;
    7: typeof Challenge;
    8: typeof ChangelogSection;
    9: typeof CharacterSort;
    10: typeof Command;
    11: typeof CreatureType;
    12: typeof CraftEfficacy;
    13: typeof CreatureType;
    14: typeof DamageType;
    15: typeof Direction;
    16: typeof InfoDisplayLevel;
    17: typeof DoodadType;
    18: typeof DoodadTypeGroup;
    19: typeof DrawnMapTheme;
    20: typeof DurabilityLevel;
    21: typeof EquipEffect;
    22: typeof EquipType;
    23: typeof ExhaustionLevel;
    24: typeof FireStage;
    25: typeof GameEndMessage;
    26: typeof GameMode;
    27: typeof GrowingStage;
    28: typeof GrowingStage;
    29: typeof HelpArticle;
    30: typeof HighscoreSort;
    31: typeof HumanName;
    32: symbol;
    33: typeof InspectType;
    34: typeof Interrupt;
    35: typeof InterruptChoice;
    36: typeof ItemType;
    37: typeof ItemTypeGroup;
    38: typeof JoinServerRetryReason;
    39: typeof Level;
    40: symbol;
    41: typeof MagicalPropertyType;
    42: typeof MapQuality;
    43: typeof Message;
    44: typeof MessageFilterDefault;
    45: typeof MessageTimestamp;
    46: typeof Milestone;
    47: typeof MilestoneModifierGroup;
    48: typeof MiscTranslation;
    49: typeof CanLoadState;
    50: typeof ModLoadFailureReason;
    51: typeof ModProvide;
    52: typeof ModSort;
    53: typeof ModType;
    54: typeof MultiplayerCompatibility;
    55: typeof DisconnectReason;
    56: typeof MusicPlaylist;
    57: typeof Note;
    58: typeof NPCType;
    59: symbol;
    60: typeof PartOfDay;
    61: typeof PowerMode;
    62: typeof QuadrantComponentId;
    63: typeof QuadrantComponentContextMenuAction;
    64: typeof Quality;
    65: typeof QuestType;
    66: typeof QuestRequirementType;
    67: typeof RecipeLevel;
    68: typeof Riddle;
    69: typeof SaveSort;
    70: typeof SkillType;
    71: typeof Source;
    72: typeof Stat;
    73: typeof StatusType;
    74: typeof Responsibility;
    75: typeof TempType;
    76: typeof TerrainType;
    77: typeof TileEventType;
    78: typeof TravelingEffectStrategy;
    79: typeof UiTranslation;
    80: typeof Quadrant;
    81: typeof UnableToJoinReason;
    82: typeof UnlockedRecipesStrategy;
    83: typeof Website;
    84: typeof WeightStatus;
    85: typeof WorldZ;
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
    82: Enum | typeof SYMBOL_ANY_DICTIONARY;
    83: Enum | typeof SYMBOL_ANY_DICTIONARY;
    84: Enum | typeof SYMBOL_ANY_DICTIONARY;
    85: Enum | typeof SYMBOL_ANY_DICTIONARY;
} & Record<number, Enum | typeof SYMBOL_ANY_DICTIONARY | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;
