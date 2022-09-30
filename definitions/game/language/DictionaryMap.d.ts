/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Command } from "command/ICommand";
import { BiomeType } from "game/biome/IBiome";
import { DoodadType, DoodadTypeGroup, GrowingStage } from "game/doodad/IDoodad";
import { MapQuality } from "game/entity/action/actions/map/MapQuality";
import { ActionType } from "game/entity/action/IAction";
import { UsableActionType } from "game/entity/action/usable/UsableActionType";
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
import { BleedLevel } from "game/entity/status/handler/IBleeding";
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
import { AutoSaveMode } from "game/meta/IAutoSave";
import { Load } from "game/meta/Loading";
import { Prompt } from "game/meta/prompt/IPrompt";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, UnlockedRecipesStrategy } from "game/options/IGameOptions";
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import { IslandModifierType } from "game/options/modifiers/island/IslandModifier";
import { MilestoneModifierGroup } from "game/options/modifiers/milestone/MilestoneModifier";
import Riddle from "game/riddle/Riddle";
import { TempType } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import { TerrainType } from "game/tile/ITerrain";
import { TileEventType } from "game/tile/ITileEvent";
import { PartOfDay } from "game/time/ITimeManager";
import { WorldZ } from "game/WorldZ";
import Dictionary from "language/Dictionary";
import { GameEndMessage } from "language/dictionary/GameEndMessage";
import HumanName from "language/dictionary/HumanName";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import { MultiplayerCompatibility } from "language/dictionary/MultiplayerCompatibility";
import Note from "language/dictionary/Note";
import UiTranslation from "language/dictionary/UiTranslation";
import { IslandName } from "language/english/game/islandName/IslandName";
import { ModProvide, ModType } from "mod/IModInfo";
import { CanLoadState, ModLoadFailureReason } from "mod/IModManager";
import { DisconnectReason, JoinServerRetryReason, UnableToJoinReason } from "multiplayer/IMultiplayer";
import { MusicPlaylist } from "save/data/ISaveDataGlobal";
import { SaveImportErrorReason, SaveSort } from "save/ISaveManager";
import Bindable, { BindableType } from "ui/input/Bindable";
import { FontStyle } from "ui/IUi";
import { SortType } from "ui/old/IOldUi";
import { Quadrant, QuadrantComponentContextMenuAction } from "ui/screen/screens/game/component/IQuadrantComponent";
import { DialogId } from "ui/screen/screens/game/Dialogs";
import { MessageTimestamp, QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "ui/screen/screens/game/IMessages";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import { CharacterSort } from "ui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "ui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Website } from "ui/screen/screens/menu/menus/main/component/IWebsite";
import { Responsibility } from "ui/screen/screens/menu/menus/main/IAbout";
import { ModSort } from "ui/screen/screens/menu/menus/mods/IModsMenu";
import { Direction } from "utilities/math/Direction";
import { ChangeType } from "utilities/trello/ITrello";
export declare type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaryMap: {
    0: typeof ActionType;
    1: typeof AutoSaveMode;
    2: typeof BadTemperatureLevel;
    3: typeof Bindable;
    4: typeof BindableType;
    5: typeof BiomeType;
    6: typeof BleedLevel;
    7: typeof BookType;
    8: typeof Challenge;
    9: typeof ChangeType;
    10: typeof CharacterSort;
    11: typeof Command;
    12: typeof CreatureType;
    13: typeof CraftEfficacy;
    14: typeof CreatureType;
    15: typeof DamageType;
    16: typeof DialogId;
    17: typeof Direction;
    18: typeof InfoDisplayLevel;
    19: typeof DoodadType;
    20: typeof DoodadTypeGroup;
    21: typeof DrawnMapTheme;
    22: typeof DurabilityLevel;
    23: typeof EquipEffect;
    24: typeof EquipType;
    25: typeof ExhaustionLevel;
    26: typeof FireStage;
    27: typeof FontStyle;
    28: typeof GameEndMessage;
    29: typeof GameMode;
    30: typeof GrowingStage;
    31: typeof GrowingStage;
    32: typeof HelpArticle;
    33: typeof HighscoreSort;
    34: typeof HumanName;
    35: symbol;
    36: typeof InspectType;
    37: typeof InterruptChoice;
    38: typeof SortType;
    39: typeof IslandModifierType;
    40: typeof IslandName;
    41: typeof BiomeType;
    42: typeof BiomeType;
    43: typeof IslandModifierType;
    44: typeof CreatureType;
    45: typeof ItemType;
    46: typeof ItemTypeGroup;
    47: typeof JoinServerRetryReason;
    48: typeof Level;
    49: typeof Load;
    50: symbol;
    51: typeof MagicalPropertyType;
    52: typeof MapQuality;
    53: typeof MenuBarButtonType;
    54: typeof Message;
    55: typeof MessageFilterDefault;
    56: typeof MessageTimestamp;
    57: typeof Milestone;
    58: typeof MilestoneModifierGroup;
    59: typeof MiscTranslation;
    60: typeof CanLoadState;
    61: typeof ModLoadFailureReason;
    62: typeof ModProvide;
    63: typeof ModSort;
    64: typeof ModType;
    65: typeof MultiplayerCompatibility;
    66: typeof DisconnectReason;
    67: typeof MusicPlaylist;
    68: typeof Note;
    69: typeof NPCType;
    70: symbol;
    71: typeof PartOfDay;
    72: typeof Prompt;
    73: typeof QuadrantComponentId;
    74: typeof QuadrantComponentContextMenuAction;
    75: typeof Quality;
    76: typeof QuestType;
    77: typeof QuestRequirementType;
    78: typeof RecipeLevel;
    79: typeof Riddle;
    80: typeof SaveImportErrorReason;
    81: typeof SaveSort;
    82: typeof SkillType;
    83: typeof Source;
    84: typeof Stat;
    85: typeof StatusType;
    86: typeof Responsibility;
    87: typeof TempType;
    88: typeof TerrainType;
    89: typeof TileEventType;
    90: typeof UiTranslation;
    91: typeof Quadrant;
    92: typeof UnableToJoinReason;
    93: typeof UnlockedRecipesStrategy;
    94: typeof UsableActionType;
    95: typeof Website;
    96: typeof WeightStatus;
    97: typeof WorldZ;
};
export declare const strictDictionaries: {
    0: typeof ActionType;
    1: typeof AutoSaveMode;
    2: typeof BadTemperatureLevel;
    3: typeof Bindable;
    4: typeof BindableType;
    5: typeof BiomeType;
    6: typeof BleedLevel;
    7: typeof BookType;
    8: typeof Challenge;
    9: typeof ChangeType;
    10: typeof CharacterSort;
    11: typeof Command;
    12: typeof CreatureType;
    13: typeof CraftEfficacy;
    14: typeof CreatureType;
    15: typeof DamageType;
    16: typeof DialogId;
    17: typeof Direction;
    18: typeof InfoDisplayLevel;
    19: typeof DoodadType;
    20: typeof DoodadTypeGroup;
    21: typeof DrawnMapTheme;
    22: typeof DurabilityLevel;
    23: typeof EquipEffect;
    24: typeof EquipType;
    25: typeof ExhaustionLevel;
    26: typeof FireStage;
    27: typeof FontStyle;
    28: typeof GameEndMessage;
    29: typeof GameMode;
    30: typeof GrowingStage;
    31: typeof GrowingStage;
    32: typeof HelpArticle;
    33: typeof HighscoreSort;
    34: typeof HumanName;
    35: symbol;
    36: typeof InspectType;
    37: typeof InterruptChoice;
    38: typeof SortType;
    39: typeof IslandModifierType;
    40: typeof IslandName;
    41: typeof BiomeType;
    42: typeof BiomeType;
    43: typeof IslandModifierType;
    44: typeof CreatureType;
    45: typeof ItemType;
    46: typeof ItemTypeGroup;
    47: typeof JoinServerRetryReason;
    48: typeof Level;
    49: typeof Load;
    50: symbol;
    51: typeof MagicalPropertyType;
    52: typeof MapQuality;
    53: typeof MenuBarButtonType;
    54: typeof Message;
    55: typeof MessageFilterDefault;
    56: typeof MessageTimestamp;
    57: typeof Milestone;
    58: typeof MilestoneModifierGroup;
    59: typeof MiscTranslation;
    60: typeof CanLoadState;
    61: typeof ModLoadFailureReason;
    62: typeof ModProvide;
    63: typeof ModSort;
    64: typeof ModType;
    65: typeof MultiplayerCompatibility;
    66: typeof DisconnectReason;
    67: typeof MusicPlaylist;
    68: typeof Note;
    69: typeof NPCType;
    70: symbol;
    71: typeof PartOfDay;
    72: typeof Prompt;
    73: typeof QuadrantComponentId;
    74: typeof QuadrantComponentContextMenuAction;
    75: typeof Quality;
    76: typeof QuestType;
    77: typeof QuestRequirementType;
    78: typeof RecipeLevel;
    79: typeof Riddle;
    80: typeof SaveImportErrorReason;
    81: typeof SaveSort;
    82: typeof SkillType;
    83: typeof Source;
    84: typeof Stat;
    85: typeof StatusType;
    86: typeof Responsibility;
    87: typeof TempType;
    88: typeof TerrainType;
    89: typeof TileEventType;
    90: typeof UiTranslation;
    91: typeof Quadrant;
    92: typeof UnableToJoinReason;
    93: typeof UnlockedRecipesStrategy;
    94: typeof UsableActionType;
    95: typeof Website;
    96: typeof WeightStatus;
    97: typeof WorldZ;
};
export declare type DictionaryEnum = (typeof dictionaryMap)[Dictionary];
export declare type DictionaryEntryEnums = {
    [DICTIONARY in keyof typeof dictionaryMap]: (typeof dictionaryMap)[DICTIONARY] extends infer ENTRY_ENUM ? ENTRY_ENUM[keyof ENTRY_ENUM] : never;
};
declare function getByEnum(enumObject: DictionaryEnum): Dictionary;
declare const dictionaries: {
    0: typeof SYMBOL_ANY_DICTIONARY | Enum;
    1: typeof SYMBOL_ANY_DICTIONARY | Enum;
    2: typeof SYMBOL_ANY_DICTIONARY | Enum;
    3: typeof SYMBOL_ANY_DICTIONARY | Enum;
    4: typeof SYMBOL_ANY_DICTIONARY | Enum;
    5: typeof SYMBOL_ANY_DICTIONARY | Enum;
    6: typeof SYMBOL_ANY_DICTIONARY | Enum;
    7: typeof SYMBOL_ANY_DICTIONARY | Enum;
    8: typeof SYMBOL_ANY_DICTIONARY | Enum;
    9: typeof SYMBOL_ANY_DICTIONARY | Enum;
    10: typeof SYMBOL_ANY_DICTIONARY | Enum;
    11: typeof SYMBOL_ANY_DICTIONARY | Enum;
    12: typeof SYMBOL_ANY_DICTIONARY | Enum;
    13: typeof SYMBOL_ANY_DICTIONARY | Enum;
    14: typeof SYMBOL_ANY_DICTIONARY | Enum;
    15: typeof SYMBOL_ANY_DICTIONARY | Enum;
    16: typeof SYMBOL_ANY_DICTIONARY | Enum;
    17: typeof SYMBOL_ANY_DICTIONARY | Enum;
    18: typeof SYMBOL_ANY_DICTIONARY | Enum;
    19: typeof SYMBOL_ANY_DICTIONARY | Enum;
    20: typeof SYMBOL_ANY_DICTIONARY | Enum;
    21: typeof SYMBOL_ANY_DICTIONARY | Enum;
    22: typeof SYMBOL_ANY_DICTIONARY | Enum;
    23: typeof SYMBOL_ANY_DICTIONARY | Enum;
    24: typeof SYMBOL_ANY_DICTIONARY | Enum;
    25: typeof SYMBOL_ANY_DICTIONARY | Enum;
    26: typeof SYMBOL_ANY_DICTIONARY | Enum;
    27: typeof SYMBOL_ANY_DICTIONARY | Enum;
    28: typeof SYMBOL_ANY_DICTIONARY | Enum;
    29: typeof SYMBOL_ANY_DICTIONARY | Enum;
    30: typeof SYMBOL_ANY_DICTIONARY | Enum;
    31: typeof SYMBOL_ANY_DICTIONARY | Enum;
    32: typeof SYMBOL_ANY_DICTIONARY | Enum;
    33: typeof SYMBOL_ANY_DICTIONARY | Enum;
    34: typeof SYMBOL_ANY_DICTIONARY | Enum;
    35: typeof SYMBOL_ANY_DICTIONARY | Enum;
    36: typeof SYMBOL_ANY_DICTIONARY | Enum;
    37: typeof SYMBOL_ANY_DICTIONARY | Enum;
    38: typeof SYMBOL_ANY_DICTIONARY | Enum;
    39: typeof SYMBOL_ANY_DICTIONARY | Enum;
    40: typeof SYMBOL_ANY_DICTIONARY | Enum;
    41: typeof SYMBOL_ANY_DICTIONARY | Enum;
    42: typeof SYMBOL_ANY_DICTIONARY | Enum;
    43: typeof SYMBOL_ANY_DICTIONARY | Enum;
    44: typeof SYMBOL_ANY_DICTIONARY | Enum;
    45: typeof SYMBOL_ANY_DICTIONARY | Enum;
    46: typeof SYMBOL_ANY_DICTIONARY | Enum;
    47: typeof SYMBOL_ANY_DICTIONARY | Enum;
    48: typeof SYMBOL_ANY_DICTIONARY | Enum;
    49: typeof SYMBOL_ANY_DICTIONARY | Enum;
    50: typeof SYMBOL_ANY_DICTIONARY | Enum;
    51: typeof SYMBOL_ANY_DICTIONARY | Enum;
    52: typeof SYMBOL_ANY_DICTIONARY | Enum;
    53: typeof SYMBOL_ANY_DICTIONARY | Enum;
    54: typeof SYMBOL_ANY_DICTIONARY | Enum;
    55: typeof SYMBOL_ANY_DICTIONARY | Enum;
    56: typeof SYMBOL_ANY_DICTIONARY | Enum;
    57: typeof SYMBOL_ANY_DICTIONARY | Enum;
    58: typeof SYMBOL_ANY_DICTIONARY | Enum;
    59: typeof SYMBOL_ANY_DICTIONARY | Enum;
    60: typeof SYMBOL_ANY_DICTIONARY | Enum;
    61: typeof SYMBOL_ANY_DICTIONARY | Enum;
    62: typeof SYMBOL_ANY_DICTIONARY | Enum;
    63: typeof SYMBOL_ANY_DICTIONARY | Enum;
    64: typeof SYMBOL_ANY_DICTIONARY | Enum;
    65: typeof SYMBOL_ANY_DICTIONARY | Enum;
    66: typeof SYMBOL_ANY_DICTIONARY | Enum;
    67: typeof SYMBOL_ANY_DICTIONARY | Enum;
    68: typeof SYMBOL_ANY_DICTIONARY | Enum;
    69: typeof SYMBOL_ANY_DICTIONARY | Enum;
    70: typeof SYMBOL_ANY_DICTIONARY | Enum;
    71: typeof SYMBOL_ANY_DICTIONARY | Enum;
    72: typeof SYMBOL_ANY_DICTIONARY | Enum;
    73: typeof SYMBOL_ANY_DICTIONARY | Enum;
    74: typeof SYMBOL_ANY_DICTIONARY | Enum;
    75: typeof SYMBOL_ANY_DICTIONARY | Enum;
    76: typeof SYMBOL_ANY_DICTIONARY | Enum;
    77: typeof SYMBOL_ANY_DICTIONARY | Enum;
    78: typeof SYMBOL_ANY_DICTIONARY | Enum;
    79: typeof SYMBOL_ANY_DICTIONARY | Enum;
    80: typeof SYMBOL_ANY_DICTIONARY | Enum;
    81: typeof SYMBOL_ANY_DICTIONARY | Enum;
    82: typeof SYMBOL_ANY_DICTIONARY | Enum;
    83: typeof SYMBOL_ANY_DICTIONARY | Enum;
    84: typeof SYMBOL_ANY_DICTIONARY | Enum;
    85: typeof SYMBOL_ANY_DICTIONARY | Enum;
    86: typeof SYMBOL_ANY_DICTIONARY | Enum;
    87: typeof SYMBOL_ANY_DICTIONARY | Enum;
    88: typeof SYMBOL_ANY_DICTIONARY | Enum;
    89: typeof SYMBOL_ANY_DICTIONARY | Enum;
    90: typeof SYMBOL_ANY_DICTIONARY | Enum;
    91: typeof SYMBOL_ANY_DICTIONARY | Enum;
    92: typeof SYMBOL_ANY_DICTIONARY | Enum;
    93: typeof SYMBOL_ANY_DICTIONARY | Enum;
    94: typeof SYMBOL_ANY_DICTIONARY | Enum;
    95: typeof SYMBOL_ANY_DICTIONARY | Enum;
    96: typeof SYMBOL_ANY_DICTIONARY | Enum;
    97: typeof SYMBOL_ANY_DICTIONARY | Enum;
} & Record<number, typeof SYMBOL_ANY_DICTIONARY | Enum | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;
