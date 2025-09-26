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
import type { ITradeArgument } from "@wayward/game/game/entity/action/actions/trade/TradeArgument";
import type MerchantNPC from "@wayward/game/game/entity/npc/npcs/Merchant";
import Translation from "@wayward/game/language/Translation";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import Text from "@wayward/game/ui/component/Text";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
export declare enum TradeDialogClasses {
    Main = "trade-dialog",
    ContainerMerchantInventory = "trade-dialog-container-merchant-inventory",
    TradeColumn = "trade-dialog-trade-column",
    TradeButton = "trade-dialog-trade-column-button",
    TradeButtonDisabled = "trade-dialog-trade-column-button-disabled",
    TradeWrapper = "trade-dialog-trade-wrapper",
    TradeWrapperMerchant = "trade-dialog-trade-wrapper-merchant",
    TradeWrapperYou = "trade-dialog-trade-wrapper-you",
    TradeTitle = "trade-dialog-trade-title",
    TradeTitleMerchant = "trade-dialog-trade-title-merchant",
    TradeTitleYou = "trade-dialog-trade-title-you",
    TradeContainer = "trade-dialog-trade-container",
    TradeContainerMerchant = "trade-dialog-trade-container-merchant",
    TradeContainerYou = "trade-dialog-trade-container-you",
    Text = "trade-dialog-text",
    TextMerchantCapacity = "trade-dialog-text-merchant-capacity",
    TextCredit = "trade-dialog-text-credit"
}
export default class TradeDialog extends Dialog {
    readonly inventory: import("../component/ContainerBucket").default;
    readonly tradeWrapperMerchant: Component<HTMLElement>;
    readonly tradeTitleMerchant: Text;
    readonly tradeContainerMerchant: import("../component/ContainerBucket").default;
    readonly tallySticksMerchant: ItemComponent | undefined;
    readonly merchantWeightCapacity: Text;
    readonly tradeColumn: Component<HTMLElement>;
    readonly tradeButton: Button;
    readonly tradeWrapperYou: Component<HTMLElement>;
    readonly tradeTitleYou: Text;
    readonly tradeContainerYou: import("../component/ContainerBucket").default;
    readonly tallySticksYou: ItemComponent | undefined;
    readonly credit: Text;
    private merchantRef?;
    get merchant(): MerchantNPC | undefined;
    constructor(id?: DialogId, subId?: string);
    getName(): Translation | undefined;
    protected onAppend1(): void;
    protected onTickEnd(): void;
    protected onMerchantTrade(merchant: MerchantNPC, human: Human, trade: ITradeArgument): void;
    protected onClose(): void;
    private onTrade;
    private onTransferFrom;
    private onTransferTo;
    private transfer;
    private balanceCredit;
    private getBalancingCredit;
    private createTallySticksComponent;
    private getMerchantWeightCapacity;
    private getCurrentCredit;
    private getTrading;
    private getWorth;
    private getTradeArgument;
}
