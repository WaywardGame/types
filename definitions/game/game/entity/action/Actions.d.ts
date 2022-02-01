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
import { ActionType } from "game/entity/action/IAction";
declare const actionDescriptions: {
    50: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, import("../../item/Item").default]>;
    95: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory, [import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    75: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    78: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    3: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.AttackType, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../IEntity").AttackType | undefined)?]>;
    27: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    5: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    15: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    99: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (boolean | undefined)?]>;
    71: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.Container, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/IItem").IContainer | undefined)?, (boolean | undefined)?]>;
    49: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean, []>;
    25: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default, void, [import("../../item/Item").default]>;
    66: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemType, import("game/entity/action/IAction").ActionArgument.ItemArrayNearby, import("game/entity/action/IAction").ActionArgument.ItemArrayNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/IItem").ItemType, import("../../item/Item").default[], import("../../item/Item").default[], (import("../../item/Item").default | undefined)?, (boolean | undefined)?]>;
    31: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    79: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    12: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?]>;
    0: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    39: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    38: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    61: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    8: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    55: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.String, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (boolean | undefined)?, (boolean | undefined)?, (string | undefined)?]>;
    7: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    83: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    93: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory, [import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    63: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.EquipType, [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, import("../IHuman").EquipType, (boolean | undefined)?, (boolean | undefined)?]>;
    37: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    35: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.AttackType, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../IEntity").AttackType | undefined)?]>;
    21: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (boolean | undefined)?]>;
    14: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    86: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Container, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.ItemType, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Quality, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.String, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../../item/IItem").IContainer | undefined)?, (import("../../item/IItem").ItemType | undefined)?, (import("../../IObject").Quality | undefined)?, (string | undefined)?]>;
    51: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    69: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (boolean | undefined)?]>;
    11: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    45: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    76: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    60: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    26: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    91: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Integer32, [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Integer32], [import("game/entity/action/IAction").ActionArgument.Object, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [number, number | boolean, any?]>;
    56: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    19: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default, void, [import("../../item/Item").default]>;
    16: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    85: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.AttackType, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../IEntity").AttackType | undefined)?]>;
    100: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (boolean | undefined)?]>;
    57: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Direction], import("../player/Player").default, void, [import("../../../utilities/math/Direction").Direction.None | import("../../../utilities/math/Direction").Direction.East | import("../../../utilities/math/Direction").Direction.North | import("../../../utilities/math/Direction").Direction.West | import("../../../utilities/math/Direction").Direction.South]>;
    65: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Container, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.ItemType, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Quality, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.String, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../../item/IItem").IContainer | undefined)?, (import("../../item/IItem").ItemType | undefined)?, (import("../../IObject").Quality | undefined)?, (string | undefined)?]>;
    58: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Vector2, [import("game/entity/action/IAction").ActionArgument.Direction, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [import("../../../utilities/math/IVector").IVector2, (import("../../../utilities/math/Direction").Direction.None | import("../../../utilities/math/Direction").Direction.East | import("../../../utilities/math/Direction").Direction.North | import("../../../utilities/math/Direction").Direction.West | import("../../../utilities/math/Direction").Direction.South | undefined)?]>;
    84: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [(import("../../item/Item").default | undefined)?]>;
    54: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default, void, [import("../../item/Item").default]>;
    30: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    28: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.Container, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/IItem").IContainer | undefined)?, (boolean | undefined)?]>;
    48: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean, []>;
    13: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default, void, [import("../../item/Item").default]>;
    42: import("./Action").Action<[], import("../player/Player").default, void, []>;
    1: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?]>;
    53: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    81: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?]>;
    52: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    74: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    24: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    23: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    40: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    29: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    88: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Boolean], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, boolean]>;
    70: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    18: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.Undefined, import("game/entity/action/IAction").ActionArgument.Boolean]], import("../player/Player").default, void, [import("../../item/Item").default, (boolean | undefined)?]>;
    80: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    20: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    44: import("./Action").Action<[], import("../player/Player").default, void, []>;
    68: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Doodad, import("game/entity/action/IAction").ActionArgument.Creature], import("game/entity/action/IAction").ActionArgument.String], import("../player/Player").default | import("../npc/NPC").default, void, [import("../creature/Creature").default | import("../../doodad/Doodad").default | import("../../item/Item").default, string]>;
    98: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Island, import("game/entity/action/IAction").ActionArgument.String], import("../player/Player").default, void, [import("../../island/Island").default, string]>;
    17: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Doodad, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../doodad/Doodad").default | import("../../item/Item").default | undefined)?]>;
    87: import("./Action").Action<[], import("../player/Player").default, void, []>;
    9: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Doodad, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.RestType, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [(import("../../item/Item").default | undefined)?, (import("../../doodad/Doodad").default | undefined)?, (import("../IHuman").RestType | undefined)?, (boolean | undefined)?]>;
    46: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    47: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    33: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [(import("../../item/Item").default | undefined)?, (boolean | undefined)?]>;
    96: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Integer32, import("game/entity/action/IAction").ActionArgument.Integer32], import("../player/Player").default, void, [number, number]>;
    6: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    94: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.AttackType, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../IEntity").AttackType | undefined)?]>;
    10: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Doodad, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.RestType, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [(import("../../item/Item").default | undefined)?, (import("../../doodad/Doodad").default | undefined)?, (import("../IHuman").RestType | undefined)?, (boolean | undefined)?]>;
    72: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    41: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    4: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory, [import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    22: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    43: import("./Action").Action<[], import("../player/Player").default, void, []>;
    36: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    32: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    82: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [(import("../../item/Item").default | undefined)?]>;
    2: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.AttackType, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?, (import("../IEntity").AttackType | undefined)?]>;
    67: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default]>;
    103: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.Container, import("game/entity/action/IAction").ActionArgument.Undefined], [import("game/entity/action/IAction").ActionArgument.Boolean, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/IItem").IContainer | undefined)?, (boolean | undefined)?]>;
    102: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean, []>;
    101: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    73: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.NPCNearby], import("../player/Player").default | import("../npc/NPC").default, void, [import("../npc/NPC").default]>;
    34: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemInventory, [import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    64: import("./Action").Action<[[import("game/entity/action/IAction").ActionArgument.ItemInventory, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [(import("../../item/Item").default | undefined)?]>;
    77: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void, []>;
    89: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Boolean], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, boolean]>;
    59: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Direction, [import("game/entity/action/IAction").ActionArgument.Integer32, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../../utilities/math/Direction").Direction.None | import("../../../utilities/math/Direction").Direction.East | import("../../../utilities/math/Direction").Direction.North | import("../../../utilities/math/Direction").Direction.West | import("../../../utilities/math/Direction").Direction.South, (number | undefined)?]>;
    90: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Container, [import("game/entity/action/IAction").ActionArgument.UnsignedInteger32NumberArray, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [import("../../item/IItem").IContainer, (number[] | undefined)?]>;
    97: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.Item, [import("game/entity/action/IAction").ActionArgument.Integer32, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default, void, [import("../../item/Item").default, (number | undefined)?]>;
    104: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.String, import("game/entity/action/IAction").ActionArgument.Object], import("../player/Player").default, void, [string, any?]>;
    92: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, [import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, (import("../../item/Item").default | undefined)?]>;
    62: import("./Action").Action<[import("game/entity/action/IAction").ActionArgument.ItemNearby, import("game/entity/action/IAction").ActionArgument.ActionType], import("../player/Player").default | import("../npc/NPC").default, void, [import("../../item/Item").default, ActionType]>;
};
export default actionDescriptions;
