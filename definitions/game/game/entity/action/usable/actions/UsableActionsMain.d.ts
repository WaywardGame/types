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
import { UsableActionGenerator } from "game/entity/action/usable/UsableActionRegistrar";
declare const UsableActionsMain: UsableActionGenerator<[]>;
export default UsableActionsMain;
export declare enum UsableActionSet {
    /**
     * A set of usable action that appear before all other actions, unless {@link IUsableActionDefinitionBase.priority} causes them to appear even earlier.
     * Note that `priority` is used to sort "use item/doodad/npc" actions to the top — the actions that appear in {@link IItemDescription.use}.
     */
    First = 0,
    TamedCreatures = 1,
    Vehicle = 2,
    Drink = 3,
    Doodads = 4,
    Extinguish = 5,
    UseItem = 6,
    PickUp = 7,
    Containers = 8,
    Creatures = 9,
    UseNPC = 10,
    Rest = 11,
    WithHands = 12,
    Till = 13,
    Misc = 14,
    Equip = 15,
    Craft = 16,
    XWithY = 17,
    ItemMisc = 18,
    ItemMoveMenus = 19,
    ItemDrop = 20,
    Rename = 21,
    Protect = 22,
    Main = 23
}
export declare const usableActionSets: {
    0: UsableActionGenerator<[]>;
    1: UsableActionGenerator<[]>;
    2: UsableActionGenerator<[]>;
    3: UsableActionGenerator<[]>;
    4: UsableActionGenerator<[]>;
    5: UsableActionGenerator<[]>;
    6: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/item/UsableActionsUseItem").IUseItemAction, import("game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    7: UsableActionGenerator<[]>;
    8: UsableActionGenerator<[]>;
    9: UsableActionGenerator<[]>;
    10: import("./UsableActionsDynamic").default<import("game/entity/action/usable/actions/UsableActionsUseNPC").IUseNPCAction, import("game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    11: UsableActionGenerator<[]>;
    12: UsableActionGenerator<[]>;
    13: UsableActionGenerator<[]>;
    14: UsableActionGenerator<[]>;
    15: UsableActionGenerator<[]>;
    16: UsableActionGenerator<[]>;
    17: UsableActionGenerator<[]>;
    18: UsableActionGenerator<[]>;
    19: UsableActionGenerator<[moveTarget?: import("game/entity/action/usable/actions/item/UsableActionsItemMove").UsableActionsItemMoveTarget | undefined]>;
    20: UsableActionGenerator<[isDropMenu?: true | undefined]>;
    21: UsableActionGenerator<[]>;
    22: UsableActionGenerator<[]>;
    23: UsableActionGenerator<[]>;
};
