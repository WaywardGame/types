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
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import Uses from "@wayward/game/game/inspection/infoProviders/Uses";
import type { IItemDescription, ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class ItemUses extends Uses<Item> {
    protected getEntityType(): EntityType.Item;
    protected getDescription(type: ItemType): IItemDescription;
    protected getUses(description: IItemDescription): ActionType[];
    protected getUseDisplayLevel(action: ActionType, context: InfoProviderContext): InfoDisplayLevel;
    protected getUseInfoHandlers(): Array<UseInfo<any, any, any, Item>>;
    protected getUse(description: IItemDescription, action: ActionType): TranslationImpl;
}
export declare class ItemUseContext extends InfoProviderContext {
    private readonly itemRef?;
    get item(): Item | undefined;
    constructor(item?: Item);
}
declare module "@wayward/game/game/inspection/InfoProviderContext" {
    interface InfoProviderContextRegistration {
        ItemUse: ItemUseContext;
    }
}
