/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Human from "@wayward/game/game/entity/Human";
import type MerchantNPC from "@wayward/game/game/entity/npc/npcs/Merchant";
import type Item from "@wayward/game/game/item/Item";
import { ItemTradeType } from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import WeakishSet from "@wayward/utilities/collection/set/WeakishSet";
declare namespace _ {
    class ItemComponentTradeManager {
        private readonly tradingByItem;
        private readonly tradingToMerchant;
        private readonly tradingFromMerchant;
        getTrading(merchant: MerchantNPC, type: ItemTradeType): WeakishSet<Item> | undefined;
        getTradeType(item: Item): ItemTradeType | undefined;
        isTrading(item: Item, merchant: MerchantNPC): boolean;
        toggleTrading(items: Item[], merchant: MerchantNPC, trading: ItemTradeType): ItemTradeType;
        private sendMerchantChatMessage;
        clearTrading(merchant?: MerchantNPC): void;
        onTrade(merchant: MerchantNPC, human: Human): void;
    }
}
type ItemComponentTradeManager = _.ItemComponentTradeManager;
declare function ItemComponentTradeManager(): ItemComponentTradeManager;
export default ItemComponentTradeManager;
