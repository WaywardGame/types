/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
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
import { Responsibility } from "newui/screen/screens/menu/menus/main/AboutMenu";
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
    Message = 35,
    MessagesDefaultFilter = 36,
    MessagesTimestampMode = 37,
    Milestone = 38,
    MilestoneModifierGroup = 39,
    Misc = 40,
    ModLoadError = 41,
    ModLoadFailureReason = 42,
    ModProvide = 43,
    ModSort = 44,
    ModType = 45,
    MultiplayerDisconnectReason = 46,
    MusicPlaylist = 47,
    Note = 48,
    NPC = 49,
    Number = 50,
    PartOfDay = 51,
    PowerMode = 52,
    QuadrantComponent = 53,
    QuadrantComponentContextMenuAction = 54,
    Quality = 55,
    Quest = 56,
    QuestRequirement = 57,
    SaveSlotSort = 58,
    Skill = 59,
    Source = 60,
    Stat = 61,
    StatusEffect = 62,
    TeamMemberResponsibility = 63,
    Terrain = 64,
    TileEvent = 65,
    Ui = 66,
    UiQuadrant = 67,
    UnableToJoinReason = 68,
    UnlockedRecipesStrategy = 69,
    WeightStatus = 70,
    WorldLayer = 71
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
    35: typeof Message;
    36: typeof MessageFilterDefault;
    37: typeof MessageTimestamp;
    38: typeof Milestone;
    39: typeof MilestoneModifierGroup;
    40: typeof MiscTranslation;
    41: typeof CanLoadState;
    42: typeof ModLoadFailureReason;
    43: typeof ModProvide;
    44: typeof ModSort;
    45: typeof ModType;
    46: typeof DisconnectReason;
    47: typeof MusicPlaylist;
    48: typeof Note;
    49: typeof NPCType;
    50: symbol;
    51: typeof PartOfDay;
    52: typeof PowerMode;
    53: typeof QuadrantComponentId;
    54: typeof QuadrantComponentContextMenuAction;
    55: typeof Quality;
    56: typeof QuestType;
    57: typeof QuestRequirementType;
    58: typeof SaveSort;
    59: typeof SkillType;
    60: typeof Source;
    61: typeof Stat;
    62: typeof StatusType;
    63: typeof Responsibility;
    64: typeof TerrainType;
    65: typeof TileEventType;
    66: typeof UiTranslation;
    67: typeof Quadrant;
    68: typeof UnableToJoinReason;
    69: typeof UnlockedRecipesStrategy;
    70: typeof WeightStatus;
    71: typeof WorldZ;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
