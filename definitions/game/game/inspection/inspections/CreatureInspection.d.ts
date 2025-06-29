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
import Creature from "@wayward/game/game/entity/creature/Creature";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import EntityInspection from "@wayward/game/game/inspection/inspections/EntityInspection";
import type Tile from "@wayward/game/game/tile/Tile";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class CreatureInspection extends EntityInspection<Creature> {
    static getFromTile(tile: Tile, context?: InfoProviderContext): never[] | CreatureInspection;
    static handles(type: InspectType, creature: unknown): boolean;
    constructor(creature: Creature, context?: InfoProviderContext);
    private updateDangerLevel;
    getId(): string;
    getBorder(): string | undefined;
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getColorContext(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider | undefined>;
    private getCreatureCombatDetails;
    private getStatuses;
}
