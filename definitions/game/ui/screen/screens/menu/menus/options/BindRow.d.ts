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
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import Bindable from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
import { Macro } from "@wayward/game/ui/input/Macros";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IBindRowEvents extends Events<Button> {
    requestFilter(macro: Macro): any;
    update(): any;
}
export declare class BindRow extends Button implements IRefreshable {
    event: IEventEmitter<this, IBindRowEvents>;
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
    private macro;
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
