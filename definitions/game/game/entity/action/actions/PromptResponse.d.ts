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
import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import type Player from "game/entity/player/Player";
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
declare const _default: Action<[ActionArgument.Integer32, [ActionArgument.Boolean, ActionArgument.Integer32]], Player, void, import("game/entity/action/IAction").IActionUsable, [number, number | boolean]>;
export default _default;
export declare function waitForPromptResponse(executor: Player, type: Prompt): Promise<boolean | InterruptChoice>;
