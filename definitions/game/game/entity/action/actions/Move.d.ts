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
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type Entity from "@wayward/game/game/entity/Entity";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import Vector2 from "@wayward/game/utilities/math/Vector2";
declare const _default: Action<[ActionArgument.Direction], import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, {
    usable: true;
}, [Direction.None | Direction.East | Direction.North | Direction.West | Direction.South]>;
export default _default;
export declare function getMovePos(executor: Entity, direction: Direction): Vector2;
