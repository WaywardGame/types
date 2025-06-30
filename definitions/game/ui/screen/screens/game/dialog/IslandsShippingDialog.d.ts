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
import type ShipperNPC from "@wayward/game/game/entity/npc/npcs/Shipper";
import type { IIslandPort } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import Button from "@wayward/game/ui/component/Button";
import IslandsDialog from "@wayward/game/ui/screen/screens/game/dialog/islands/IslandsDialog";
export declare enum IslandsShippingDialogClasses {
    PortButtonShipping = "game-dialog-islands-port-button-shipping",
    PortsOnlyMode = "game-dialog-islands-ports-only-mode"
}
export default class IslandsShippingDialog extends IslandsDialog {
    private npcId?;
    get npc(): ShipperNPC | undefined;
    constructor();
    setShipper(npc: ShipperNPC): this;
    protected createExecuteButton(port?: IIslandPort): Button | undefined;
    protected onChangedSelectedIsland(animate?: boolean): void;
    protected shouldDisplayIsland(x: number, y: number, island?: Island): boolean;
    protected shouldDisplayConstructLighthousesHint(): boolean;
    protected isSelectedIslandValid(): boolean;
    protected ship(port: IIslandPort): void;
    protected onLoad(initial: boolean): Promise<void>;
    protected onTickEnd(): void;
    private updatePortsOnlyMode;
}
