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
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import HumanInspection from "game/inspection/inspections/HumanInspection";
import type Tile from "game/tile/Tile";
export default class PlayerInspection extends HumanInspection<Player> {
    static getFromTile(tile: Tile, context: InfoProviderContext, inspectType: InspectType): ArrayOr<Inspection<Player>>;
    static handles(type: InspectType, player: unknown, context?: InfoProviderContext): boolean;
    constructor(player: Player, context?: InfoProviderContext);
    constructor(player: Player, inspectType?: InspectType);
    getBorder(): string;
    isImportant(): boolean;
    get(context: InfoProviderContext): InfoProvider[];
}
