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
import type Doodad from "game/doodad/Doodad";
declare namespace IUiActionsDoodad {
    function getFacing(filter?: (doodad: Doodad) => any): Doodad | undefined;
    function getUnder(filter?: (doodad: Doodad) => any): Doodad | undefined;
    function validate(doodad: Doodad | undefined): doodad is Doodad;
    const requireFacing: (filter?: ((doodad: Doodad) => any) | undefined) => {
        find: () => Doodad | undefined;
    };
    const requireFacingOrUnder: (filter?: ((doodad: Doodad) => any) | undefined) => {
        find: () => Doodad | undefined;
    };
}
export default IUiActionsDoodad;
