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
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import type { TranslationGenerator } from "ui/component/IComponent";
import type Input from "ui/component/Input";
import type { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type Menu from "ui/screen/screens/menu/component/Menu";
import type InterruptMenu from "ui/screen/screens/menu/menus/InterruptMenu";
import type ResolvablePromise from "utilities/promise/ResolvablePromise";
export default class InterruptFactory {
    private readonly interrupt?;
    private title;
    private description;
    private canCancel;
    private isTopMenu;
    private executed;
    private readonly args;
    private initializer?;
    constructor(interrupt?: Prompt | undefined, ...args: any[]);
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
    withMenu<M extends Menu = Menu>(menuId: MenuId, initializer?: (menu: M) => any): Promise<void>;
    withLoading(until?: Promise<any> | (() => Promise<any>), canCancel?: boolean | (NullaryFunction), specialType?: string, choices?: InterruptChoice[], cancelPromise?: ResolvablePromise): Promise<InterruptChoice | undefined>;
    private execute;
    private warnIfNeverShown;
}
