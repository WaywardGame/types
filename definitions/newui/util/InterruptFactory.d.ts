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
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import { TranslationGenerator } from "newui/component/IComponent";
import Input from "newui/component/Input";
import { IInterruptFactory } from "newui/INewUi";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
import InterruptMenu from "newui/screen/screens/menu/menus/InterruptMenu";
export default class InterruptFactory implements IInterruptFactory {
    private readonly interrupt?;
    private title;
    private description;
    private canCancel;
    private isTopMenu;
    private executed;
    private readonly args;
    private initializer?;
    constructor(interrupt?: Interrupt | undefined, ...args: any[]);
    setTopMenu(topMenu?: boolean): this;
    setCanCancel(canCancel?: boolean): this;
    addArgs(...args: any[]): this;
    withTitle(title?: TranslationGenerator): this;
    withDescription(description?: TranslationGenerator): this;
    withInitializer(initializer?: (menu: InterruptMenu) => any): this;
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(input?: (input: Input) => any): Promise<string>;
    withMenu<M extends IMenu = IMenu>(menuId: MenuId, initializer?: (menu: M) => any): Promise<void>;
    withLoading(until?: Promise<any> | (() => Promise<any>), canCancel?: boolean | (NullaryFunction), specialType?: string, choices?: InterruptChoice[]): Promise<InterruptChoice | undefined>;
    private execute;
    private warnIfNeverShown;
}
