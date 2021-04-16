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
import Button from "ui/component/Button";
import Component from "ui/component/Component";
export default class Details extends Component<HTMLDetailsElement> {
    summary: Button;
    get isOpen(): boolean;
    constructor();
    setBlock(block?: boolean): this;
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
