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
    function getRequired(dismantle: IDismantleDescription, mode?: "action" | "standalone"): import("game/inspection/InfoProvider").SimpleInfoProvider | undefined;
    function getProduced(dismantle: IDismantleDescription, iconScale?: number): ItemDismantleOutputInfoProvider[];
    const SYMBOL_IS_DISMANTLE_INSPECTION: unique symbol;
    const useInfo: UseInfo<{
        dismantle: IDismantleDescription;
        objectType: import("../../../../IGame").CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: import("game/item/IItem").IItemDescription;
        quality: import("../../../../IObject").Quality;
        action: ActionType.Dismantle;
        union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Dismantle>;
        details: Set<symbol>;
    }, ActionType.Dismantle, {}, Item>;
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
    initComponent(): {
        component: import("../../../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
}
