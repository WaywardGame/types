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
import type { IPromptDescriptionBase, PromptResult, PromptDescriptionArgs } from "game/meta/prompt/IPrompt";
import { Prompt } from "game/meta/prompt/IPrompt";
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
declare module Prompts {
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
