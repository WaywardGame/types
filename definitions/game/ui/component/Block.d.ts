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
import Text, { Heading } from "@wayward/game/ui/component/Text";
export declare const CLASS_BLOCK = "menu-block";
export declare class Block extends Component {
    constructor();
    heading?: Heading;
    setHeading(headingInitializer: (heading: Heading) => any): this;
    addText(textInitializer: (text: Text) => any): this;
}
