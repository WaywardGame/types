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
import { UsableActionGenerator } from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
declare const UsableActionsMain: UsableActionGenerator<[]>;
export default UsableActionsMain;
export declare enum UsableActionSet {
    /**
     * A set of usable action that appear before all other actions, unless {@link IUsableActionDefinitionBase.priority} causes them to appear even earlier.
     * Note that `priority` is used to sort "use item/doodad/npc" actions to the top — the actions that appear in {@link IItemDescription.use}.
     */
    First = 0,
    Command = 1,
    CommandAll = 2,
    Vehicle = 3,
    Drink = 4,
    Doodads = 5,
    Extinguish = 6,
    UseItem = 7,
    PickUp = 8,
    Containers = 9,
    UseCreature = 10,
    UseNPC = 11,
    Rest = 12,
    WithHands = 13,
    Till = 14,
    Misc = 15,
    Equip = 16,
    Craft = 17,
    XWithY = 18,
    ItemMisc = 19,
    ItemMove = 20,
    ItemDrop = 21,
    Rename = 22,
    Protect = 23,
    Main = 24
}
export declare const usableActionSets: {
    0: UsableActionGenerator<[]>;
    1: UsableActionGenerator<[isCommandMenu?: true | undefined]>;
    2: UsableActionGenerator<[isCommandMenuAll?: true | undefined]>;
    3: UsableActionGenerator<[]>;
    4: UsableActionGenerator<[]>;
    5: UsableActionGenerator<[]>;
    6: UsableActionGenerator<[]>;
    7: import("./UsableActionsDynamic").default<import("@wayward/game/game/entity/action/usable/actions/item/UsableActionsUseItem").IUseItemAction, import("@wayward/game/game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    8: UsableActionGenerator<[]>;
    9: UsableActionGenerator<[]>;
    10: import("./UsableActionsDynamic").default<import("@wayward/game/game/entity/action/usable/actions/UsableActionsUseCreature").IUseCreatureAction, import("@wayward/game/game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    11: import("./UsableActionsDynamic").default<import("@wayward/game/game/entity/action/usable/actions/UsableActionsUseNPC").IUseNPCAction, import("@wayward/game/game/entity/action/usable/IUsableAction").IUsableActionRequirements>;
    12: UsableActionGenerator<[]>;
    13: UsableActionGenerator<[]>;
    14: UsableActionGenerator<[]>;
    15: UsableActionGenerator<[]>;
    16: UsableActionGenerator<[]>;
    17: UsableActionGenerator<[]>;
    18: UsableActionGenerator<[]>;
    19: UsableActionGenerator<[]>;
    20: UsableActionGenerator<[container?: import("@wayward/game/game/entity/action/usable/actions/item/UsableActionsItemMove").UsableActionsItemMoveContainer | undefined]>;
    21: UsableActionGenerator<[isDropMenu?: true | undefined]>;
    22: UsableActionGenerator<[]>;
    23: UsableActionGenerator<[]>;
    24: UsableActionGenerator<[]>;
};
