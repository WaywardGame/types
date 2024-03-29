/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Command } from "command/ICommand";
import { Quality } from "game/IObject";
import { WorldZ } from "game/WorldZ";
import { BiomeType } from "game/biome/IBiome";
import { FerocityLevel } from "game/deity/IDeities";
import { DoodadType, DoodadTypeExtra, DoodadTypeGroup, GrowingStage } from "game/doodad/IDoodad";
import { CombatDangerLevel, CombatStrength } from "game/entity/CombatStrengthManager";
import { AiType, DamageType, StatusType } from "game/entity/IEntity";
import { EquipType, SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import { ActionType } from "game/entity/action/IAction";
import { MapQuality } from "game/entity/action/actions/map/MapQuality";
import { UsableActionType } from "game/entity/action/usable/UsableActionType";
import { CreatureType } from "game/entity/creature/ICreature";
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
import { Level } from "game/inspection/infoProviders/ILevel";
import { DurabilityLevel } from "game/inspection/infoProviders/doodad/IDurability";
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
import { TerrainType } from "game/tile/ITerrain";
import { TileEventType } from "game/tile/ITileEvent";
import { FireStage } from "game/tile/events/IFire";
import { PartOfDay } from "game/time/ITimeManager";
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
import { LighthouseName } from "language/english/game/LighthouseName";
import { IslandName } from "language/english/game/islandName/IslandName";
import { ModProvide, ModType } from "mod/IModInfo";
import { CanLoadState, ModLoadFailureReason } from "mod/IModManager";
import { DisconnectReason, JoinServerRetryReason, UnableToJoinReason } from "multiplayer/IMultiplayer";
import { SaveImportErrorReason, SaveSort } from "save/ISaveManager";
import { MusicPlaylist, SteamInputKeyboardPosition, TooltipVisibilityOption } from "save/data/ISaveDataGlobal";
import { FontStyle } from "ui/IUi";
import Bindable, { BindableType } from "ui/input/Bindable";
import { SortType } from "ui/old/IOldUi";
import { DialogId } from "ui/screen/screens/game/Dialogs";
import { MessageTimestamp, QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "ui/screen/screens/game/IMessages";
import { Quadrant, QuadrantComponentContextMenuAction } from "ui/screen/screens/game/component/IQuadrantComponent";
import { MilestoneSort } from "ui/screen/screens/game/dialog/IMilestonesDialog";
import { SkillSort } from "ui/screen/screens/game/dialog/ISkillsDialog";
import { ActionSlotItemMethod, ActionSort } from "ui/screen/screens/game/static/actions/IActionsDrawer";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import { CharacterSort } from "ui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/IHelpArticle";
import { HighscoreSort } from "ui/screen/screens/menu/menus/highscores/IHighscoresMenu";
import { Responsibility } from "ui/screen/screens/menu/menus/main/IAbout";
import { Website } from "ui/screen/screens/menu/menus/main/component/IWebsite";
import { ModSort } from "ui/screen/screens/menu/menus/mods/IModsMenu";
import { Direction } from "utilities/math/Direction";
import { ChangeType } from "utilities/trello/ITrello";
export type Enum = Record<string, number> & Record<number, string>;
export declare const SYMBOL_ANY_DICTIONARY: unique symbol;
declare const dictionaryMap: {
    0: typeof ActionType;
    1: typeof ActionSlotItemMethod;
    2: typeof ActionSort;
    3: typeof AiType;
    4: typeof AutoSaveMode;
    5: typeof BadTemperatureLevel;
    6: typeof Bindable;
    7: typeof BindableType;
    8: typeof BiomeType;
    9: typeof BleedLevel;
    10: typeof BookType;
    11: typeof Challenge;
    12: typeof ChangeType;
    13: typeof CharacterSort;
    14: typeof CombatDangerLevel;
    15: typeof CombatStrength;
    16: typeof Command;
    17: typeof CreatureType;
    18: typeof CraftEfficacy;
    19: typeof CreatureType;
    20: typeof DamageType;
    21: typeof DialogId;
    22: typeof Direction;
    23: typeof InfoDisplayLevel;
    24: typeof DoodadType;
    25: typeof DoodadTypeExtra;
    26: typeof DoodadTypeGroup;
    27: typeof DrawnMapTheme;
    28: typeof DurabilityLevel;
    29: typeof EquipEffect;
    30: typeof EquipType;
    31: typeof ExhaustionLevel;
    32: typeof FerocityLevel;
    33: typeof FireStage;
    34: typeof FontStyle;
    35: typeof GameEndMessage;
    36: typeof GameMode;
    37: typeof GrowingStage;
    38: typeof GrowingStage;
    39: typeof Health;
    40: typeof HealthAccuracy;
    41: typeof HelpArticle;
    42: typeof HighscoreSort;
    43: typeof HumanName;
    44: symbol;
    45: typeof InspectType;
    46: typeof InterruptChoice;
    47: typeof SortType;
    48: typeof IslandModifierType;
    49: typeof IslandName;
    50: typeof BiomeType;
    51: typeof BiomeType;
    52: typeof IslandModifierType;
    53: typeof CreatureType;
    54: typeof ItemType;
    55: typeof ItemTypeExtra;
    56: typeof ItemTypeGroup;
    57: typeof JoinServerRetryReason;
    58: typeof Level;
    59: typeof LighthouseName;
    60: typeof Load;
    61: symbol;
    62: typeof MagicalPropertyType;
    63: typeof MapQuality;
    64: typeof MenuBarButtonType;
    65: typeof Message;
    66: typeof MessageFilterDefault;
    67: typeof MessageTimestamp;
    68: typeof Milestone;
    69: typeof MilestoneModifierGroup;
    70: typeof MilestoneSort;
    71: typeof MiscTranslation;
    72: typeof CanLoadState;
    73: typeof ModLoadFailureReason;
    74: typeof ModProvide;
    75: typeof ModSort;
    76: typeof ModType;
    77: typeof MultiplayerCompatibility;
    78: typeof DisconnectReason;
    79: typeof MusicPlaylist;
    80: typeof Note;
    81: typeof NPCType;
    82: symbol;
    83: typeof PartOfDay;
    84: typeof Prompt;
    85: typeof QuadrantComponentId;
    86: typeof QuadrantComponentContextMenuAction;
    87: typeof Quality;
    88: typeof QuestType;
    89: typeof QuestRequirementType;
    90: typeof RecipeLevel;
    91: typeof Direction;
    92: typeof Riddle;
    93: typeof SaveImportErrorReason;
    94: typeof SaveSort;
    95: typeof SkillType;
    96: typeof SkillSort;
    97: typeof Source;
    98: typeof Stat;
    99: typeof StatusType;
    100: typeof SteamInputKeyboardPosition;
    101: typeof Responsibility;
    102: typeof TempType;
    103: typeof TerrainType;
    104: typeof TileEventType;
    105: typeof TooltipVisibilityOption;
    106: typeof UiTranslation;
    107: typeof Quadrant;
    108: typeof UnableToJoinReason;
    109: typeof UnlockedRecipesStrategy;
    110: typeof UsableActionType;
    111: typeof Website;
    112: typeof WeightStatus;
    113: typeof WorldZ;
};
export declare const strictDictionaries: {
    0: typeof ActionType;
    1: typeof ActionSlotItemMethod;
    2: typeof ActionSort;
    3: typeof AiType;
    4: typeof AutoSaveMode;
    5: typeof BadTemperatureLevel;
    6: typeof Bindable;
    7: typeof BindableType;
    8: typeof BiomeType;
    9: typeof BleedLevel;
    10: typeof BookType;
    11: typeof Challenge;
    12: typeof ChangeType;
    13: typeof CharacterSort;
    14: typeof CombatDangerLevel;
    15: typeof CombatStrength;
    16: typeof Command;
    17: typeof CreatureType;
    18: typeof CraftEfficacy;
    19: typeof CreatureType;
    20: typeof DamageType;
    21: typeof DialogId;
    22: typeof Direction;
    23: typeof InfoDisplayLevel;
    24: typeof DoodadType;
    25: typeof DoodadTypeExtra;
    26: typeof DoodadTypeGroup;
    27: typeof DrawnMapTheme;
    28: typeof DurabilityLevel;
    29: typeof EquipEffect;
    30: typeof EquipType;
    31: typeof ExhaustionLevel;
    32: typeof FerocityLevel;
    33: typeof FireStage;
    34: typeof FontStyle;
    35: typeof GameEndMessage;
    36: typeof GameMode;
    37: typeof GrowingStage;
    38: typeof GrowingStage;
    39: typeof Health;
    40: typeof HealthAccuracy;
    41: typeof HelpArticle;
    42: typeof HighscoreSort;
    43: typeof HumanName;
    44: symbol;
    45: typeof InspectType;
    46: typeof InterruptChoice;
    47: typeof SortType;
    48: typeof IslandModifierType;
    49: typeof IslandName;
    50: typeof BiomeType;
    51: typeof BiomeType;
    52: typeof IslandModifierType;
    53: typeof CreatureType;
    54: typeof ItemType;
    55: typeof ItemTypeExtra;
    56: typeof ItemTypeGroup;
    57: typeof JoinServerRetryReason;
    58: typeof Level;
    59: typeof LighthouseName;
    60: typeof Load;
    61: symbol;
    62: typeof MagicalPropertyType;
    63: typeof MapQuality;
    64: typeof MenuBarButtonType;
    65: typeof Message;
    66: typeof MessageFilterDefault;
    67: typeof MessageTimestamp;
    68: typeof Milestone;
    69: typeof MilestoneModifierGroup;
    70: typeof MilestoneSort;
    71: typeof MiscTranslation;
    72: typeof CanLoadState;
    73: typeof ModLoadFailureReason;
    74: typeof ModProvide;
    75: typeof ModSort;
    76: typeof ModType;
    77: typeof MultiplayerCompatibility;
    78: typeof DisconnectReason;
    79: typeof MusicPlaylist;
    80: typeof Note;
    81: typeof NPCType;
    82: symbol;
    83: typeof PartOfDay;
    84: typeof Prompt;
    85: typeof QuadrantComponentId;
    86: typeof QuadrantComponentContextMenuAction;
    87: typeof Quality;
    88: typeof QuestType;
    89: typeof QuestRequirementType;
    90: typeof RecipeLevel;
    91: typeof Direction;
    92: typeof Riddle;
    93: typeof SaveImportErrorReason;
    94: typeof SaveSort;
    95: typeof SkillType;
    96: typeof SkillSort;
    97: typeof Source;
    98: typeof Stat;
    99: typeof StatusType;
    100: typeof SteamInputKeyboardPosition;
    101: typeof Responsibility;
    102: typeof TempType;
    103: typeof TerrainType;
    104: typeof TileEventType;
    105: typeof TooltipVisibilityOption;
    106: typeof UiTranslation;
    107: typeof Quadrant;
    108: typeof UnableToJoinReason;
    109: typeof UnlockedRecipesStrategy;
    110: typeof UsableActionType;
    111: typeof Website;
    112: typeof WeightStatus;
    113: typeof WorldZ;
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
