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
import { Events, IEventEmitter } from "event/EventEmitter";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Component from "ui/component/Component";
import { TranslationGenerator } from "ui/component/IComponent";
import Menu from "ui/screen/screens/menu/component/Menu";
import { InterruptOptions, InterruptType } from "ui/util/IInterrupt";
export interface IInterruptMenuEvents extends Events<Menu> {
    resolve(choice?: InterruptChoice | string): any;
    cancel(triggerChoice?: boolean): any;
}
export default class InterruptMenu extends Menu {
    event: IEventEmitter<this, IInterruptMenuEvents>;
    private readonly interruptTitle;
    private readonly interruptDescription;
    private readonly input;
    private readonly choiceRow;
    private readonly loadingElement;
    private readonly customContentWrapper;
    private _type;
    private readonly settingOptionsQueue;
    private isResolved;
    get type(): InterruptType;
    constructor();
    setOptions(options: InterruptOptions): Promise<void>;
    initializeCustomContent(initializer?: (wrapper: Component) => any): this;
    setText(title?: TranslationGenerator, description?: TranslationGenerator): this;
    cancelInterrupt(): Promise<void>;
    choose(choice: InterruptChoice | string): Promise<void>;
    waitFor(): Promise<InterruptChoice | string | boolean | undefined>;
    protected onCancel(triggerChoose?: boolean): void;
    protected onEnterBind(): void;
    protected onHide(): any;
    protected onShow(): any;
}
