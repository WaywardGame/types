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
import type Entity from "@wayward/game/game/entity/Entity";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import Vector2 from "@wayward/game/utilities/math/Vector2";
declare namespace MoveUtilities {
    function getMovePos(executor: Entity, direction: Direction): Vector2;
}
export default MoveUtilities;
