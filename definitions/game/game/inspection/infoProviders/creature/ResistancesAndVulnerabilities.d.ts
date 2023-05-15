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
import EventEmitter from "event/EventEmitter";
import type Creature from "game/entity/creature/Creature";
import type { CreatureType } from "game/entity/creature/ICreature";
import type Human from "game/entity/Human";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type { TranslationGenerator } from "ui/component/IComponent";
export interface IResistancesAndVulnerabilitiesInfoProviderClassEvents {
    shouldDisplayUndiscoveredResistsAndVulns(skill: number, human: Human): boolean | undefined;
}
export default class ResistancesAndVulnerabilitiesInfoProvider extends InfoProvider {
    private readonly creature;
    static event: EventEmitter<null, IResistancesAndVulnerabilitiesInfoProviderClassEvents>;
    static get(creatureType: CreatureType, human?: Human): import("game/inspection/InfoProvider").SimpleInfoProvider[];
    private static translateVulnOrResist;
    constructor(creature: Creature);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
}
