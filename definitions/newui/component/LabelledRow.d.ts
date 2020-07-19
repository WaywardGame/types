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
import { BlockRow } from "newui/component/BlockRow";
import { Heading } from "newui/component/Text";
export declare class LabelledRow extends BlockRow {
    readonly label: Heading;
    constructor();
    setLabel(labelInitializer: (label: Heading) => Heading): this;
    refresh(): this;
    /**
     * Safe — removes all children except for the label
     */
    dump(): this;
}
