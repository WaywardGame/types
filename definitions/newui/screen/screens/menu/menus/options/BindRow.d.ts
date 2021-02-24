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
import { Events, IEventEmitter } from "event/EventEmitter";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshable } from "newui/component/Refreshable";
import Bindable from "newui/input/Bindable";
import { Binding } from "newui/input/Bindings";
export interface IBindRowEvents extends Events<Button> {
    requestFilter(bindables: Iterable<Bindable>): any;
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
