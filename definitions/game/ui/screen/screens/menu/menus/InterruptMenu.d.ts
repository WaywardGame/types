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
import type { Prompt } from "game/meta/prompt/IPrompt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import { RangeInput } from "ui/component/RangeInput";
import Menu from "ui/screen/screens/menu/component/Menu";
import type { InterruptOptions } from "ui/util/IInterrupt";
import { InterruptType } from "ui/util/IInterrupt";
export interface IInterruptMenuEvents extends Events<Menu> {
    resolve(choice?: InterruptChoice | string): any;
    cancel(triggerChoice?: boolean): any;
    setOptions(options: InterruptOptions): any;
}
export default class InterruptMenu extends Menu {
    event: IEventEmitter<this, IInterruptMenuEvents>;
    private readonly interruptTitle;
    private readonly interruptDescription;
    private readonly input;
    private readonly choiceRow;
    private readonly loadingElement;
    private readonly customContentWrapper;
    readonly progressBar: RangeInput;
    private _type;
    private _interrupt?;
    private readonly settingOptionsQueue;
    private isResolved;
    get type(): InterruptType;
    get interrupt(): Prompt | undefined;
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
