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
import type { IPromptDescriptionBase, PromptDescriptionArgs, PromptResult } from "@wayward/game/game/meta/prompt/IPrompt";
import { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IPrompt<PROMPT extends IPromptDescriptionBase<any[]>> extends PromiseLike<PromptResult<PROMPT>> {
    type?: Prompt;
    priority?: number;
    description: PROMPT;
    args: PromptDescriptionArgs<PROMPT>;
    result?: PromptResult<PROMPT>;
    resolve(result: PromptResult<PROMPT>): void;
}
export interface IPromptEvents {
    queue<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: IPrompt<PROMPT>): any;
    interrupt<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: IPrompt<PROMPT>): any;
    finish<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: IPrompt<PROMPT>, result: PromptResult<PROMPT>): any;
}
declare namespace Prompts {
    const currentQueue: Array<IPrompt<IPromptDescriptionBase<any[]>>>;
    class Events extends EventEmitter.Host<IPromptEvents> {
        static INSTANCE: Events;
        get queue(): Array<IPrompt<IPromptDescriptionBase<any[]>>>;
    }
    function isQueued(prompt: Prompt | IPromptDescriptionBase<any[]>): boolean;
    function queue<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: PROMPT, ...args: PromptDescriptionArgs<PROMPT>): IPrompt<PROMPT>;
    function interrupt<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: PROMPT, ...args: PromptDescriptionArgs<PROMPT>): IPrompt<PROMPT>;
}
export default Prompts;
