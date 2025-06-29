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
import { Block } from "@wayward/game/ui/component/Block";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import type { Heading } from "@wayward/game/ui/component/Text";
import { Paragraph } from "@wayward/game/ui/component/Text";
export default class WarningRow extends Block implements IRefreshable {
    readonly description: Paragraph;
    constructor();
    setTitle(headingInitializer: (heading: Heading) => any): this;
    setDescription(paragraphInitializer: (paragraph: Paragraph) => any): this;
    refresh(): this;
}
