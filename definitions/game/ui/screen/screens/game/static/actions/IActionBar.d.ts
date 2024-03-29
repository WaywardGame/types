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
import type { ActionType } from "game/entity/action/IAction";
import type { IUsableActionPossibleUsing } from "game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "game/entity/action/usable/IUsableAction";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Item from "game/item/Item";
import type { Reference, ReferenceType } from "game/reference/IReferenceManager";
import type { Modifier } from "ui/input/IInput";
import type { ActionSlot } from "ui/screen/screens/game/static/ActionBar";
export interface IActionBarSlotData {
    useOnMove?: true;
    actionId?: string;
    using?: Omit<IUsableActionPossibleUsing, "item" | "doodad" | "creature" | "npc"> & {
        item?: Reference<ReferenceType.Item>;
        doodad?: Reference<ReferenceType.Doodad>;
        creature?: Reference<ReferenceType.Creature>;
        npc?: Reference<ReferenceType.NPC>;
    };
}
export declare module IActionBarSlotData {
    function using(slotData?: IActionBarSlotData): IUsableActionPossibleUsing;
    function item(slotData?: IActionBarSlotData | IActionBarSlotData["using"]): Item | undefined;
    function itemIs(slotData: IActionBarSlotData | IActionBarSlotData["using"] | undefined, item: Item): boolean;
    function copy(slotData?: IActionBarSlotData): IActionBarSlotData;
    function equals(a?: IActionBarSlotData, b?: IActionBarSlotData): boolean;
}
export declare function isActionBarUseOnMoveToggleBoundToClick(...modifiers: Modifier[]): boolean;
declare module "game/inspection/InfoProviderContext" {
    interface InfoProviderContextRegistration {
        ActionUse: ActionUseContext;
        ActionSlot: ActionSlotContext;
    }
}
export declare class ActionUseContext extends InfoProviderContext {
    readonly provided: IUsableActionPossibleUsing;
    readonly context: UsableActionDisplayContext;
    constructor(provided: IUsableActionPossibleUsing, context?: UsableActionDisplayContext);
}
export declare class ActionSlotContext extends InfoProviderContext {
    readonly actionSlot: ActionSlot;
    constructor(actionSlot: ActionSlot);
    getAction(): import("../../../../../../game/entity/action/usable/UsableAction").default<import("game/entity/action/usable/IUsableAction").IUsableActionRequirements, import("game/entity/action/usable/IUsableAction").IUsableActionDefinition<import("game/entity/action/usable/IUsableAction").IUsableActionRequirements>> | undefined;
    getUsing(): IUsableActionPossibleUsing;
    isAction(action: ActionType): boolean;
    getActionType(): ActionType | undefined;
    displayLevelExtraUnlessActionType(actionType: ActionType): InfoDisplayLevel.Always | InfoDisplayLevel.Extra;
}
export declare enum ActionSlotUpdateReason {
    AutoUseToggle = 0,
    Replace = 1,
    Using = 2,
    Verify = 3,
    Used = 4,
    ActionsDrawer = 5,
    LoadOrUpdateDirection = 6
}
