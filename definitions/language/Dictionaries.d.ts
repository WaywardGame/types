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
import { NPCType } from "entity/npc/NPCS";
import { Source } from "entity/player/IMessageManager";
import { QuestType } from "entity/player/quest/quest/IQuest";
import { QuestRequirementType } from "entity/player/quest/requirement/IRequirement";
import { InspectType } from "game/inspection/IInspection";
import { Quality } from "game/IObject";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import { PartOfDay } from "game/TimeManager";
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
import { Bindable, BindableType } from "newui/IBindingManager";
import { Quadrant, QuadrantComponentContextMenuAction } from "newui/screen/screens/game/component/QuadrantComponent";
import { MessageTimestamp, QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "newui/screen/screens/game/IMessages";
import { CharacterSort } from "newui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "newui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Responsibility } from "newui/screen/screens/menu/menus/main/AboutMenu";
import { ModSort } from "newui/screen/screens/menu/menus/mods/IModsMenu";
import { AutoSave, MusicPlaylist, PowerMode } from "save/data/ISaveDataGlobal";
import { SaveSort } from "save/ISaveManager";
import { TerrainType } from "tile/ITerrain";
import { TileEventType } from "tile/ITileEvent";
import { ChangelogSection } from "utilities/Trello";
export declare enum Dictionary {
    Action = 0,
    AutoSave = 1,
    Bindable = 2,
    BindableType = 3,
    BindPress = 4,
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
    GameEndMessage = 18,
    GameMode = 19,
    Growth = 20,
    GrowthFungus = 21,
    HelpArticle = 22,
    HighscoreSort = 23,
    HumanName = 24,
    InspectType = 25,
    Interrupt = 26,
    InterruptChoice = 27,
    Item = 28,
    ItemGroup = 29,
    JoinServerRetryReason = 30,
    LegendaryType = 31,
    Message = 32,
    MessagesDefaultFilter = 33,
    MessagesTimestampMode = 34,
    Milestone = 35,
    MilestoneModifierGroup = 36,
    Misc = 37,
    ModLoadError = 38,
    ModLoadFailureReason = 39,
    ModProvide = 40,
    ModSort = 41,
    ModType = 42,
    MultiplayerDisconnectReason = 43,
    MusicPlaylist = 44,
    Note = 45,
    NPC = 46,
    Number = 47,
    PartOfDay = 48,
    PowerMode = 49,
    QuadrantComponent = 50,
    QuadrantComponentContextMenuAction = 51,
    Quality = 52,
    Quest = 53,
    QuestRequirement = 54,
    SaveSlotSort = 55,
    Skill = 56,
    Source = 57,
    Stat = 58,
    StatusEffect = 59,
    TeamMemberResponsibility = 60,
    Terrain = 61,
    TileEvent = 62,
    Ui = 63,
    UiQuadrant = 64,
    UnableToJoinReason = 65,
    UnlockedRecipesStrategy = 66
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
    4: symbol;
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
    18: typeof GameEndMessage;
    19: typeof GameMode;
    20: typeof GrowingStage;
    21: typeof GrowingStage;
    22: typeof HelpArticle;
    23: typeof HighscoreSort;
    24: typeof HumanName;
    25: typeof InspectType;
    26: typeof Interrupt;
    27: typeof InterruptChoice;
    28: typeof ItemType;
    29: typeof ItemTypeGroup;
    30: typeof JoinServerRetryReason;
    31: typeof LegendaryType;
    32: typeof Message;
    33: typeof MessageFilterDefault;
    34: typeof MessageTimestamp;
    35: typeof Milestone;
    36: typeof MilestoneModifierGroup;
    37: typeof MiscTranslation;
    38: typeof CanLoadState;
    39: typeof ModLoadFailureReason;
    40: typeof ModProvide;
    41: typeof ModSort;
    42: typeof ModType;
    43: typeof DisconnectReason;
    44: typeof MusicPlaylist;
    45: typeof Note;
    46: typeof NPCType;
    47: symbol;
    48: typeof PartOfDay;
    49: typeof PowerMode;
    50: typeof QuadrantComponentId;
    51: typeof QuadrantComponentContextMenuAction;
    52: typeof Quality;
    53: typeof QuestType;
    54: typeof QuestRequirementType;
    55: typeof SaveSort;
    56: typeof SkillType;
    57: typeof Source;
    58: typeof Stat;
    59: typeof StatusType;
    60: typeof Responsibility;
    61: typeof TerrainType;
    62: typeof TileEventType;
    63: typeof UiTranslation;
    64: typeof Quadrant;
    65: typeof UnableToJoinReason;
    66: typeof UnlockedRecipesStrategy;
};
export { dictionaries as strictDictionaries };
declare const _default: Descriptions<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum>;
export default _default;
