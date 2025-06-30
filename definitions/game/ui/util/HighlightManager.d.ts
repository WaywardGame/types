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
import Component from "@wayward/game/ui/component/Component";
import type { HighlightSelector, HighlightSelectorResolved, IHighlight } from "@wayward/game/ui/util/IHighlight";
import { HighlightType } from "@wayward/game/ui/util/IHighlight";
import type { Events } from "@wayward/utilities/event/EventEmitter";
export default class HighlightManager {
    private readonly highlightableComponents;
    private readonly highlightableResolvers;
    /**
     * Registers this component to the given highlight selector.
     *
     * Note: When not providing `until` events, the `remove` event will be subscribed to automatically.
     */
    register<C extends Component>(component: C, selector: HighlightSelector | undefined, ...until: Array<keyof Events<C>>): void;
    /**
     * Registers a "resolver" function to the given highlight selector. This resolver function will be called to produce an additional list
     * of components to highlight when the highlight is started.
     *
     * This resolver function will never be automatically deregistered. Use {@link deregisterResolver} to deregister it.
     */
    registerResolver<C extends Component>(type: HighlightType | undefined, resolver: (selector: HighlightSelectorResolved) => ArrayOr<C> | undefined): void;
    deregisterResolver<C extends Component>(type: HighlightType | undefined, resolver: (selector: HighlightSelectorResolved) => ArrayOr<C> | undefined): void;
    is(component: Component, selector: HighlightSelector): boolean;
    private getHighlightSelectorId;
    private getHighlightableComponents;
    private readonly highlights;
    private readonly activeHighlights;
    private readonly activeHighlightTimeouts;
    private readonly activeHighlightsByComponent;
    private readonly activeHighlightsByType;
    /**
     * Begins a highlight.
     * @param host Any value, used to index the highlight
     * @param highlight The data describing what to highlight and how.
     *
     * Note: The `host` value is used for if multiple things require the same thing to be highlighted at the same time.
     * For example, consider if one thing wanted to highlight a menu bar button for 10 iterations, and something else wanted
     * to highlight the menu bar button for one. After that latter one finishes, if not for the system indexing by "host",
     * the highlight would end there and then, cancelling the remainder of the other highlight.
     */
    start(host: any, highlight: IHighlight): void;
    private startHighlightSelector;
    end(host: any): void;
    private deleteComponentHighlighter;
    private handleHighlightIterations;
}
