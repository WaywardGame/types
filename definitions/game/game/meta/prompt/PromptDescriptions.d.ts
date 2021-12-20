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
import type { IPromptDescriptionBase } from "game/meta/prompt/IPrompt";
import { Prompt, PromptDescription } from "game/meta/prompt/IPrompt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import TranslationImpl from "language/impl/TranslationImpl";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
declare type Text = Translation | ISerializedTranslation | string;
declare const promptDescriptions: {
    0: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    1: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    2: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    3: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], InterruptChoice.Quit[]>;
    4: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], InterruptChoice.Quit[]>;
    5: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[objectName: Text, gatherText: Text]>;
    6: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[growthStage: Text | undefined, objectName: Text]>;
    7: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    8: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[actionVerb: Text, objectName: Text, actionNoun: Text]>;
    9: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    10: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[objectName: Text, gatherText: Text]>;
    11: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    12: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    13: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[breakingItemsList: Text]>;
    14: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    15: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[breakingItemsList: Text]>;
    16: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    17: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    18: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    19: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    20: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[creatureName: Text]>;
    21: import("game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
    22: import("game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
    23: import("game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
    24: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    25: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    26: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    27: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    28: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    29: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[isGhost: boolean]>;
    30: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    31: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    32: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    33: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Pause, []>;
    34: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.GameEnd, []>;
    35: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.GameEnd, []>;
    36: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Help, [(HelpArticle | undefined)?]>;
    37: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Pause, []>;
    38: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    39: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[name: string]>;
    40: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
    41: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
    42: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    43: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
    44: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    45: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
    46: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[name?: string | undefined]>;
    47: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[deleteCount: number]>;
    49: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[succeeded: Text[], failed: Text[], unknownErrors: boolean]>;
    48: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.LocalFile | InterruptChoice.SteamWorkshop)[]>;
    50: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[missingMods: string[], disabledMods: string[]]>;
    51: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[saveBuildTime: string, gamebuildTime: string]>;
    52: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[err: Text]>;
    53: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[versionString: string]>;
    54: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<[lastVersionString: string, thisVersionString: string], [InterruptChoice.ContinueAnyway, InterruptChoice.OpenSaveFolderAndQuit]>;
    55: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    56: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    57: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    58: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    59: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    60: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[error?: string | undefined]>;
    61: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[error?: string | undefined]>;
    62: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string, dependencies: Text]>;
    63: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string, dependencies: Text]>;
    64: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string, dependents: Text]>;
    65: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string]>;
    66: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[folderName: string]>;
    67: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    68: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modErrors: Text[]]>;
    69: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    70: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    71: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    72: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    73: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    74: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    75: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    76: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    77: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    78: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    79: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    80: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    81: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    82: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    83: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    84: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    85: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    86: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
    87: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    88: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[isGhostAndNotServer: boolean]>;
    89: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
    90: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number, isGhostAndNotServer: boolean]>;
    91: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.Retry)[]>;
    92: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
    93: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[type: TranslationImpl, reason?: TranslationImpl | undefined]>;
    94: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[type: TranslationImpl, reason?: TranslationImpl | undefined]>;
    95: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    96: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    97: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    98: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string]>;
    99: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string]>;
    100: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
    101: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[error: string | undefined, publishedFileId: string]>;
    102: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], never[]>;
};
declare const _default: Record<Prompt, PromptDescription<any[]>>;
export default _default;
export { promptDescriptions as strictPromptDescriptions };
export declare type PromptDescriptionOf<PROMPT extends Prompt> = (typeof promptDescriptions)[PROMPT];
export declare type PromptArgs<PROMPT extends Prompt> = (typeof promptDescriptions)[PROMPT] extends IPromptDescriptionBase<infer A> ? A : never;
