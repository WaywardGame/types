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
import type Human from "@wayward/game/game/entity/Human";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IResistancesAndVulnerabilitiesInfoProviderClassEvents {
    shouldDisplayUndiscoveredResistsAndVulns(skill: number, human: Human): boolean | undefined;
}
export default class ResistancesAndVulnerabilitiesInfoProvider extends InfoProvider {
    private readonly creature;
    static event: EventEmitter<null, IResistancesAndVulnerabilitiesInfoProviderClassEvents>;
    static get(creatureType: CreatureType, human?: Human): SimpleInfoProvider[];
    private static translateVulnOrResist;
    constructor(creature: Creature);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
}
