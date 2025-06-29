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
import Player from "@wayward/game/game/entity/player/Player";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import HumanInspection from "@wayward/game/game/inspection/inspections/HumanInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import Translation from "@wayward/game/language/Translation";
export default class PlayerInspection extends HumanInspection<Player> {
    static getFromTile(tile: Tile, context: InfoProviderContext | undefined, inspectType: InspectType): ArrayOr<Inspection<Player>>;
    static handles(type: InspectType, player: unknown, context?: InfoProviderContext): boolean;
    constructor(player: Player, context?: InfoProviderContext, inspectType?: InspectType);
    getBorder(): string;
    isImportant(): boolean;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
}
