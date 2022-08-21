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
import type { IPromptChoiceDescription, IPromptConfirmDescription, IPromptInfoDescription, IPromptInputDescription, IPromptMenuDescription, Prompt, PromptChoices, PromptPriority } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { MenuId } from "ui/screen/screens/menu/component/IMenu";
declare class PromptDescriptionFactory {
    private readonly _priority?;
    constructor(_priority?: PromptPriority | undefined);
    priority(priority: PromptPriority): PromptDescriptionFactory;
    info<A extends any[] = []>(type: Prompt): IPromptInfoDescription<A>;
    confirm<A extends any[] = []>(type: Prompt, yesTranslation?: TranslationGenerator<InterruptChoice>, noTranslation?: TranslationGenerator<InterruptChoice>): IPromptConfirmDescription<A>;
    choice<A extends any[], CHOICES extends PromptChoices<A>>(type: Prompt, choices: CHOICES): IPromptChoiceDescription<A, CHOICES>;
    input<A extends any[] = []>(type: Prompt, configure?: IPromptInputDescription<A>["configure"], canCancel?: true): IPromptInputDescription<A>;
    menu<MENU extends MenuId, A extends any[] = []>(type: Prompt, menu: MENU, configure?: IPromptMenuDescription<MENU, A>["configure"]): IPromptMenuDescription<MENU, A>;
}
export declare const promptDescriptionFactory: PromptDescriptionFactory;
export {};
