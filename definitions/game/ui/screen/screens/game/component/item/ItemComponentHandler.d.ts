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
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import type { Quality } from "@wayward/game/game/IObject";
import type { ItemTypeExtra, IContainer } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
import type Sortable from "@wayward/game/ui/util/Sortable";
export interface IItemComponentHandlerDescription {
    noDrag?: true;
    equipSlot?: EquipType;
    hasHighlight?: SupplierOr<boolean>;
    getItem?(): Item | undefined;
    getItemType?(): ItemType | ItemTypeExtra | undefined;
    getItemQuality?(): ArrayOr<Quality> | undefined;
    getAction?(): UsableAction | undefined;
    getActionSlot?(): ActionSlot | undefined;
    getBindables?(bindables: Bindable[]): Bindable[];
    getSortable?(): Sortable;
    getStackQuantity?(): number;
    getContainer?(): IContainer | undefined;
    getStackItems?(): readonly Item[];
    getStackDisplayItem?(): Item | undefined;
    getDisplayItem?(): Item | undefined;
    getDurability?(): number;
    getCooldown?(): number;
    isDamaged?(): boolean;
    isDecayed?(): boolean;
}
export interface ItemComponentHandler extends IItemComponentHandlerDescription {
}
export declare class ItemComponentHandler {
    readonly isItemComponentHandler = true;
    constructor(description?: IItemComponentHandlerDescription);
}
