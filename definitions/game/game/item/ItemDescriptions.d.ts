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
import type { IItemDescription, IItemGroupDescription, IRecipeComponent } from "@wayward/game/game/item/IItem";
import type { ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
export declare const itemDescriptions: Descriptions<ItemType, IItemDescription>;
export declare const itemGroupDescriptions: Descriptions<ItemTypeGroup, IItemGroupDescription>;
export declare function RecipeComponent(type: ItemType | ItemTypeGroup, requiredAmount: number, consumedAmount: number, disassembleAmount?: number, ignoreWeight?: boolean, tileEventByProduct?: boolean): IRecipeComponent;
