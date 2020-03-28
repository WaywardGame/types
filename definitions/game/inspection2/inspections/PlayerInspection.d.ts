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
import Player from "entity/player/Player";
import { InspectType } from "game/inspection2/IInspection";
import { Context } from "game/inspection2/InfoProvider";
import Inspection from "game/inspection2/Inspection";
import HumanInspection from "game/inspection2/inspections/HumanInspection";
import { IVector3 } from "utilities/math/IVector";
export default class PlayerInspection extends HumanInspection<Player> {
    static getFromTile(position: IVector3, context: Context): ArrayOr<Inspection<Player>>;
    constructor(player: Player, inspectType?: InspectType);
    get(context: Context): never[];
}
