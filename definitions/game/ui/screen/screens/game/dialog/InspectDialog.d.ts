/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
export default class InspectDialog extends Dialog {
    private inspections?;
    private readonly dropdownDisplayLevel;
    private readonly scrollableWrapper;
    private readonly context;
    private inspected?;
    private readonly inspectionPast;
    private inspectionFuture;
    constructor();
    protected onLoad(): Promise<void | this>;
    inspectReference(reference: Reference): this;
    inspectTile(tile: Tile): this;
    inspectEquipSlot(slot: EquipType): this;
    inspectActionSlot(slot?: ActionSlot): this;
    inspectAlignment(): this;
    protected onClose(): void;
    protected onMoveToIsland(): void;
    private reinspect;
    private update;
    private removeOverlay;
    private setInspected;
    private setInspections;
    private back;
    private forward;
}
