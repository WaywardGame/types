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
import type { GameEmitterOrBus, GameEvent, GameEventHandler } from "@wayward/game/event/EventManager";
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import { TextContext, type TranslationArg } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type { IBindingsSection } from "@wayward/game/language/segment/BindSegment";
import type { IColorSection } from "@wayward/game/language/segment/ColorSegment";
import type { IHeadingSection } from "@wayward/game/language/segment/HeadingSegment";
import type { ILinkSection } from "@wayward/game/language/segment/LinkSegment";
import type { IListItemSection } from "@wayward/game/language/segment/ListSegment";
import type { IReferenceSection } from "@wayward/game/language/segment/ReferenceSegment";
import type { ITooltipSection } from "@wayward/game/language/segment/TooltipSegment";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { IInput, Modifier } from "@wayward/game/ui/input/IInput";
import type { IMacroSection } from "@wayward/game/ui/input/Macros";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { ISegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IEntireTextData {
    currentReferenceId?: string;
}
declare namespace IEntireTextData {
    function getReferenceId(section: IStringSection & Partial<IReferenceSection>): string | undefined;
}
export default class Text extends Component {
    static resolve(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[], ...args: TranslationArg[]): {
        sections: IStringSection[];
        context: TextContext;
    };
    private static areIdenticalSections;
    private static isIdenticalSection;
    static toString(translation: TranslationGenerator | undefined, additionalSegments?: ISegment[], ...args: TranslationArg[]): string;
    private segments;
    private text?;
    private args?;
    private paragraphs?;
    private existingSections?;
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
    dump(filter?: (element: HTMLElement, component?: Component) => boolean): this;
    private readonly refreshEvents;
    /**
     * Subscribes refresh events to the given host.
     *
     * **WARNING:** If you call this method without the element later being removed, it will cause a leak!
     * @param predicate A predicate function for whether or not this component should actually refresh when the event is hit
     */
    subscribeRefreshOn<E extends GameEmitterOrBus, K extends GameEvent<E>>(emitterOrBus: E, ...args: [...events: K[], predicate: (...params: Parameters<GameEventHandler<E, K>>) => boolean]): this;
    /**
     * Subscribes refresh events to the given host.
     *
     * **WARNING:** If you call this method without the element later being removed, it will cause a leak!
     */
    subscribeRefreshOn<E extends GameEmitterOrBus, K extends GameEvent<E>>(emitterOrBus: E, ...events: K[]): this;
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
    private onClick;
}
export {};
