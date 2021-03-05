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
    DisplayLevel = 15,
    Doodad = 16,
    DoodadGroup = 17,
    DrawnMapTheme = 18,
    DurabilityLevel = 19,
    EquipEffect = 20,
    EquipSlot = 21,
    ExhaustionLevel = 22,
    FireStage = 23,
    GameEndMessage = 24,
    GameMode = 25,
    Growth = 26,
    GrowthFungus = 27,
    HelpArticle = 28,
    HighscoreSort = 29,
    HumanName = 30,
    Input = 31,
    InspectType = 32,
    Interrupt = 33,
    InterruptChoice = 34,
    Item = 35,
    ItemGroup = 36,
    JoinServerRetryReason = 37,
    Level = 38,
    Macro = 39,
    MagicalPropertyType = 40,
    MapQuality = 41,
    Message = 42,
    MessagesDefaultFilter = 43,
    MessagesTimestampMode = 44,
    Milestone = 45,
    MilestoneModifierGroup = 46,
    Misc = 47,
    ModLoadError = 48,
    ModLoadFailureReason = 49,
    ModProvide = 50,
    ModSort = 51,
    ModType = 52,
    MultiplayerCompatibility = 53,
    MultiplayerDisconnectReason = 54,
    MusicPlaylist = 55,
    Note = 56,
    NPC = 57,
    Number = 58,
    PartOfDay = 59,
    PowerMode = 60,
    QuadrantComponent = 61,
    QuadrantComponentContextMenuAction = 62,
    Quality = 63,
    Quest = 64,
    QuestRequirement = 65,
    RecipeLevel = 66,
    SaveSlotSort = 67,
    Skill = 68,
    Source = 69,
    Stat = 70,
    StatusEffect = 71,
    TeamMemberResponsibility = 72,
    Terrain = 73,
    TileEvent = 74,
    TravelingEffectStrategy = 75,
    Ui = 76,
    UiQuadrant = 77,
    UnableToJoinReason = 78,
    UnlockedRecipesStrategy = 79,
    Website = 80,
    WeightStatus = 81,
    WorldLayer = 82
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
    15: typeof InfoDisplayLevel;
    16: typeof DoodadType;
    17: typeof DoodadTypeGroup;
    18: typeof DrawnMapTheme;
    19: typeof DurabilityLevel;
    20: typeof EquipEffect;
    21: typeof EquipType;
    22: typeof ExhaustionLevel;
    23: typeof FireStage;
    24: typeof GameEndMessage;
    25: typeof GameMode;
    26: typeof GrowingStage;
    27: typeof GrowingStage;
    28: typeof HelpArticle;
    29: typeof HighscoreSort;
    30: typeof HumanName;
    31: symbol;
    32: typeof InspectType;
    33: typeof Interrupt;
    34: typeof InterruptChoice;
    35: typeof ItemType;
    36: typeof ItemTypeGroup;
    37: typeof JoinServerRetryReason;
    38: typeof Level;
    39: symbol;
    40: typeof MagicalPropertyType;
    41: typeof MapQuality;
    42: typeof Message;
    43: typeof MessageFilterDefault;
    44: typeof MessageTimestamp;
    45: typeof Milestone;
    46: typeof MilestoneModifierGroup;
    47: typeof MiscTranslation;
    48: typeof CanLoadState;
    49: typeof ModLoadFailureReason;
    50: typeof ModProvide;
    51: typeof ModSort;
    52: typeof ModType;
    53: typeof MultiplayerCompatibility;
    54: typeof DisconnectReason;
    55: typeof MusicPlaylist;
    56: typeof Note;
    57: typeof NPCType;
    58: symbol;
    59: typeof PartOfDay;
    60: typeof PowerMode;
    61: typeof QuadrantComponentId;
    62: typeof QuadrantComponentContextMenuAction;
    63: typeof Quality;
    64: typeof QuestType;
    65: typeof QuestRequirementType;
    66: typeof RecipeLevel;
    67: typeof SaveSort;
    68: typeof SkillType;
    69: typeof Source;
    70: typeof Stat;
    71: typeof StatusType;
    72: typeof Responsibility;
    73: typeof TerrainType;
    74: typeof TileEventType;
    75: typeof TravelingEffectStrategy;
    76: typeof UiTranslation;
    77: typeof Quadrant;
    78: typeof UnableToJoinReason;
    79: typeof UnlockedRecipesStrategy;
    80: typeof Website;
    81: typeof WeightStatus;
    82: typeof WorldZ;
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
} & Record<number, Enum | typeof SYMBOL_ANY_DICTIONARY | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;
