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
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import { PartOfDay } from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
import { BookType, EquipEffect, ItemType, ItemTypeGroup, LegendaryType } from "item/IItem";
import { CraftEfficacy } from "item/recipe/Crafter";
import { GameEndMessage } from "language/dictionary/GameEndMessage";
import HumanName from "language/dictionary/HumanName";
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
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
    EquipEffect = 16,
    EquipSlot = 17,
    ExhaustionLevel = 18,
    FireStage = 19,
    GameEndMessage = 20,
    GameMode = 21,
    Growth = 22,
    GrowthFungus = 23,
    HelpArticle = 24,
    HighscoreSort = 25,
    HumanName = 26,
    Input = 27,
    InspectType = 28,
    Interrupt = 29,
    InterruptChoice = 30,
    Item = 31,
    ItemGroup = 32,
    JoinServerRetryReason = 33,
    LegendaryType = 34,
    Macro = 35,
    Message = 36,
    MessagesDefaultFilter = 37,
    MessagesTimestampMode = 38,
    Milestone = 39,
    MilestoneModifierGroup = 40,
    Misc = 41,
    ModLoadError = 42,
    ModLoadFailureReason = 43,
    ModProvide = 44,
    ModSort = 45,
    ModType = 46,
    MultiplayerDisconnectReason = 47,
    MusicPlaylist = 48,
    Note = 49,
    NPC = 50,
    Number = 51,
    PartOfDay = 52,
    PowerMode = 53,
    QuadrantComponent = 54,
    QuadrantComponentContextMenuAction = 55,
    Quality = 56,
    Quest = 57,
    QuestRequirement = 58,
    SaveSlotSort = 59,
    Skill = 60,
    Source = 61,
    Stat = 62,
    StatusEffect = 63,
    TeamMemberResponsibility = 64,
    Terrain = 65,
    TileEvent = 66,
    Ui = 67,
    UiQuadrant = 68,
    UnableToJoinReason = 69,
    UnlockedRecipesStrategy = 70,
    Website = 71,
    WeightStatus = 72,
    WorldLayer = 73
}
export declare type Enum = {
    [key: string]: number;
} & {
    [key: number]: string;
};
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
    16: typeof EquipEffect;
    17: typeof EquipType;
    18: typeof ExhaustionLevel;
    19: typeof FireStage;
    20: typeof GameEndMessage;
    21: typeof GameMode;
    22: typeof GrowingStage;
    23: typeof GrowingStage;
    24: typeof HelpArticle;
    25: typeof HighscoreSort;
    26: typeof HumanName;
    27: symbol;
    28: typeof InspectType;
    29: typeof Interrupt;
    30: typeof InterruptChoice;
    31: typeof ItemType;
    32: typeof ItemTypeGroup;
    33: typeof JoinServerRetryReason;
    34: typeof LegendaryType;
    35: symbol;
    36: typeof Message;
    37: typeof MessageFilterDefault;
    38: typeof MessageTimestamp;
    39: typeof Milestone;
    40: typeof MilestoneModifierGroup;
    41: typeof MiscTranslation;
    42: typeof CanLoadState;
    43: typeof ModLoadFailureReason;
    44: typeof ModProvide;
    45: typeof ModSort;
    46: typeof ModType;
    47: typeof DisconnectReason;
    48: typeof MusicPlaylist;
    49: typeof Note;
    50: typeof NPCType;
    51: symbol;
    52: typeof PartOfDay;
    53: typeof PowerMode;
    54: typeof QuadrantComponentId;
    55: typeof QuadrantComponentContextMenuAction;
    56: typeof Quality;
    57: typeof QuestType;
    58: typeof QuestRequirementType;
    59: typeof SaveSort;
    60: typeof SkillType;
    61: typeof Source;
    62: typeof Stat;
    63: typeof StatusType;
    64: typeof Responsibility;
    65: typeof TerrainType;
    66: typeof TileEventType;
    67: typeof UiTranslation;
    68: typeof Quadrant;
    69: typeof UnableToJoinReason;
    70: typeof UnlockedRecipesStrategy;
    71: typeof Website;
    72: typeof WeightStatus;
    73: typeof WorldZ;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
