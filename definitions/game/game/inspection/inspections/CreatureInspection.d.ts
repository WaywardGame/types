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
import Creature from "game/entity/creature/Creature";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import EntityInspection from "game/inspection/inspections/EntityInspection";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IVector3 } from "utilities/math/IVector";
export default class CreatureInspection extends EntityInspection<Creature> {
    static getFromTile(position: IVector3): CreatureInspection | never[];
    static handles(type: InspectType, creature: unknown): boolean;
    constructor(creature: Creature);
    getId(): string;
    getBorder(): "var(--color-tamed)" | "var(--color-aberrant)" | undefined;
    get(context: InfoProviderContext): ArrayOr<InfoProvider | TranslationGenerator>;
    private getDescription;
}
