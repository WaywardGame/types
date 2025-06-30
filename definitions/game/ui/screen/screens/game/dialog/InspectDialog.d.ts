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
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
export default class InspectDialog extends Dialog {
    private static get baseContext();
    private inspections?;
    private readonly dropdownDisplayLevel;
    private readonly scrollableWrapper;
    private context;
    private inspected?;
    private inspectionPast;
    private inspectionFuture;
    constructor();
    protected onLoad(): Promise<void | this>;
    private loadInspections;
    inspectReference(reference: Reference, context?: InfoProviderContext): boolean;
    inspectTile(tile: Tile): boolean;
    inspectEquipSlot(slot: EquipType): boolean;
    inspectActionSlot(slot?: ActionSlot): boolean;
    protected onClose(): void;
    protected onMoveToIsland(): void;
    private reinspect;
    private tryInspect;
    private update;
    private removeOverlay;
    private setInspected;
    private setInspections;
    private back;
    private forward;
}
