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
     * A set of usable action that appear before all other actions, unless {@link IUsableActionDefinitionBase.order} causes them to appear even earlier.
     * Note that `order` is used to sort "use item/doodad/npc" actions to the top — the actions that appear in {@link IItemDescription.use}.
     */
    First = 0,
    WithHands = 1,
    PickUp = 2,
    Rest = 3,
    Misc = 4,
    Till = 5,
    UseItem = 6,
    CloseContainer = 7,
    Equip = 8,
    Craft = 9,
    XWithY = 10,
    ItemMisc = 11,
    ItemDrop = 12,
    ItemMoveMenus = 13,
    Doodads = 14,
    Creatures = 15,
    UseNPC = 16,
    Rename = 17,
    Protect = 18,
    Main = 19
}
export declare const usableActionSets: {
    0: UsableActionGenerator<[]>;
    1: UsableActionGenerator<[]>;
    2: UsableActionGenerator<[]>;
    3: UsableActionGenerator<[]>;
    4: UsableActionGenerator<[]>;
    5: UsableActionGenerator<[]>;
    6: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/item/UsableActionsUseItem").IUseItemAction, import("game/entity/action/usable/UsableAction").IUsableActionRequirements>;
    7: UsableActionGenerator<[]>;
    8: UsableActionGenerator<[]>;
    9: UsableActionGenerator<[]>;
    10: UsableActionGenerator<[]>;
    11: UsableActionGenerator<[]>;
    12: UsableActionGenerator<[isDropMenu?: true | undefined]>;
    13: UsableActionGenerator<[]>;
    14: UsableActionGenerator<[]>;
    15: UsableActionGenerator<[]>;
    16: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/UsableActionsUseNPC").IUseNPCAction, import("game/entity/action/usable/UsableAction").IUsableActionRequirements>;
    17: UsableActionGenerator<[]>;
    18: UsableActionGenerator<[]>;
    19: UsableActionGenerator<[]>;
};
