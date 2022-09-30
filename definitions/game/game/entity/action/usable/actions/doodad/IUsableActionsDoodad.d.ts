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
import type Player from "game/entity/player/Player";
declare namespace IUsableActionsDoodad {
    function getFacing(player: Player, filter?: (doodad: Doodad) => any): Doodad | undefined;
    function getUnder(player: Player, filter?: (doodad: Doodad) => any): Doodad | undefined;
    function getUnderOrFacing(player: Player, filter?: (doodad: Doodad) => any): Doodad | undefined;
    function validate(player: Player, doodad: Doodad | undefined): doodad is Doodad;
    const requireFacing: (filter?: ((doodad: Doodad) => any) | undefined) => {
        find: (player: Player) => Doodad | undefined;
    };
    const requireUnderOrFacing: (filter?: ((doodad: Doodad) => any) | undefined) => {
        find: (player: Player) => Doodad | undefined;
    };
}
export default IUsableActionsDoodad;
