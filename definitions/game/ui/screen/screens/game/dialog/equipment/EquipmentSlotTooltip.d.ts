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
import type Player from "@wayward/game/game/entity/player/Player";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import InspectionsHandler from "@wayward/game/game/inspection/InspectionsHandler";
import type Item from "@wayward/game/game/item/Item";
import InspectionsList from "@wayward/game/ui/screen/screens/game/component/InspectionsList";
import type { InspectionTooltipHints } from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import InspectionsTooltipHandler from "@wayward/game/ui/screen/screens/game/InspectionsTooltipHandler";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type HashSet from "@wayward/utilities/collection/set/HashSet";
export declare enum EquipmentSlotTooltipClasses {
    Hints = "game-dialog-equipment-slot-tooltip-hints"
}
export default class EquipmentSlotTooltipHandler extends InspectionsTooltipHandler<EquipmentSlotInspectionsList, [slot: EquipType]> {
    initializeTooltip(tooltip: Tooltip, slot: EquipType): Promise<boolean>;
    protected initializeInspections(slot: EquipType): EquipmentSlotInspectionsList;
    protected initializeHints(hints: InspectionTooltipHints, slot: EquipType): void;
    private onSlotChanged;
}
export declare class EquipmentSlotInspectionsList extends InspectionsList<EquipmentSlotInspectionsHandler> {
    readonly slot: EquipType;
    constructor(slot: EquipType, context: InfoProviderContext);
    protected initializeInspections(): EquipmentSlotInspectionsHandler;
    protected onInspect(): boolean;
}
declare class EquipmentSlotInspectionsHandler extends InspectionsHandler {
    private readonly slot;
    constructor(slot: EquipType, context: InfoProviderContext);
    getInspectTypes(): InspectType[];
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
    protected onEquip(player: Player, item: Item, slot: EquipType): void;
}
export {};
