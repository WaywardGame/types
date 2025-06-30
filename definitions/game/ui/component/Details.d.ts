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
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IDetailsEvents extends Events<Component<HTMLDetailsElement>> {
    open(): any;
    close(): any;
    toggle(open: boolean): any;
}
export declare enum DetailsClasses {
    Main = "details",
    _Padded = "details--padded",
    _Simplified = "details--simplified"
}
export default class Details extends Component<HTMLDetailsElement> {
    event: IEventEmitter<this, IDetailsEvents>;
    summary: Button;
    get isOpen(): boolean;
    constructor();
    setBlock(block?: boolean): this;
    setPadded(padded?: boolean): this;
    setSimplified(simplified?: boolean): this;
    setSummary(initializer?: (summary: Button) => any): this;
    refreshSummary(): this;
    open(): this;
    close(): this;
    toggleOpen(open?: boolean): this;
    /**
     * Safe — removes all children except for the summary
     */
    dump(): this;
}
