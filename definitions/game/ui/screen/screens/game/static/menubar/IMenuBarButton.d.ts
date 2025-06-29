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
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type Button from "@wayward/game/ui/component/Button";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export declare enum MenuBarButtonType {
    Menu = 0,
    Save = 1,
    Help = 2,
    QuickSettings = 3,
    Milestones = 4,
    Notes = 5,
    Quests = 6,
    Messages = 7,
    Actions = 8,
    Inventory = 9,
    Crafting = 10,
    Equipment = 11,
    Skills = 12,
    Islands = 13,
    ActionsItems = 14,
    Dismantle = 15
}
export declare const DEFAULT_MENU_BAR_BUTTON_ORDER: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
    13: number;
    14: number;
    15: number;
};
export interface IMenuBarButtonDescription extends IModdable, IHasImagePath {
    /**
     * The size of the icon. Defaults to 12x12
     */
    size?: IVector2;
    /**
     * Sorts this menu bar button into a group of other similar menu bar buttons.
     *
     * Internally, `MenuBarButtonGroup.Meta` and `MenuBarButtonGroup.World` are used. Not providing a group
     * adds it to an unsorted group.
     */
    group?: string | number;
    /**
     * The order index of this menu bar button. If not provided, this button will be put at the end. If `false`, the button will not appear by default
     * @see DEFAULT_MENU_BAR_BUTTON_ORDER
     */
    order?: number | false;
    /**
     * Adds the bindable's current bind translation to the tooltip automatically.
     */
    bindable?: Bindable;
    /**
     * What should happen when this button is clicked.
     */
    onActivate(api?: IBindHandlerApi): any;
    onCreate?(button: Button): any;
    onDispose?(button: Button): any;
    tooltip?(tooltip: Tooltip, button: Button, addBindLabel: (tooltip: Tooltip) => void): Tooltip;
}
export declare enum MenuBarButtonGroup {
    Meta = 0,
    World = 1
}
