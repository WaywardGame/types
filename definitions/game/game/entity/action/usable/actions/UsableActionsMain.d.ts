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
    Extinguish = 5,
    Misc = 6,
    Till = 7,
    UseItem = 8,
    CloseContainer = 9,
    Equip = 10,
    Craft = 11,
    XWithY = 12,
    ItemMisc = 13,
    ItemDrop = 14,
    ItemMoveMenus = 15,
    Doodads = 16,
    Creatures = 17,
    UseNPC = 18,
    Rename = 19,
    Protect = 20,
    Main = 21
}
export declare const usableActionSets: {
    0: UsableActionGenerator<[]>;
    1: UsableActionGenerator<[]>;
    2: UsableActionGenerator<[]>;
    3: UsableActionGenerator<[]>;
    4: UsableActionGenerator<[]>;
    5: UsableActionGenerator<[]>;
    6: UsableActionGenerator<[]>;
    7: UsableActionGenerator<[]>;
    8: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/item/UsableActionsUseItem").IUseItemAction, import("game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    9: UsableActionGenerator<[]>;
    10: UsableActionGenerator<[]>;
    11: UsableActionGenerator<[]>;
    12: UsableActionGenerator<[]>;
    13: UsableActionGenerator<[]>;
    14: UsableActionGenerator<[isDropMenu?: true | undefined]>;
    15: UsableActionGenerator<[]>;
    16: UsableActionGenerator<[]>;
    17: UsableActionGenerator<[]>;
    18: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/UsableActionsUseNPC").IUseNPCAction, import("game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    19: UsableActionGenerator<[]>;
    20: UsableActionGenerator<[]>;
    21: UsableActionGenerator<[]>;
};
