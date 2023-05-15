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
import type Human from "game/entity/Human";
import { DamageType, Defense } from "game/entity/IEntity";
import type Creature from "game/entity/creature/Creature";
import type { CreatureType, IDamageOutcome, IDamageOutcomeInput } from "game/entity/creature/ICreature";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import type Item from "game/item/Item";
import type ItemManager from "game/item/ItemManager";
import type { Milestone } from "game/milestones/IMilestone";
import type { IGameOptionsPartial } from "game/options/IGameOptions";
import MilestoneModifier, { MilestoneModifierGroup, MilestoneModifierInstance } from "game/options/modifiers/milestone/MilestoneModifier";
export default class Versatile extends MilestoneModifier {
    getOptions(): IGameOptionsPartial;
    getGroup(): MilestoneModifierGroup;
    instantiate(id: Milestone, player?: Player): VersatileMilestoneModifierInstance | undefined;
}
declare class VersatileMilestoneModifierInstance extends MilestoneModifierInstance<Record<string, Map<CreatureType, Set<DamageType>>>> {
    protected onCreateItem(manager: ItemManager, item: Item): void;
    protected getDefense(island: Island, defense: Defense | undefined, target: Human | Creature | CreatureType, damageType?: DamageType): Defense | undefined;
    protected calculateAttackOutcome(island: Island, outcome: IDamageOutcome, input: IDamageOutcomeInput, attackValue: number, defenseValue: number): IDamageOutcome | undefined;
    protected hasDiscoveredVulnOrResist(player: Player, creature: CreatureType, damageType: DamageType): boolean | undefined;
    protected discoverVulnOrResist(player: Player, creature: CreatureType, damageType: DamageType): void;
    protected getDiscoveredVulnsAndResists(player: Player): Map<CreatureType, Set<DamageType>>;
    protected shouldDisplayUndiscoveredResistsAndVulns(host: any, skill: number, human: Human): boolean | undefined;
}
export {};
