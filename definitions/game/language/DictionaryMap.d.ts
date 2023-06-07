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
import { MusicPlaylist, TooltipVisibilityOption } from "save/data/ISaveDataGlobal";
import { FontStyle } from "ui/IUi";
import Bindable, { BindableType } from "ui/input/Bindable";
import { SortType } from "ui/old/IOldUi";
import { DialogId } from "ui/screen/screens/game/Dialogs";
import { MessageTimestamp, QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import { MessageFilterDefault } from "ui/screen/screens/game/IMessages";
import { Quadrant, QuadrantComponentContextMenuAction } from "ui/screen/screens/game/component/IQuadrantComponent";
import { MilestoneSort } from "ui/screen/screens/game/dialog/IMilestonesDialog";
import { SkillSort } from "ui/screen/screens/game/dialog/ISkillsDialog";
import { ActionSort } from "ui/screen/screens/game/static/actions/IActionsDrawer";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import { CharacterSort } from "ui/screen/screens/menu/menus/character/Character";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
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
    20: typeof FerocityLevel;
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
    32: typeof FireStage;
    33: typeof FontStyle;
    34: typeof GameEndMessage;
    35: typeof GameMode;
    36: typeof GrowingStage;
    37: typeof GrowingStage;
    38: typeof Health;
    39: typeof HealthAccuracy;
    40: typeof HelpArticle;
    41: typeof HighscoreSort;
    42: typeof HumanName;
    43: symbol;
    44: typeof InspectType;
    45: typeof InterruptChoice;
    46: typeof SortType;
    47: typeof IslandModifierType;
    48: typeof IslandName;
    49: typeof BiomeType;
    50: typeof BiomeType;
    51: typeof IslandModifierType;
    52: typeof CreatureType;
    53: typeof ItemType;
    54: typeof ItemTypeExtra;
    55: typeof ItemTypeGroup;
    56: typeof JoinServerRetryReason;
    57: typeof Level;
    58: typeof LighthouseName;
    59: typeof Load;
    60: symbol;
    61: typeof MagicalPropertyType;
    62: typeof MapQuality;
    63: typeof MenuBarButtonType;
    64: typeof Message;
    65: typeof MessageFilterDefault;
    66: typeof MessageTimestamp;
    67: typeof Milestone;
    68: typeof MilestoneModifierGroup;
    69: typeof MilestoneSort;
    70: typeof MiscTranslation;
    71: typeof CanLoadState;
    72: typeof ModLoadFailureReason;
    73: typeof ModProvide;
    74: typeof ModSort;
    75: typeof ModType;
    76: typeof MultiplayerCompatibility;
    77: typeof DisconnectReason;
    78: typeof MusicPlaylist;
    79: typeof Note;
    80: typeof NPCType;
    81: symbol;
    82: typeof PartOfDay;
    83: typeof Prompt;
    84: typeof QuadrantComponentId;
    85: typeof QuadrantComponentContextMenuAction;
    86: typeof Quality;
    87: typeof QuestType;
    88: typeof QuestRequirementType;
    89: typeof RecipeLevel;
    90: typeof Direction;
    91: typeof Riddle;
    92: typeof SaveImportErrorReason;
    93: typeof SaveSort;
    94: typeof SkillType;
    95: typeof SkillSort;
    96: typeof Source;
    97: typeof Stat;
    98: typeof StatusType;
    99: typeof Responsibility;
    100: typeof TempType;
    101: typeof TerrainType;
    102: typeof TileEventType;
    103: typeof TooltipVisibilityOption;
    104: typeof UiTranslation;
    105: typeof Quadrant;
    106: typeof UnableToJoinReason;
    107: typeof UnlockedRecipesStrategy;
    108: typeof UsableActionType;
    109: typeof Website;
    110: typeof WeightStatus;
    111: typeof WorldZ;
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
    20: typeof FerocityLevel;
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
    32: typeof FireStage;
    33: typeof FontStyle;
    34: typeof GameEndMessage;
    35: typeof GameMode;
    36: typeof GrowingStage;
    37: typeof GrowingStage;
    38: typeof Health;
    39: typeof HealthAccuracy;
    40: typeof HelpArticle;
    41: typeof HighscoreSort;
    42: typeof HumanName;
    43: symbol;
    44: typeof InspectType;
    45: typeof InterruptChoice;
    46: typeof SortType;
    47: typeof IslandModifierType;
    48: typeof IslandName;
    49: typeof BiomeType;
    50: typeof BiomeType;
    51: typeof IslandModifierType;
    52: typeof CreatureType;
    53: typeof ItemType;
    54: typeof ItemTypeExtra;
    55: typeof ItemTypeGroup;
    56: typeof JoinServerRetryReason;
    57: typeof Level;
    58: typeof LighthouseName;
    59: typeof Load;
    60: symbol;
    61: typeof MagicalPropertyType;
    62: typeof MapQuality;
    63: typeof MenuBarButtonType;
    64: typeof Message;
    65: typeof MessageFilterDefault;
    66: typeof MessageTimestamp;
    67: typeof Milestone;
    68: typeof MilestoneModifierGroup;
    69: typeof MilestoneSort;
    70: typeof MiscTranslation;
    71: typeof CanLoadState;
    72: typeof ModLoadFailureReason;
    73: typeof ModProvide;
    74: typeof ModSort;
    75: typeof ModType;
    76: typeof MultiplayerCompatibility;
    77: typeof DisconnectReason;
    78: typeof MusicPlaylist;
    79: typeof Note;
    80: typeof NPCType;
    81: symbol;
    82: typeof PartOfDay;
    83: typeof Prompt;
    84: typeof QuadrantComponentId;
    85: typeof QuadrantComponentContextMenuAction;
    86: typeof Quality;
    87: typeof QuestType;
    88: typeof QuestRequirementType;
    89: typeof RecipeLevel;
    90: typeof Direction;
    91: typeof Riddle;
    92: typeof SaveImportErrorReason;
    93: typeof SaveSort;
    94: typeof SkillType;
    95: typeof SkillSort;
    96: typeof Source;
    97: typeof Stat;
    98: typeof StatusType;
    99: typeof Responsibility;
    100: typeof TempType;
    101: typeof TerrainType;
    102: typeof TileEventType;
    103: typeof TooltipVisibilityOption;
    104: typeof UiTranslation;
    105: typeof Quadrant;
    106: typeof UnableToJoinReason;
    107: typeof UnlockedRecipesStrategy;
    108: typeof UsableActionType;
    109: typeof Website;
    110: typeof WeightStatus;
    111: typeof WorldZ;
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
