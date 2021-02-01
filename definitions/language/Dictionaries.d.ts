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
import { Quality } from "game/IObject";
import { DrawnMapTheme } from "game/mapping/IMapRender";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, TravelingEffectStrategy, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import { PartOfDay } from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
import { BookType, EquipEffect, ItemType, ItemTypeGroup, MagicalPropertyType } from "item/IItem";
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
    QuadrantComponent = 57,
    QuadrantComponentContextMenuAction = 58,
    Quality = 59,
    Quest = 60,
    QuestRequirement = 61,
    SaveSlotSort = 62,
    Skill = 63,
    Source = 64,
    Stat = 65,
    StatusEffect = 66,
    TeamMemberResponsibility = 67,
    Terrain = 68,
    TileEvent = 69,
    TravelingEffectStrategy = 70,
    Ui = 71,
    UiQuadrant = 72,
    UnableToJoinReason = 73,
    UnlockedRecipesStrategy = 74,
    Website = 75,
    WeightStatus = 76,
    WorldLayer = 77
}
export declare type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaries: {
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
    57: typeof QuadrantComponentId;
    58: typeof QuadrantComponentContextMenuAction;
    59: typeof Quality;
    60: typeof QuestType;
    61: typeof QuestRequirementType;
    62: typeof SaveSort;
    63: typeof SkillType;
    64: typeof Source;
    65: typeof Stat;
    66: typeof StatusType;
    67: typeof Responsibility;
    68: typeof TerrainType;
    69: typeof TileEventType;
    70: typeof TravelingEffectStrategy;
    71: typeof UiTranslation;
    72: typeof Quadrant;
    73: typeof UnableToJoinReason;
    74: typeof UnlockedRecipesStrategy;
    75: typeof Website;
    76: typeof WeightStatus;
    77: typeof WorldZ;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
