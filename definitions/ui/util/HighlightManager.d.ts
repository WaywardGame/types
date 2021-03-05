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
import { Events } from "event/EventEmitter";
import Component from "ui/component/Component";
import { HighlightSelector, IHighlight } from "ui/component/IComponent";
import { IHighlightManager } from "ui/IUi";
export default class HighlightManager implements IHighlightManager {
    private readonly highlights;
    private readonly highlightComponents;
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
    end(host: any): void;
    /**
     * Registers this component to the given highlight selector.
     *
     * Note: When not providing `until` events, the `remove` event will be subscribed to automatically.
     */
    register<C extends Component>(component: C, selector: HighlightSelector, ...until: Array<keyof Events<C>>): void;
    private getHighlightSelectorId;
    private getHighlightComponents;
    private startHighlight;
}
