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
import type { IPromptChoiceDescription, IPromptConfirmDescription, IPromptDescriptionBase, IPromptInfoDescription, IPromptInputDescription, IPromptMenuDescription, Prompt, PromptChoices, PromptPriority } from "@wayward/game/game/meta/prompt/IPrompt";
import { PromptType } from "@wayward/game/game/meta/prompt/IPrompt";
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { MenuId } from "@wayward/game/ui/screen/screens/menu/component/IMenu";
export declare const promptDescriptions: Descriptions<PromptType, IPromptDescriptionBase<any>>;
export default class PromptDescriptionFactory {
    private readonly _priority?;
    constructor(_priority?: PromptPriority | undefined);
    static priority(priority: PromptPriority): PromptDescriptionFactory;
    /**
     * @deprecated Use {@link PromptDescriptionFactory.priority}
     */
    priority(priority: PromptPriority): PromptDescriptionFactory;
    info<A extends any[] = []>(type: SupplierOr<Prompt>): IPromptInfoDescription<A>;
    confirm<A extends any[] = []>(type: SupplierOr<Prompt>, yesTranslation?: TranslationGenerator<InterruptChoice>, noTranslation?: TranslationGenerator<InterruptChoice>): IPromptConfirmDescription<A>;
    choice<A extends any[], CHOICES extends PromptChoices<A>>(type: SupplierOr<Prompt>, choices: CHOICES): IPromptChoiceDescription<A, CHOICES>;
    input<A extends any[] = []>(type: Prompt, configure?: IPromptInputDescription<A>["configure"], canCancel?: true): IPromptInputDescription<A>;
    menu<MENU extends MenuId, A extends any[] = []>(type: Prompt, menu: MENU, configure?: IPromptMenuDescription<MENU, A>["configure"]): IPromptMenuDescription<MENU, A>;
    private create;
}
export declare const promptDescriptionFactory: PromptDescriptionFactory;
