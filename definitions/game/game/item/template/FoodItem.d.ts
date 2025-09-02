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
import type { IItemDescription } from "@wayward/game/game/item/IItem";
type FoodItemProperties = ("use" | "onUse" | "decayMax" | "decaysInto" | "decayTemperatureRange" | "onBurn" | "weight" | "worth" | "skillUse" | "group" | "recipe" | "dismantle" | "returnOnUseAndDecay" | "tier" | "flammable" | "spawnOnMerchant" | "createOnBreak");
export type IFoodItemDescription = PickRequired<IItemDescription, FoodItemProperties>;
export default function foodItem(description: IFoodItemDescription): IFoodItemDescription;
export {};
