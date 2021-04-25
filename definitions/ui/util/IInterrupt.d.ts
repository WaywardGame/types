/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import InterruptChoice from "language/dictionary/InterruptChoice";
import { TranslationGenerator } from "ui/component/IComponent";
import Input from "ui/component/Input";
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
export declare enum InterruptType {
    Info = 0,
    Confirm = 1,
    Choice = 2,
    Input = 3,
    Loading = 4,
    Menu = 5
}
export interface InterruptOptions {
    type?: InterruptType;
    title?: TranslationGenerator;
    description?: TranslationGenerator;
    choices?: InterruptChoice[];
    menuId?: MenuId;
    canCancel?: boolean | (NullaryFunction);
    isTopMenu?: boolean;
    specialType?: string;
    initializer?(menu: any): any;
    input?(input: Input): any;
}
