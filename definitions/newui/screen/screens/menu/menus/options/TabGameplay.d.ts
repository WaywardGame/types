/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IRefreshable } from "newui/component/Refreshable";
import { Tab } from "newui/screen/screens/menu/component/Menu";
export default class TabGameplay extends Tab implements IRefreshable {
    private readonly refreshables;
    private readonly checkButtonAutoGatherHarvest;
    private readonly checkButtonAutoAttack;
    private readonly checkButtonDropOnGatherHarvest;
    private readonly checkButtonAutoPickup;
    private readonly checkButtonDropLocation;
    private readonly checkButtonWarnOnDangerousActions;
    private readonly checkButtonWarnWhenBreakingItemsOnUse;
    private readonly checkButtonwarnWhenBreakingItemsOnCraft;
    private readonly checkButtonKeepSortActive;
    private readonly checkButtonProtectedCraftingItems;
    private readonly checkButtonProtectedCraftingItemContainers;
    private readonly checkButtonUseAdjacentContainers;
    private readonly checkButtonHideEquippedHeadgear;
    private readonly dropdownAutoSave;
    private readonly rangeAutoSaveTimer;
    constructor();
    refresh(): this;
    private addRefreshable;
}
