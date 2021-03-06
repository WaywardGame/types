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
import { EmitterOrBus, Event, Handler } from "event/EventManager";
import UiTranslation from "language/dictionary/UiTranslation";
import { IColorSection } from "language/segment/ColorSegment";
import { IHeadingSection } from "language/segment/HeadingSegment";
import { ILinkSection } from "language/segment/LinkSegment";
import { IListItemSection } from "language/segment/ListSegment";
import { ITooltipSection } from "language/segment/TooltipSegment";
import Translation from "language/Translation";
import Component from "ui/component/Component";
import { TranslationGenerator } from "ui/component/IComponent";
import { IReferenceSection, ISegment, IStringSection } from "utilities/string/Interpolator";
export default class Text extends Component {
    static resolve(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[], ...args: any[]): IStringSection[];
    private static areIdenticalSections;
    static toString(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[]): string;
    private segments;
    private text?;
    private args?;
    private paragraphs?;
    constructor(elementType?: string);
    setSegments(...segments: ISegment[]): this;
    setParagraphs(): this;
    setText(text: UiTranslation | Translation, ...args: any[]): this;
    setText(refresh: false, text: UiTranslation | Translation, ...args: any[]): this;
    setText(text?: TranslationGenerator): this;
    setText(refresh: false, text?: TranslationGenerator): this;
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
}
export declare class BasicText extends Component {
    private _link;
    private linkHandler;
    constructor(elementType?: string);
    setText(text: IStringSection & Partial<IColorSection> & Partial<ILinkSection> & Partial<IHeadingSection> & Partial<ITooltipSection> & Partial<IReferenceSection> & Partial<IListItemSection>): this;
    setLinkHandler(handler?: (link: string | [string, string | undefined]) => boolean): void;
    private onClick;
}
