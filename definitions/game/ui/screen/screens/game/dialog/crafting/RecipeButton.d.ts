/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ItemType } from "game/item/IItem";
import Component from "ui/component/Component";
import type { Craftable } from "ui/screen/screens/game/dialog/crafting/RecipeCache";
import { RecipeSort } from "ui/screen/screens/game/dialog/crafting/RecipeCache";
declare class ItemComponent extends Component {
    readonly itemType: ItemType;
    constructor(itemType: ItemType);
}
export default class RecipeButton extends ItemComponent {
    readonly craftable: Craftable;
    private readonly sorts;
    constructor(craftable: Craftable);
    getSortOrder(sort: RecipeSort): number;
    onHover(): void;
    onUnhover(): void;
}
export {};
