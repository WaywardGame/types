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
import Human from "entity/Human";
import { IContainer, IRecipe, ItemType, ItemTypeGroup } from "item/IItem";
import Item from "item/Item";
export default class ItemRecipeRequirementChecker {
    private readonly human;
    private readonly recipe?;
    private readonly trackItems?;
    private readonly cacheItems?;
    private readonly canUseItem?;
    itemBaseComponent: Item | undefined;
    itemComponentsRequired: Item[];
    itemComponentsConsumed: Item[];
    itemComponentsCanBurn: boolean;
    numComponentsNeeded: number;
    private baseComponent;
    private components;
    private componentItems;
    private adjacentContainers;
    private readonly itemsToProcess;
    constructor(human: Human, recipe?: IRecipe | undefined, trackItems?: boolean | undefined, cacheItems?: boolean | undefined, canUseItem?: ((item: Item, isConsumed: boolean, forItemTypeOrGroup: ItemType | ItemTypeGroup) => boolean) | undefined);
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
    process(allowProtectedItems?: boolean): boolean;
    setRecipe(recipe: IRecipe): void;
    /**
     * Looks around adjacent containers
     * @returns true if the recipe's requirements are satisfied
     */
    processAdjacent(allowProtectedItems?: boolean): boolean;
    /**
     * Looks inside the container and its subcontainers.
     * @param container The container
     * @returns true if the recipe's requirements are satisfied by items in the container.
     */
    processContainer(container: IContainer, allowProtectedItems?: boolean): boolean;
    private processItem;
}
