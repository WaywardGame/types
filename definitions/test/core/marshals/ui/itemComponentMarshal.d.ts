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
import type { Application } from "@wayward/test/core/application";
import { ContainerBucketMarshal } from "@wayward/test/core/marshals/ui/ContainerBucketMarshal";
export declare class ItemComponentMarshal {
    private readonly application;
    private readonly element;
    constructor(application: Application, element: WebdriverIO.Element);
    isStack(): Promise<boolean>;
    isWithinPlayerInventoryBucket(): Promise<boolean>;
    getContainerBucket(): Promise<ContainerBucketMarshal>;
    /**
     * Clicks an action on the context menu for the given item type
     */
    useItemAction(...actions: string[]): Promise<void>;
    private getContainerDialogElement;
}
