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
import type Human from "@wayward/game/game/entity/Human";
import type { IContainer, IRecipe, IUncastableContainer, ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
export default class ItemRecipeRequirementChecker {
    private readonly human;
    private readonly trackItems?;
    private readonly cacheItems?;
    private readonly canUseItem?;
    itemBaseComponent: Item | undefined;
    itemComponentsRequired: Item[];
    itemComponentsConsumed: Item[];
    itemComponentsCanBurn: boolean;
    private numComponentsNeeded;
    private baseComponent;
    private readonly components;
    private readonly componentItems;
    private recipe;
    private adjacentContainers;
    private readonly cachedItems;
    private readonly relevantItemTypes;
    private readonly itemManager;
    constructor(human: Human, recipe?: IRecipe, trackItems?: boolean | undefined, cacheItems?: boolean | undefined, canUseItem?: ((item: Item, isConsumed: boolean, forItemTypeOrGroup: ItemType | ItemTypeGroup) => boolean) | undefined);
    /**
     * Returns the amount of items needed for the component
     */
    amountNeededForComponent(componentIndex: number): number;
    /**
     * Returns the items that will be used by the component
     * Only valid when trackItems is true
     */
    getItemsForComponent(componentIndex: number): Item[];
    requirementsMet(): boolean;
    setAdjacentContainers(adjacentContainers: IContainer[] | undefined): void;
    isDiscovered(): boolean;
    /**
     * Looks inside the humans inventory and around adjacent opened doodads
     * @returns true if the recipe's requirements are satisfied
     */
    process(): boolean;
    setRecipe(recipe: IRecipe | undefined): boolean;
    /**
     * Looks around adjacent containers
     * @returns true if the recipe's requirements are satisfied
     */
    processAdjacent(): boolean;
    /**
     * Looks inside the container and its subcontainers.
     * @param container The container
     * @returns true if the recipe's requirements are satisfied by items in the container.
     */
    processContainer(container: IUncastableContainer): boolean;
    private processItem;
    processBaseComponent(item: Item): boolean;
    processComponents(item: Item, disableExtraChecks?: boolean): boolean;
}
