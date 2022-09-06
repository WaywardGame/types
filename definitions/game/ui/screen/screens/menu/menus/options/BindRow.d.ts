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
import type { Events, IEventEmitter } from "event/EventEmitter";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IRefreshable } from "ui/component/Refreshable";
import Bindable from "ui/input/Bindable";
import { Binding } from "ui/input/Bindings";
export interface IBindRowEvents extends Events<Button> {
    requestFilter(bindables: Iterable<Bindable>): any;
    update(): any;
}
export declare class BindRow extends Button implements IRefreshable {
    readonly event: IEventEmitter<this, IBindRowEvents>;
    private readonly currentBinds;
    private readonly bind;
    private readonly bindingCatcher;
    private readonly modName;
    constructor(bindable: Bindable, bindCatcher: BindingCatcher);
    refresh(): this;
    protected onActivate(): Promise<void>;
    private translate;
    private getBinding;
}
export declare class BindingCatcher extends Component {
    private readonly requestText;
    private readonly currentInputText;
    private readonly timeoutBar;
    private resolve;
    private readonly macro;
    private closeTimeout;
    constructor();
    getBinding(macro: boolean): Promise<Binding | undefined>;
    setRequestText(text: TranslationGenerator): void;
    private onInput;
    private handleInput;
    private clearCloseTimeout;
    private refreshCloseTimeout;
    private close;
}
