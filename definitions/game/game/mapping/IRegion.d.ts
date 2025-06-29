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
import type Island from "@wayward/game/game/island/Island";
import Translation from "@wayward/game/language/Translation";
import { Direction } from "@wayward/game/utilities/math/Direction";
interface IRegion extends Record<Uppercase<Direction.CardinalNames>, boolean> {
    CENTER: boolean;
    DIRECTION: Direction;
    REGION: Translation;
}
declare namespace IRegion {
    function get(island: Island, x: number, y: number): IRegion;
}
export default IRegion;
