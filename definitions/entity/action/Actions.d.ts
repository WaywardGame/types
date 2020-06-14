/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ActionType } from "entity/action/IAction";
declare const actionDescriptions: {
    52: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    78: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    81: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    3: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    29: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../player/Player").default | import("../npc/NPC").default, void>;
    5: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default, void>;
    16: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../player/Player").default | import("../npc/NPC").default, void>;
    74: import("./Action").Action<[import("./IAction").ActionArgument.Container, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    51: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean>;
    68: import("./Action").Action<[import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.ItemArrayNearby, import("./IAction").ActionArgument.ItemArrayNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    20: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default, void>;
    82: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    12: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    0: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    41: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    40: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    33: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    63: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    8: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    57: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    7: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    86: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    65: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.EquipType, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    39: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    37: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    23: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    72: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    27: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    14: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    89: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Container, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Quality, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    53: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    71: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    11: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    47: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    79: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    62: import("./Action").Action<[], import("../player/Player").default, void>;
    28: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    58: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    21: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default, void>;
    17: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    88: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    59: import("./Action").Action<[import("./IAction").ActionArgument.Direction], import("../player/Player").default, void>;
    67: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Container, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Quality, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    60: import("./Action").Action<[import("./IAction").ActionArgument.Vector2, [import("./IAction").ActionArgument.Direction, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    87: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    56: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default, void>;
    32: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    30: import("./Action").Action<[import("./IAction").ActionArgument.Container, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    50: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean>;
    13: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default, void>;
    44: import("./Action").Action<[], import("../player/Player").default, void>;
    1: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    55: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    84: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    54: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    77: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../player/Player").default | import("../npc/NPC").default, void>;
    26: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    25: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    42: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    31: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    73: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    83: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    22: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    46: import("./Action").Action<[], import("../player/Player").default, void>;
    70: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Creature], import("./IAction").ActionArgument.String], import("../player/Player").default | import("../npc/NPC").default, void>;
    19: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    9: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.RestType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    48: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    49: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    35: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    6: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    15: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    10: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.RestType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    18: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    75: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    43: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    4: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory, [import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    24: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    45: import("./Action").Action<[], import("../player/Player").default, void>;
    38: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    34: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    85: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    2: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    69: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    76: import("./Action").Action<[import("./IAction").ActionArgument.NPC], import("../player/Player").default | import("../npc/NPC").default, void>;
    36: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory, [import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    66: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    80: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    61: import("./Action").Action<[import("./IAction").ActionArgument.Direction, [import("./IAction").ActionArgument.Number, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    64: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.ActionType], import("../player/Player").default | import("../npc/NPC").default, void>;
};
export default actionDescriptions;
