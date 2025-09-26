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
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { ActionId, IUsableActionDefinition, IUsableActionPossibleUsing, IUsableActionRequirements } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import { ContainerReference } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type { Modifier } from "@wayward/game/ui/input/IInput";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
export declare enum ActionBarSharedClasses {
    ActionBar = "game-action-bar"
}
export declare const ACTION_BAR_MAX_SLOTS = 48;
export declare const ACTION_BAR_SLOTS_PER_ROW = 12;
export interface IActionBarSlotData {
    useOnMove?: true;
    useHovered?: true;
    useOnHoveredTile?: true;
    actionId?: ActionId;
    using?: Omit<IUsableActionPossibleUsing, "item" | "doodad" | "vehicle" | "creature" | "npc" | "fromTile" | "targetTile" | "container"> & {
        fromTile?: number;
        targetTile?: number;
        item?: Reference<ReferenceType.Item>;
        container?: ContainerReference;
        doodad?: Reference<ReferenceType.Doodad>;
        vehicle?: Reference<ReferenceType.Doodad>;
        creature?: Reference<ReferenceType.Creature>;
        npc?: Reference<ReferenceType.NPC>;
    };
}
export declare namespace IActionBarSlotData {
    function using(slotData?: IActionBarSlotData): IUsableActionPossibleUsing;
    function usingData(using: IUsableActionPossibleUsing): IActionBarSlotData["using"];
    function assign(using: IUsableActionPossibleUsing, to: IActionBarSlotData): void;
    function item(slotData?: IActionBarSlotData | IActionBarSlotData["using"]): Item | undefined;
    function itemIs(slotData: IActionBarSlotData | IActionBarSlotData["using"] | undefined, item: Item): boolean;
    function copy(slotData?: IActionBarSlotData): IActionBarSlotData;
    function equals(a?: IActionBarSlotData, b?: IActionBarSlotData): boolean;
}
export declare function isActionBarUseOnMoveToggleBoundToClick(...modifiers: Modifier[]): boolean;
export interface IActionUseContextUsing extends Omit<IUsableActionPossibleUsing, "misc"> {
    misc?(): any[];
}
export declare class ActionUseContext extends InfoProviderContext {
    readonly context: UsableActionDisplayContext;
    private readonly stored?;
    get provided(): IActionUseContextUsing | undefined;
    constructor(provided: IActionUseContextUsing, context?: UsableActionDisplayContext);
}
export declare class ActionSlotContext extends InfoProviderContext {
    private readonly slotRef?;
    get actionSlot(): ActionSlot | undefined;
    constructor(actionSlot: ActionSlot, maxDisplayLevel?: InfoDisplayLevel);
    getAction(): UsableAction<IUsableActionRequirements, IUsableActionDefinition> | undefined;
    getUsing(): IUsableActionPossibleUsing;
    isAction(action: ActionType): boolean;
    getActionType(): ActionType | undefined;
    displayLevelExtraUnlessActionType(actionType: ActionType): InfoDisplayLevel.Always | InfoDisplayLevel.Extra;
}
declare module "@wayward/game/game/inspection/InfoProviderContext" {
    interface InfoProviderContextRegistration {
        ActionUse: ActionUseContext;
        ActionSlot: ActionSlotContext;
    }
}
export declare enum ActionSlotUpdateReason {
    AutoUseToggle = 0,
    Replace = 1,
    Using = 2,
    Verify = 3,
    Used = 4,
    ActionsDrawer = 5,
    LoadOrUpdateDirection = 6,
    UsableActionUpdate = 7,
    HoveredItemChanged = 8,
    HistoryChange = 9,
    HistoryItemChange = 10,
    HoveredTileChange = 11
}
export declare enum ActionBarClasses {
    Main = "game-action-bar",
    Configuring = "game-action-bar-configuring",
    SlotsContainer = "game-action-bar-slots",
    SlotsContainerLastFour = "game-action-bar-slots-last-four",
    SlotsContainerHistory = "game-action-bar-slots-history",
    MovingSlot = "game-action-bar-moving-slot",
    MetaButtons = "game-action-bar-meta-buttons-container",
    MetaButton = "game-action-bar-meta-button",
    MetaButtonAdd = "game-action-bar-meta-button-add",
    MetaButtonRemove = "game-action-bar-meta-button-remove",
    MetaButtonConfigure = "game-action-bar-meta-button-configure",
    MetaButtonToggleUseWhenMoving = "game-action-bar-meta-button-toggle-use-when-moving",
    _HistoryInactive = "game-action-bar--history-inactive",
    _HistoryActive = "game-action-bar--history-active",
    _HistoryClearing = "game-action-bar--history-clearing",
    _AutoPaused = "game-action-bar--auto-paused"
}
