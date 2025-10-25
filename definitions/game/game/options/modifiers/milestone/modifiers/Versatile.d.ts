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
import { DamageType, Defense } from "@wayward/game/game/entity/IEntity";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureType, IDamageOutcome, IDamageOutcomeInput } from "@wayward/game/game/entity/creature/ICreature";
import type Player from "@wayward/game/game/entity/player/Player";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
export default class Versatile extends MilestoneModifier {
    getOptions(): IGameOptionsPartial;
    getTranslationArgs(): TranslationArg[] | undefined;
    getGroup(): MilestoneModifierGroup;
    instantiate(id: Milestone, player?: Player): VersatileMilestoneModifierInstance | undefined;
}
interface IVersatileOutcome extends IDamageOutcome {
    versatileApplied?: true;
}
interface VersatileDefense extends Defense {
    versatileApplied?: true;
}
declare class VersatileMilestoneModifierInstance extends MilestoneModifierInstance<Record<string, Map<CreatureType, Set<DamageType>>>> {
    protected onCreateItem(manager: ItemManager, item: Item): void;
    protected getDefense(island: Island, defense: VersatileDefense | undefined, target: Human | Creature | CreatureType, damageType?: DamageType): Defense | undefined;
    protected calculateAttackOutcome(island: Island, outcome: IVersatileOutcome, input: IDamageOutcomeInput, attackValue: number, defenseValue: number): IDamageOutcome | undefined;
    protected hasDiscoveredVulnOrResist(player: Player, creature: CreatureType, damageType: DamageType): boolean | undefined;
    protected discoverVulnOrResist(player: Player, creature: CreatureType, damageType: DamageType): void;
    protected getDiscoveredVulnsAndResists(player: Player): Map<CreatureType, Set<DamageType>>;
    protected shouldDisplayUndiscoveredResistsAndVulns(host: any, skill: number, human: Human): boolean | undefined;
}
export {};
