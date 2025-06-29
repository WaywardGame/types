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
import Text from "@wayward/game/ui/component/Text";
declare class List extends Component {
    constructor();
    addListItems(...initializers: Array<(listItemComponent: Component) => any>): this;
}
declare namespace List {
    class Item extends Text {
        constructor();
    }
}
export default List;
