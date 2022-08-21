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
import type { EquipType } from "game/entity/IHuman";
import type Player from "game/entity/player/Player";
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import type Item from "game/item/Item";
import InspectionsList from "ui/screen/screens/game/component/InspectionsList";
import type { InspectionTooltipHints } from "ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "ui/screen/screens/game/InspectionsTooltipHandler";
import type Tooltip from "ui/tooltip/Tooltip";
import type HashSet from "utilities/collection/set/HashSet";
export declare enum EquipmentSlotTooltipClasses {
    Hints = "game-dialog-equipment-slot-tooltip-hints"
}
export default class EquipmentSlotTooltipHandler extends InspectionsTooltipHandler<EquipmentSlotInspectionsList, [slot: EquipType]> {
    initializeTooltip(tooltip: Tooltip, slot: EquipType): Promise<void>;
    protected initializeInspections(slot: EquipType): EquipmentSlotInspectionsList;
    protected initializeHints(hints: InspectionTooltipHints, slot: EquipType): void;
    private onSlotChanged;
}
declare class EquipmentSlotInspectionsList extends InspectionsList<EquipmentSlotInspectionsHandler> {
    readonly slot: EquipType;
    constructor(slot: EquipType, context: InfoProviderContext);
    protected initializeInspections(): EquipmentSlotInspectionsHandler;
}
declare class EquipmentSlotInspectionsHandler extends InspectionsHandler {
    private readonly slot;
    constructor(slot: EquipType, context: InfoProviderContext);
    getInspectTypes(): InspectType[];
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
    protected onEquip(player: Player, item: Item, slot: EquipType): void;
}
export {};
