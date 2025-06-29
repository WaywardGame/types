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
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import { Heading } from "@wayward/game/ui/component/Text";
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
