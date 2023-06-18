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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { EmitterOrBus, Event, Handler } from "event/EventManager";
import type { IIcon } from "game/inspection/InfoProvider";
import UiTranslation from "language/dictionary/UiTranslation";
import type { TranslationArg } from "language/ITranslation";
import type { IBindingsSection } from "language/segment/BindSegment";
import type { IColorSection } from "language/segment/ColorSegment";
import type { IHeadingSection } from "language/segment/HeadingSegment";
import type { ILinkSection } from "language/segment/LinkSegment";
import type { IListItemSection } from "language/segment/ListSegment";
import type { ITooltipSection } from "language/segment/TooltipSegment";
import Translation from "language/Translation";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IInput, Modifier } from "ui/input/IInput";
import type { IMacroSection } from "ui/input/Macros";
import type Tooltip from "ui/tooltip/Tooltip";
import type { IReferenceSection, ISegment, IStringSection } from "utilities/string/Interpolator";
export default class Text extends Component {
    static resolve(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[], ...args: TranslationArg[]): IStringSection[];
    private static areIdenticalSections;
    static toString(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[], ...args: TranslationArg[]): string;
    private segments;
    private text?;
    private args?;
    private paragraphs?;
    constructor(elementType?: string);
    setSegments(...segments: ISegment[]): this;
    setParagraphs(): this;
    setText(text: UiTranslation | Translation, ...args: any[]): this;
    setText(refresh: false, text: UiTranslation | Translation, ...args: any[]): this;
    setText(text?: TranslationGenerator, ...args: any[]): this;
    setText(refresh: false, text?: TranslationGenerator, ...args: any[]): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    /**
     * Returns whether the element has text. (Empty string included.)
     */
    hasText(): boolean;
    isEmpty(): boolean;
    refresh(): this;
    private readonly refreshEvents;
    /**
     * Subscribes refresh events to the given host.
     *
     * **WARNING:** If you call this method without the element later being removed, it will cause a leak!
     * @param predicate A predicate function for whether or not this component should actually refresh when the event is hit
     */
    subscribeRefreshOn<E extends EmitterOrBus, K extends Event<E>>(emitterOrBus: E, ...args: [...events: K[], predicate: (...params: Parameters<Handler<E, K>>) => boolean]): this;
    /**
     * Subscribes refresh events to the given host.
     *
     * **WARNING:** If you call this method without the element later being removed, it will cause a leak!
     */
    subscribeRefreshOn<E extends EmitterOrBus, K extends Event<E>>(emitterOrBus: E, ...events: K[]): this;
    protected onRemove(): void;
    private refreshParagraphs;
    private refreshBasic;
}
export declare class Paragraph extends Text {
    constructor();
}
export declare class Heading extends Text {
    constructor(elementType?: string);
    /**
     * Safe — removes all children except for the icon
     */
    dump(): this;
    icon?: Component;
    addIcon(initializer: (component: Component) => any): this;
}
interface IEntireTextData {
    referenceIcons?: Set<string>;
}
export type BasicTextLink = string | [string, string?, string?];
export interface IBasicTextEvents extends Events<Component> {
    handleLink(link: BasicTextLink): true | void;
}
export declare class BasicText extends Component {
    static applyIcon(component?: Component, icon?: IIcon): void;
    event: IEventEmitter<this, IBasicTextEvents>;
    private _link;
    inputIndex?: number;
    protected input?: IInput;
    protected inputModifier?: Modifier;
    currentTooltip?: (tooltip: Tooltip) => any;
    constructor(elementType?: string);
    setText(text: IStringSection & Partial<IColorSection & ILinkSection & IHeadingSection & ITooltipSection & IReferenceSection & IListItemSection & IBindingsSection & IMacroSection>, data?: IEntireTextData): this;
    protected onRemove(): void;
    private setTooltipLocation;
    private onClick;
}
export {};
