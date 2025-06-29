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
import BindableManager from "@wayward/game/ui/input/BindableManager";
export default class ActionBarBindableManager extends BindableManager {
    static readonly DEFAULT_ACTION_BAR_ROW_MODIFIER_ORDER: string;
    static readonly INSTANCE: ActionBarBindableManager;
    private requiredSlots;
    private constructor();
    getSlotUseBindable(slot: number): number | undefined;
    getSlotAssignBindable(slot: number): number | undefined;
    getSlotToggleUseOnMoveBindable(slot: number): number | undefined;
    requireSlots(slotCount: number, modifierOrderHash: string): void;
    private generateBindings;
    private generateUseOnMoveBindings;
    private generateAssignBindings;
    private generateBinding;
}
