/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Block } from "ui/component/Block";
import Component from "ui/component/Component";
import type { IRefreshable } from "ui/component/Refreshable";
import { Heading, Paragraph } from "ui/component/Text";
export default class WarningRow extends Component implements IRefreshable {
    readonly block: Block;
    readonly blockTextWrapper: Component<HTMLElement>;
    readonly title: Heading;
    readonly description: Paragraph;
    constructor();
    setTitle(headingInitializer: (heading: Heading) => any): this;
    setDescription(paragraphInitializer: (paragraph: Paragraph) => any): this;
    refresh(): this;
}
