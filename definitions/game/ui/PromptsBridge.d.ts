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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { IPromptDescriptionBase } from "@wayward/game/game/meta/prompt/IPrompt";
import { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import type { IPrompt } from "@wayward/game/game/meta/prompt/Prompts";
import Prompts from "@wayward/game/game/meta/prompt/Prompts";
export interface IPromptsBridgeEvents {
    promptResolved(): any;
}
export default class PromptsBridge extends EventEmitter.Host<IPromptsBridgeEvents> {
    private showing?;
    private hasShownThisInterrupt;
    isShowingPrompt(prompt?: Prompt): boolean;
    protected onPromptQueue<PROMPT extends IPromptDescriptionBase<any[]>>(prompts: Prompts.Events, prompt: IPrompt<PROMPT>): Promise<void>;
    protected onPromptInterrupt<PROMPT extends IPromptDescriptionBase<any[]>>(prompts: Prompts.Events, prompt: IPrompt<PROMPT>): Promise<void>;
    private wasInterruptHiddenSomehow;
    private showPrompt;
    protected onInterruptShow(): void;
    private showPromptInternal;
}
