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
import { DrawnMapTheme } from "game/mapping/IMapRender";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, TravelingEffectStrategy, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import { PartOfDay } from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
import { BookType, EquipEffect, ItemType, ItemTypeGroup, MagicalPropertyType, RecipeLevel } from "item/IItem";
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
    EquipEffect = 18,
    EquipSlot = 19,
    ExhaustionLevel = 20,
    FireStage = 21,
    GameEndMessage = 22,
    GameMode = 23,
    Growth = 24,
    GrowthFungus = 25,
    HelpArticle = 26,
    HighscoreSort = 27,
    HumanName = 28,
    Input = 29,
    InspectType = 30,
    Interrupt = 31,
    InterruptChoice = 32,
    Item = 33,
    ItemGroup = 34,
    JoinServerRetryReason = 35,
    Macro = 36,
    MagicalPropertyType = 37,
    Message = 38,
    MessagesDefaultFilter = 39,
    MessagesTimestampMode = 40,
    Milestone = 41,
    MilestoneModifierGroup = 42,
    Misc = 43,
    ModLoadError = 44,
    ModLoadFailureReason = 45,
    ModProvide = 46,
    ModSort = 47,
    ModType = 48,
    MultiplayerCompatibility = 49,
    MultiplayerDisconnectReason = 50,
    MusicPlaylist = 51,
    Note = 52,
    NPC = 53,
    Number = 54,
    PartOfDay = 55,
    PowerMode = 56,
    Level = 57,
    QuadrantComponent = 58,
    QuadrantComponentContextMenuAction = 59,
    Quality = 60,
    Quest = 61,
    QuestRequirement = 62,
    RecipeLevel = 63,
    SaveSlotSort = 64,
    Skill = 65,
    Source = 66,
    Stat = 67,
    StatusEffect = 68,
    TeamMemberResponsibility = 69,
    Terrain = 70,
    TileEvent = 71,
    TravelingEffectStrategy = 72,
    Ui = 73,
    UiQuadrant = 74,
    UnableToJoinReason = 75,
    UnlockedRecipesStrategy = 76,
    Website = 77,
    WeightStatus = 78,
    WorldLayer = 79,
    DurabilityLevel = 80
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
    18: typeof EquipEffect;
    19: typeof EquipType;
    20: typeof ExhaustionLevel;
    21: typeof FireStage;
    22: typeof GameEndMessage;
    23: typeof GameMode;
    24: typeof GrowingStage;
    25: typeof GrowingStage;
    26: typeof HelpArticle;
    27: typeof HighscoreSort;
    28: typeof HumanName;
    29: symbol;
    30: typeof InspectType;
    31: typeof Interrupt;
    32: typeof InterruptChoice;
    33: typeof ItemType;
    34: typeof ItemTypeGroup;
    35: typeof JoinServerRetryReason;
    36: symbol;
    37: typeof MagicalPropertyType;
    38: typeof Message;
    39: typeof MessageFilterDefault;
    40: typeof MessageTimestamp;
    41: typeof Milestone;
    42: typeof MilestoneModifierGroup;
    43: typeof MiscTranslation;
    44: typeof CanLoadState;
    45: typeof ModLoadFailureReason;
    46: typeof ModProvide;
    47: typeof ModSort;
    48: typeof ModType;
    49: typeof MultiplayerCompatibility;
    50: typeof DisconnectReason;
    51: typeof MusicPlaylist;
    52: typeof Note;
    53: typeof NPCType;
    54: symbol;
    55: typeof PartOfDay;
    56: typeof PowerMode;
    57: typeof Level;
    80: typeof DurabilityLevel;
    58: typeof QuadrantComponentId;
    59: typeof QuadrantComponentContextMenuAction;
    60: typeof Quality;
    61: typeof QuestType;
    62: typeof QuestRequirementType;
    63: typeof RecipeLevel;
    64: typeof SaveSort;
    65: typeof SkillType;
    66: typeof Source;
    67: typeof Stat;
    68: typeof StatusType;
    69: typeof Responsibility;
    70: typeof TerrainType;
    71: typeof TileEventType;
    72: typeof TravelingEffectStrategy;
    73: typeof UiTranslation;
    74: typeof Quadrant;
    75: typeof UnableToJoinReason;
    76: typeof UnlockedRecipesStrategy;
    77: typeof Website;
    78: typeof WeightStatus;
    79: typeof WorldZ;
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
} & Record<number, Enum | typeof SYMBOL_ANY_DICTIONARY | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;
