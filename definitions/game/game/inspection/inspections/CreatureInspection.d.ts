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
import Creature from "game/entity/creature/Creature";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import EntityInspection from "game/inspection/inspections/EntityInspection";
import type Tile from "game/tile/Tile";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class CreatureInspection extends EntityInspection<Creature> {
    static getFromTile(tile: Tile): never[] | CreatureInspection;
    static handles(type: InspectType, creature: unknown): boolean;
    constructor(creature: Creature);
    getId(): string;
    getBorder(): "var(--color-tamed)" | "var(--color-aberrant)" | undefined;
    get(context: InfoProviderContext): ArrayOr<InfoProvider | TranslationGenerator>;
    private getCreatureCombatDetails;
}
