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
import { ActionType } from "game/entity/action/IAction";
import { IIcon, InfoProvider } from "game/inspection/InfoProvider";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import { IDismantleDescription, ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import Translation from "language/Translation";
declare module ItemDismantleInfo {
    type Mode = "action" | "standalone";
    export function getRequired(item: ItemType, dismantle: IDismantleDescription, mode?: Mode): import("../../../InfoProvider").SimpleInfoProvider | undefined;
    export function getProduced(dismantle: IDismantleDescription, iconScale?: number): ItemDismantleOutputInfoProvider[];
    export const SYMBOL_IS_DISMANTLE_INSPECTION: unique symbol;
    export const useInfo: UseInfo<{
        dismantle: IDismantleDescription;
        objectType: import("../../../../IGame").CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: import("../../../../item/IItem").IItemDescription;
        quality: import("../../../../IObject").Quality;
        action: ActionType.Dismantle;
        union: import("../../UseInfo").IUseInfoBase<Item, ActionType.Dismantle>;
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
    get(): Translation;
}
