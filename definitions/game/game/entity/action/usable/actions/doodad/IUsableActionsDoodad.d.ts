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
import Doodad from "@wayward/game/game/doodad/Doodad";
import type { IUsableActionPossibleUsing } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
declare namespace IUsableActionsDoodad {
    function getFacing(player: Player, provided?: IUsableActionPossibleUsing, filter?: (doodad: Doodad) => any): Doodad | undefined;
    function getUnder(player: Player, provided?: IUsableActionPossibleUsing, filter?: (doodad: Doodad) => any): Doodad | undefined;
    function getUnderOrFacing(player: Player, provided?: IUsableActionPossibleUsing, filter?: (doodad: Doodad) => any): Doodad | undefined;
    const requireFacing: (filter?: (doodad: Doodad, player: Player) => any) => {
        find: (player: Player) => Doodad | undefined;
    };
    const requireUnderOrFacing: (filter?: (doodad: Doodad, player: Player) => any) => {
        find: (player: Player) => Doodad | undefined;
    };
    const filterDoodadIsContainer: (doodad: Doodad, baseOpenContainerAction?: boolean) => boolean;
    const isContainer: (player: Player, value: Doodad | Item | IContainer | undefined, baseOpenContainerAction?: boolean) => value is IContainer;
}
export default IUsableActionsDoodad;
