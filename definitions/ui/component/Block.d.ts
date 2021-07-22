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
import Component from "ui/component/Component";
import Text from "ui/component/Text";
export declare const CLASS_BLOCK = "menu-block";
export declare class Block extends Component {
    constructor();
    addText(textInitializer: (text: Text) => any): this;
    addIcon(initializer: (component: Component) => any): this;
}
