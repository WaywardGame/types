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
import { MusicPlaylist, PowerMode } from "save/data/ISaveDataGlobal";
import { SaveImportErrorReason, SaveSort } from "save/ISaveManager";
import Bindable, { BindableType } from "ui/input/Bindable";
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
import { ChangelogSection } from "utilities/trello/ITrello";
export declare type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaryMap: {
    0: typeof ActionType;
    1: typeof AutoSaveMode;
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
    15: typeof DialogId;
    16: typeof Direction;
    17: typeof InfoDisplayLevel;
    18: typeof DoodadType;
    19: typeof DoodadTypeGroup;
    20: typeof DrawnMapTheme;
    21: typeof DurabilityLevel;
    22: typeof EquipEffect;
    23: typeof EquipType;
    24: typeof ExhaustionLevel;
    25: typeof FireStage;
    26: typeof GameEndMessage;
    27: typeof GameMode;
    28: typeof GrowingStage;
    29: typeof GrowingStage;
    30: typeof HelpArticle;
    31: typeof HighscoreSort;
    32: typeof HumanName;
    33: symbol;
    34: typeof InspectType;
    35: typeof InterruptChoice;
    36: typeof IslandModifierType;
    37: typeof IslandName;
    38: typeof BiomeType;
    39: typeof IslandModifierType;
    40: typeof CreatureType;
    41: typeof ItemType;
    42: typeof ItemTypeGroup;
    43: typeof JoinServerRetryReason;
    44: typeof Level;
    45: typeof Load;
    46: symbol;
    47: typeof MagicalPropertyType;
    48: typeof MapQuality;
    49: typeof MenuBarButtonType;
    50: typeof Message;
    51: typeof MessageFilterDefault;
    52: typeof MessageTimestamp;
    53: typeof Milestone;
    54: typeof MilestoneModifierGroup;
    55: typeof MiscTranslation;
    56: typeof CanLoadState;
    57: typeof ModLoadFailureReason;
    58: typeof ModProvide;
    59: typeof ModSort;
    60: typeof ModType;
    61: typeof MultiplayerCompatibility;
    62: typeof DisconnectReason;
    63: typeof MusicPlaylist;
    64: typeof Note;
    65: typeof NPCType;
    66: symbol;
    67: typeof PartOfDay;
    68: typeof PowerMode;
    69: typeof Prompt;
    70: typeof QuadrantComponentId;
    71: typeof QuadrantComponentContextMenuAction;
    72: typeof Quality;
    73: typeof QuestType;
    74: typeof QuestRequirementType;
    75: typeof RecipeLevel;
    76: typeof Riddle;
    77: typeof SaveImportErrorReason;
    78: typeof SaveSort;
    79: typeof SkillType;
    80: typeof Source;
    81: typeof Stat;
    82: typeof StatusType;
    83: typeof Responsibility;
    84: typeof TempType;
    85: typeof TerrainType;
    86: typeof TileEventType;
    87: typeof UiTranslation;
    88: typeof Quadrant;
    89: typeof UnableToJoinReason;
    90: typeof UnlockedRecipesStrategy;
    91: typeof Website;
    92: typeof WeightStatus;
    93: typeof WorldZ;
};
export declare const strictDictionaries: {
    0: typeof ActionType;
    1: typeof AutoSaveMode;
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
    15: typeof DialogId;
    16: typeof Direction;
    17: typeof InfoDisplayLevel;
    18: typeof DoodadType;
    19: typeof DoodadTypeGroup;
    20: typeof DrawnMapTheme;
    21: typeof DurabilityLevel;
    22: typeof EquipEffect;
    23: typeof EquipType;
    24: typeof ExhaustionLevel;
    25: typeof FireStage;
    26: typeof GameEndMessage;
    27: typeof GameMode;
    28: typeof GrowingStage;
    29: typeof GrowingStage;
    30: typeof HelpArticle;
    31: typeof HighscoreSort;
    32: typeof HumanName;
    33: symbol;
    34: typeof InspectType;
    35: typeof InterruptChoice;
    36: typeof IslandModifierType;
    37: typeof IslandName;
    38: typeof BiomeType;
    39: typeof IslandModifierType;
    40: typeof CreatureType;
    41: typeof ItemType;
    42: typeof ItemTypeGroup;
    43: typeof JoinServerRetryReason;
    44: typeof Level;
    45: typeof Load;
    46: symbol;
    47: typeof MagicalPropertyType;
    48: typeof MapQuality;
    49: typeof MenuBarButtonType;
    50: typeof Message;
    51: typeof MessageFilterDefault;
    52: typeof MessageTimestamp;
    53: typeof Milestone;
    54: typeof MilestoneModifierGroup;
    55: typeof MiscTranslation;
    56: typeof CanLoadState;
    57: typeof ModLoadFailureReason;
    58: typeof ModProvide;
    59: typeof ModSort;
    60: typeof ModType;
    61: typeof MultiplayerCompatibility;
    62: typeof DisconnectReason;
    63: typeof MusicPlaylist;
    64: typeof Note;
    65: typeof NPCType;
    66: symbol;
    67: typeof PartOfDay;
    68: typeof PowerMode;
    69: typeof Prompt;
    70: typeof QuadrantComponentId;
    71: typeof QuadrantComponentContextMenuAction;
    72: typeof Quality;
    73: typeof QuestType;
    74: typeof QuestRequirementType;
    75: typeof RecipeLevel;
    76: typeof Riddle;
    77: typeof SaveImportErrorReason;
    78: typeof SaveSort;
    79: typeof SkillType;
    80: typeof Source;
    81: typeof Stat;
    82: typeof StatusType;
    83: typeof Responsibility;
    84: typeof TempType;
    85: typeof TerrainType;
    86: typeof TileEventType;
    87: typeof UiTranslation;
    88: typeof Quadrant;
    89: typeof UnableToJoinReason;
    90: typeof UnlockedRecipesStrategy;
    91: typeof Website;
    92: typeof WeightStatus;
    93: typeof WorldZ;
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
} & Record<number, typeof SYMBOL_ANY_DICTIONARY | Enum | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;