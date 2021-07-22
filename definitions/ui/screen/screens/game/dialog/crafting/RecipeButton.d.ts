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
import ItemComponent from "ui/screen/screens/game/component/Item";
import { Craftable, RecipeSort } from "ui/screen/screens/game/dialog/crafting/RecipeCache";
export default class RecipeButton extends ItemComponent {
    readonly craftable: Craftable;
    private readonly sorts;
    constructor(craftable: Craftable);
    getSortOrder(sort: RecipeSort): number;
    onHover(): void;
    onUnhover(): void;
}
