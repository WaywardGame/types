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
import { UsableActionGenerator } from "game/entity/action/usable/UsableActionRegistrar";
declare const UsableActionsMain: UsableActionGenerator<[]>;
export default UsableActionsMain;
export declare enum UsableActionSet {
    /**
     * A set of usable action that appear before all other actions, unless {@link IUsableActionDefinitionBase.priority} causes them to appear even earlier.
     * Note that `priority` is used to sort "use item/doodad/npc" actions to the top — the actions that appear in {@link IItemDescription.use}.
     */
    First = 0,
    Vehicle = 1,
    WithHands = 2,
    PickUp = 3,
    Rest = 4,
    Misc = 5,
    Till = 6,
    UseItem = 7,
    CloseContainer = 8,
    Equip = 9,
    Craft = 10,
    XWithY = 11,
    ItemMisc = 12,
    ItemDrop = 13,
    ItemMoveMenus = 14,
    Doodads = 15,
    Creatures = 16,
    UseNPC = 17,
    Rename = 18,
    Protect = 19,
    Main = 20
}
export declare const usableActionSets: {
    0: UsableActionGenerator<[]>;
    1: UsableActionGenerator<[]>;
    2: UsableActionGenerator<[]>;
    3: UsableActionGenerator<[]>;
    4: UsableActionGenerator<[]>;
    5: UsableActionGenerator<[]>;
    6: UsableActionGenerator<[]>;
    7: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/item/UsableActionsUseItem").IUseItemAction, import("../IUsableAction").IUsableActionRequirements>;
    8: UsableActionGenerator<[]>;
    9: UsableActionGenerator<[]>;
    10: UsableActionGenerator<[]>;
    11: UsableActionGenerator<[]>;
    12: UsableActionGenerator<[]>;
    13: UsableActionGenerator<[isDropMenu?: true | undefined]>;
    14: UsableActionGenerator<[]>;
    15: UsableActionGenerator<[]>;
    16: UsableActionGenerator<[]>;
    17: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/UsableActionsUseNPC").IUseNPCAction, import("../IUsableAction").IUsableActionRequirements>;
    18: UsableActionGenerator<[]>;
    19: UsableActionGenerator<[]>;
    20: UsableActionGenerator<[]>;
};
