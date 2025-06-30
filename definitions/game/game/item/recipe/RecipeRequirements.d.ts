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
import { RecipeRequirementType } from "@wayward/game/game/item/recipe/RecipeRequirement";
import DoodadRequirement from "@wayward/game/game/item/recipe/requirement/DoodadRequirement";
import FireRequirement from "@wayward/game/game/item/recipe/requirement/FireRequirement";
import ItemRequirement from "@wayward/game/game/item/recipe/requirement/ItemRequirement";
import ToolRequirement from "@wayward/game/game/item/recipe/requirement/ToolRequirement";
declare const requirements: {
    0: typeof ItemRequirement;
    1: typeof ToolRequirement;
    2: typeof DoodadRequirement;
    3: typeof FireRequirement;
};
export default requirements;
export type RecipeRequirementClass<R extends RecipeRequirementType> = (typeof requirements)[R];
