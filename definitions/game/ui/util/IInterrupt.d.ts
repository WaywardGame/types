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
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import type { TranslationGenerator } from "ui/component/IComponent";
import type Input from "ui/component/Input";
import type { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type ResolvablePromise from "utilities/promise/ResolvablePromise";
export declare enum InterruptType {
    Info = 0,
    Confirm = 1,
    Choice = 2,
    Input = 3,
    Loading = 4,
    Menu = 5
}
export interface InterruptOptions {
    interrupt?: Prompt;
    type?: InterruptType;
    title?: TranslationGenerator;
    description?: TranslationGenerator;
    choices?: InterruptChoice[];
    menuId?: MenuId;
    canCancel?: boolean | (NullaryFunction);
    cancelPromise?: ResolvablePromise;
    isTopMenu?: boolean;
    specialType?: string;
    initializer?(menu: any): any;
    input?(input: Input): any;
}
