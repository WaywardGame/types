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
import Player from "game/entity/player/Player";
import { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import HumanInspection from "game/inspection/inspections/HumanInspection";
import type { IVector3 } from "utilities/math/IVector";
export default class PlayerInspection extends HumanInspection<Player> {
    static getFromTile(position: IVector3, context: InfoProviderContext, inspectType: InspectType): ArrayOr<Inspection<Player>>;
    static handles(type: InspectType, player: unknown, context?: InfoProviderContext): boolean;
    constructor(player: Player, context?: InfoProviderContext);
    constructor(player: Player, inspectType?: InspectType);
    getBorder(): string;
    isImportant(): boolean;
}
