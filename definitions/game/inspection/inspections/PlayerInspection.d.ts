/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Player from "entity/player/Player";
import { InspectType } from "game/inspection/IInspection";
import { Context } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import HumanInspection from "game/inspection/inspections/HumanInspection";
import { IVector3 } from "utilities/math/IVector";
export default class PlayerInspection extends HumanInspection<Player> {
    static getFromTile(position: IVector3, context: Context, inspectType: InspectType): ArrayOr<Inspection<Player>>;
    constructor(player: Player, inspectType?: InspectType);
    getBorder(): string;
    isImportant(): boolean;
}
