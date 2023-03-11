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
import type { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import PlayerInspection from "game/inspection/inspections/PlayerInspection";
import type Tile from "game/tile/Tile";
export default class SelfInspection extends PlayerInspection {
    static getFromTile(tile: Tile, context: InfoProviderContext): ArrayOr<Inspection<Player>>;
    static handles(type: InspectType, player: unknown, context?: InfoProviderContext): boolean;
    constructor(player: Player);
    getBorder(): string;
    get(context: InfoProviderContext): InfoProvider[];
}
