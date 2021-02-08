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
import Component from "newui/component/Component";
import Text from "newui/component/Text";
declare class List extends Component {
    constructor();
    addListItem(initializer: (listItemComponent: Component) => any): this;
}
declare module List {
    class Item extends Text {
        constructor();
    }
}
export default List;