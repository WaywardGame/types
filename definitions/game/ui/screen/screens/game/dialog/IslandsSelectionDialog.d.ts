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
import type ShipperNPC from "game/entity/npc/npcs/Shipper";
import IslandsDialog from "ui/screen/screens/game/dialog/islands/IslandsDialog";
export default class IslandsSelectionDialog extends IslandsDialog {
    private readonly shipButton;
    private readonly portDropdown;
    private readonly portDropdownLabelContainer;
    private npc;
    constructor();
    setShipper(npc: ShipperNPC): this;
    protected onChangedSelectedIsland(animate?: boolean): void;
    get island(): import("../../../../../game/island/Island").default | undefined;
    protected ship(): void;
}
