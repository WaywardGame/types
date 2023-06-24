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
import EventEmitter from "event/EventEmitter";
import type { IPromptDescriptionBase } from "game/meta/prompt/IPrompt";
import { Prompt } from "game/meta/prompt/IPrompt";
import type { IPrompt } from "game/meta/prompt/Prompts";
import Prompts from "game/meta/prompt/Prompts";
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
