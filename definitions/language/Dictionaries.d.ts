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
    Doodad = 14,
    DoodadGroup = 15,
    DrawnMapTheme = 16,
    EquipEffect = 17,
    EquipSlot = 18,
    ExhaustionLevel = 19,
    FireStage = 20,
    GameEndMessage = 21,
    GameMode = 22,
    Growth = 23,
    GrowthFungus = 24,
    HelpArticle = 25,
    HighscoreSort = 26,
    HumanName = 27,
    Input = 28,
    InspectType = 29,
    Interrupt = 30,
    InterruptChoice = 31,
    Item = 32,
    ItemGroup = 33,
    JoinServerRetryReason = 34,
    Macro = 35,
    MagicalPropertyType = 36,
    Message = 37,
    MessagesDefaultFilter = 38,
    MessagesTimestampMode = 39,
    Milestone = 40,
    MilestoneModifierGroup = 41,
    Misc = 42,
    ModLoadError = 43,
    ModLoadFailureReason = 44,
    ModProvide = 45,
    ModSort = 46,
    ModType = 47,
    MultiplayerCompatibility = 48,
    MultiplayerDisconnectReason = 49,
    MusicPlaylist = 50,
    Note = 51,
    NPC = 52,
    Number = 53,
    PartOfDay = 54,
    PowerMode = 55,
    QuadrantComponent = 56,
    QuadrantComponentContextMenuAction = 57,
    Quality = 58,
    Quest = 59,
    QuestRequirement = 60,
    SaveSlotSort = 61,
    Skill = 62,
    Source = 63,
    Stat = 64,
    StatusEffect = 65,
    TeamMemberResponsibility = 66,
    Terrain = 67,
    TileEvent = 68,
    TravelingEffectStrategy = 69,
    Ui = 70,
    UiQuadrant = 71,
    UnableToJoinReason = 72,
    UnlockedRecipesStrategy = 73,
    Website = 74,
    WeightStatus = 75,
    WorldLayer = 76
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
    14: typeof DoodadType;
    15: typeof DoodadTypeGroup;
    16: typeof DrawnMapTheme;
    17: typeof EquipEffect;
    18: typeof EquipType;
    19: typeof ExhaustionLevel;
    20: typeof FireStage;
    21: typeof GameEndMessage;
    22: typeof GameMode;
    23: typeof GrowingStage;
    24: typeof GrowingStage;
    25: typeof HelpArticle;
    26: typeof HighscoreSort;
    27: typeof HumanName;
    28: symbol;
    29: typeof InspectType;
    30: typeof Interrupt;
    31: typeof InterruptChoice;
    32: typeof ItemType;
    33: typeof ItemTypeGroup;
    34: typeof JoinServerRetryReason;
    35: symbol;
    36: typeof MagicalPropertyType;
    37: typeof Message;
    38: typeof MessageFilterDefault;
    39: typeof MessageTimestamp;
    40: typeof Milestone;
    41: typeof MilestoneModifierGroup;
    42: typeof MiscTranslation;
    43: typeof CanLoadState;
    44: typeof ModLoadFailureReason;
    45: typeof ModProvide;
    46: typeof ModSort;
    47: typeof ModType;
    48: typeof MultiplayerCompatibility;
    49: typeof DisconnectReason;
    50: typeof MusicPlaylist;
    51: typeof Note;
    52: typeof NPCType;
    53: symbol;
    54: typeof PartOfDay;
    55: typeof PowerMode;
    56: typeof QuadrantComponentId;
    57: typeof QuadrantComponentContextMenuAction;
    58: typeof Quality;
    59: typeof QuestType;
    60: typeof QuestRequirementType;
    61: typeof SaveSort;
    62: typeof SkillType;
    63: typeof Source;
    64: typeof Stat;
    65: typeof StatusType;
    66: typeof Responsibility;
    67: typeof TerrainType;
    68: typeof TileEventType;
    69: typeof TravelingEffectStrategy;
    70: typeof UiTranslation;
    71: typeof Quadrant;
    72: typeof UnableToJoinReason;
    73: typeof UnlockedRecipesStrategy;
    74: typeof Website;
    75: typeof WeightStatus;
    76: typeof WorldZ;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
