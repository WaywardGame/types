/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import NPC from "@wayward/game/game/entity/npc/NPC";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import HumanInspection from "@wayward/game/game/inspection/inspections/HumanInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class NPCInspection extends HumanInspection<NPC> {
    static getFromTile(tile: Tile): never[] | NPCInspection;
    static handles(type: InspectType, npc: unknown): boolean;
    constructor(npc: NPC);
    getBorder(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private renderNPCDetails;
    private renderMerchantDetails;
    private renderShipperDetails;
}
