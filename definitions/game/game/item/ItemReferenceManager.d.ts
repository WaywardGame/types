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
import type Island from "game/island/Island";
import type { ContainerReference, IContainable } from "game/item/IItem";
declare module ItemReferenceManager {
    /**
     * Don't use this
     */
    function getContainerReferenceSlow(containable: IContainable, includeIsland?: boolean): ContainerReference;
    function getContainerReferenceInIsland(island: Island, containable: IContainable | undefined, showWarnings?: boolean): ContainerReference;
    function derefenceContainerReference(containerRef: ContainerReference, island?: Island): object | undefined;
}
export default ItemReferenceManager;
