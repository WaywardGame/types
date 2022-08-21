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
import Bindable from "ui/input/Bindable";
import BindableManager from "ui/input/BindableManager";
export default class ActionBarBindableManager extends BindableManager {
    static readonly DEFAULT_ACTION_BAR_SLOTS = 10;
    static readonly INSTANCE: ActionBarBindableManager;
    private requiredSlots;
    private constructor();
    getSlotUseBindable(slot: number): Bindable | undefined;
    getSlotToggleBindable(slot: number): Bindable | undefined;
    requireSlots(slotCount: number): void;
    private generateBindings;
    private generateCatalyst;
}
