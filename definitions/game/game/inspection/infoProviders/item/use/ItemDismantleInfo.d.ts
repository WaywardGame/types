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
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IIcon, SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type { IDismantleDescription, ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
declare namespace ItemDismantleInfo {
    type Mode = "action" | "standalone";
    export function getRequired(item: ItemType, dismantle: IDismantleDescription, mode?: Mode): SimpleInfoProvider | undefined;
    export function getProduced(dismantle: IDismantleDescription, iconScale?: number): ItemDismantleOutputInfoProvider[];
    export const SYMBOL_IS_DISMANTLE_INSPECTION: unique symbol;
    export const useInfo: UseInfo<{
        dismantle: IDismantleDescription;
        entityType: import("../../../../entity/IEntity").EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: Readonly<import("@wayward/game/game/item/IItem").IItemDescription>;
        quality: import("../../../../IObject").Quality;
        action: ActionType.Dismantle;
        union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Dismantle>;
        details: Set<symbol>;
    }, ActionType.Dismantle, {}, Item>;
    export {};
}
export default ItemDismantleInfo;
declare class ItemDismantleOutputInfoProvider extends InfoProvider {
    private readonly item;
    private readonly count;
    private readonly scale;
    constructor(item: ItemType, count: number, scale?: number);
    getClass(): string[];
    getIcon(): IIcon;
    get(): InfoProvider;
}
