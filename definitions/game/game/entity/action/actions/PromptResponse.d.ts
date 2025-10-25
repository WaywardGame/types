/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Player from "@wayward/game/game/entity/player/Player";
import type { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
declare const _default: Action<[ActionArgument.Integer32, [ActionArgument.Boolean, ActionArgument.Integer32]], ActionType.PromptResponse, Player, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [number, number | boolean]>;
export default _default;
export declare function waitForPromptResponse(executor: Player, type: Prompt): Promise<boolean | InterruptChoice>;
