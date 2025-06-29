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
import type { LoadType } from "@wayward/game/game/meta/Loading";
import type { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type Input from "@wayward/game/ui/component/Input";
import type { MenuId } from "@wayward/game/ui/screen/screens/menu/component/IMenu";
import type ResolvablePromise from "@wayward/utilities/promise/ResolvablePromise";
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
    loadType?: LoadType;
    initializer?(menu: any): any;
    input?(input: Input): any;
}
