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
import { DoodadType, DoodadTypeExtra, DoodadTypeGroup, GrowingStage } from "game/doodad/IDoodad";
import { MapQuality } from "game/entity/action/actions/map/MapQuality";
import { ActionType } from "game/entity/action/IAction";
import { UsableActionType } from "game/entity/action/usable/UsableActionType";
import { CombatDangerLevel, CombatStrength } from "game/entity/CombatStrengthManager";
import { CreatureType } from "game/entity/creature/ICreature";
import { AiType, DamageType, StatusType } from "game/entity/IEntity";
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
import { BookType, EquipEffect, ItemType, ItemTypeExtra, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
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
import { Health, HealthAccuracy } from "language/dictionary/Health";
import HumanName from "language/dictionary/HumanName";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import { MultiplayerCompatibility } from "language/dictionary/MultiplayerCompatibility";
import Note from "language/dictionary/Note";
import UiTranslation from "language/dictionary/UiTranslation";
import { IslandName } from "language/english/game/islandName/IslandName";
import { LighthouseName } from "language/english/game/LighthouseName";
import { ModProvide, ModType } from "mod/IModInfo";
import { CanLoadState, ModLoadFailureReason } from "mod/IModManager";
import { DisconnectReason, JoinServerRetryReason, UnableToJoinReason } from "multiplayer/IMultiplayer";
import { MusicPlaylist, TooltipVisibilityOption } from "save/data/ISaveDataGlobal";
import { SaveImportErrorReason, SaveSort } from "save/ISaveManager";
import Bindable, { BindableType } from "ui/input/Bindable";
import { FontStyle } from "ui/IUi";
import { SortType } from "ui/old/IOldUi";
import { Quadrant, QuadrantComponentContextMenuAction } from "ui/screen/screens/game/component/IQuadrantComponent";
import { DialogId } from "ui/screen/screens/game/Dialogs";
import { MessageTimestamp, QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "ui/screen/screens/game/IMessages";
import { ActionSort } from "ui/screen/screens/game/static/actions/IActionsDrawer";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import { CharacterSort } from "ui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { HighscoreSort } from "ui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Website } from "ui/screen/screens/menu/menus/main/component/IWebsite";
import { Responsibility } from "ui/screen/screens/menu/menus/main/IAbout";
import { ModSort } from "ui/screen/screens/menu/menus/mods/IModsMenu";
import { Direction } from "utilities/math/Direction";
import { ChangeType } from "utilities/trello/ITrello";
export type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaryMap: {
    0: typeof ActionType;
    1: typeof ActionSort;
    2: typeof AiType;
    3: typeof AutoSaveMode;
    4: typeof BadTemperatureLevel;
    5: typeof Bindable;
    6: typeof BindableType;
    7: typeof BiomeType;
    8: typeof BleedLevel;
    9: typeof BookType;
    10: typeof Challenge;
    11: typeof ChangeType;
    12: typeof CharacterSort;
    13: typeof CombatDangerLevel;
    14: typeof CombatStrength;
    15: typeof Command;
    16: typeof CreatureType;
    17: typeof CraftEfficacy;
    18: typeof CreatureType;
    19: typeof DamageType;
    20: typeof DialogId;
    21: typeof Direction;
    22: typeof InfoDisplayLevel;
    23: typeof DoodadType;
    24: typeof DoodadTypeExtra;
    25: typeof DoodadTypeGroup;
    26: typeof DrawnMapTheme;
    27: typeof DurabilityLevel;
    28: typeof EquipEffect;
    29: typeof EquipType;
    30: typeof ExhaustionLevel;
    31: typeof FireStage;
    32: typeof FontStyle;
    33: typeof GameEndMessage;
    34: typeof GameMode;
    35: typeof GrowingStage;
    36: typeof GrowingStage;
    37: typeof Health;
    38: typeof HealthAccuracy;
    39: typeof HelpArticle;
    40: typeof HighscoreSort;
    41: typeof HumanName;
    42: symbol;
    43: typeof InspectType;
    44: typeof InterruptChoice;
    45: typeof SortType;
    46: typeof IslandModifierType;
    47: typeof IslandName;
    48: typeof BiomeType;
    49: typeof BiomeType;
    50: typeof IslandModifierType;
    51: typeof CreatureType;
    52: typeof ItemType;
    53: typeof ItemTypeExtra;
    54: typeof ItemTypeGroup;
    55: typeof JoinServerRetryReason;
    56: typeof Level;
    57: typeof LighthouseName;
    58: typeof Load;
    59: symbol;
    60: typeof MagicalPropertyType;
    61: typeof MapQuality;
    62: typeof MenuBarButtonType;
    63: typeof Message;
    64: typeof MessageFilterDefault;
    65: typeof MessageTimestamp;
    66: typeof Milestone;
    67: typeof MilestoneModifierGroup;
    68: typeof MiscTranslation;
    69: typeof CanLoadState;
    70: typeof ModLoadFailureReason;
    71: typeof ModProvide;
    72: typeof ModSort;
    73: typeof ModType;
    74: typeof MultiplayerCompatibility;
    75: typeof DisconnectReason;
    76: typeof MusicPlaylist;
    77: typeof Note;
    78: typeof NPCType;
    79: symbol;
    80: typeof PartOfDay;
    81: typeof Prompt;
    82: typeof QuadrantComponentId;
    83: typeof QuadrantComponentContextMenuAction;
    84: typeof Quality;
    85: typeof QuestType;
    86: typeof QuestRequirementType;
    87: typeof RecipeLevel;
    88: typeof Riddle;
    89: typeof SaveImportErrorReason;
    90: typeof SaveSort;
    91: typeof SkillType;
    92: typeof Source;
    93: typeof Stat;
    94: typeof StatusType;
    95: typeof Responsibility;
    96: typeof TempType;
    97: typeof TerrainType;
    98: typeof TileEventType;
    99: typeof TooltipVisibilityOption;
    100: typeof UiTranslation;
    101: typeof Quadrant;
    102: typeof UnableToJoinReason;
    103: typeof UnlockedRecipesStrategy;
    104: typeof UsableActionType;
    105: typeof Website;
    106: typeof WeightStatus;
    107: typeof WorldZ;
};
export declare const strictDictionaries: {
    0: typeof ActionType;
    1: typeof ActionSort;
    2: typeof AiType;
    3: typeof AutoSaveMode;
    4: typeof BadTemperatureLevel;
    5: typeof Bindable;
    6: typeof BindableType;
    7: typeof BiomeType;
    8: typeof BleedLevel;
    9: typeof BookType;
    10: typeof Challenge;
    11: typeof ChangeType;
    12: typeof CharacterSort;
    13: typeof CombatDangerLevel;
    14: typeof CombatStrength;
    15: typeof Command;
    16: typeof CreatureType;
    17: typeof CraftEfficacy;
    18: typeof CreatureType;
    19: typeof DamageType;
    20: typeof DialogId;
    21: typeof Direction;
    22: typeof InfoDisplayLevel;
    23: typeof DoodadType;
    24: typeof DoodadTypeExtra;
    25: typeof DoodadTypeGroup;
    26: typeof DrawnMapTheme;
    27: typeof DurabilityLevel;
    28: typeof EquipEffect;
    29: typeof EquipType;
    30: typeof ExhaustionLevel;
    31: typeof FireStage;
    32: typeof FontStyle;
    33: typeof GameEndMessage;
    34: typeof GameMode;
    35: typeof GrowingStage;
    36: typeof GrowingStage;
    37: typeof Health;
    38: typeof HealthAccuracy;
    39: typeof HelpArticle;
    40: typeof HighscoreSort;
    41: typeof HumanName;
    42: symbol;
    43: typeof InspectType;
    44: typeof InterruptChoice;
    45: typeof SortType;
    46: typeof IslandModifierType;
    47: typeof IslandName;
    48: typeof BiomeType;
    49: typeof BiomeType;
    50: typeof IslandModifierType;
    51: typeof CreatureType;
    52: typeof ItemType;
    53: typeof ItemTypeExtra;
    54: typeof ItemTypeGroup;
    55: typeof JoinServerRetryReason;
    56: typeof Level;
    57: typeof LighthouseName;
    58: typeof Load;
    59: symbol;
    60: typeof MagicalPropertyType;
    61: typeof MapQuality;
    62: typeof MenuBarButtonType;
    63: typeof Message;
    64: typeof MessageFilterDefault;
    65: typeof MessageTimestamp;
    66: typeof Milestone;
    67: typeof MilestoneModifierGroup;
    68: typeof MiscTranslation;
    69: typeof CanLoadState;
    70: typeof ModLoadFailureReason;
    71: typeof ModProvide;
    72: typeof ModSort;
    73: typeof ModType;
    74: typeof MultiplayerCompatibility;
    75: typeof DisconnectReason;
    76: typeof MusicPlaylist;
    77: typeof Note;
    78: typeof NPCType;
    79: symbol;
    80: typeof PartOfDay;
    81: typeof Prompt;
    82: typeof QuadrantComponentId;
    83: typeof QuadrantComponentContextMenuAction;
    84: typeof Quality;
    85: typeof QuestType;
    86: typeof QuestRequirementType;
    87: typeof RecipeLevel;
    88: typeof Riddle;
    89: typeof SaveImportErrorReason;
    90: typeof SaveSort;
    91: typeof SkillType;
    92: typeof Source;
    93: typeof Stat;
    94: typeof StatusType;
    95: typeof Responsibility;
    96: typeof TempType;
    97: typeof TerrainType;
    98: typeof TileEventType;
    99: typeof TooltipVisibilityOption;
    100: typeof UiTranslation;
    101: typeof Quadrant;
    102: typeof UnableToJoinReason;
    103: typeof UnlockedRecipesStrategy;
    104: typeof UsableActionType;
    105: typeof Website;
    106: typeof WeightStatus;
    107: typeof WorldZ;
};
export type DictionaryEnum = (typeof dictionaryMap)[Dictionary];
export type DictionaryEntryEnums = {
    [DICTIONARY in keyof typeof dictionaryMap]: (typeof dictionaryMap)[DICTIONARY] extends infer ENTRY_ENUM ? ENTRY_ENUM[keyof ENTRY_ENUM] : never;
};
declare function getByEnum(enumObject: DictionaryEnum): Dictionary;
declare const dictionaries: Record<Dictionary, typeof SYMBOL_ANY_DICTIONARY | Enum> & Record<number, typeof SYMBOL_ANY_DICTIONARY | Enum | undefined> & {
    getByEnum: typeof getByEnum;
};
export default dictionaries;
