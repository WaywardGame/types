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
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type { RequirementInstance } from "@wayward/game/game/entity/player/quest/quest/Quest";
import { Quest } from "@wayward/game/game/entity/player/quest/quest/Quest";
import type { QuestInstance } from "@wayward/game/game/entity/player/quest/QuestManager";
import type { IQuestRequirement } from "@wayward/game/game/entity/player/quest/requirement/IRequirement";
import type Island from "@wayward/game/game/island/Island";
export default class Challenge extends Quest {
    static getCreaturesOfRequirements(): CreatureType[];
    private static readonly possibleRequirements;
    /**
     * These are the only items that can be requested to collect
     */
    private static readonly itemCollectWhitelist;
    /**
     * These are the only skills that can be requested to learn
     */
    private static readonly skillLearnWhitelist;
    /**
     * These creatures will always be excluded from the possible creatures to be requested to kill, even if they're spawnable
     */
    private static readonly creatureKillBlacklist;
    /**
     * These creatures will always be excluded from the possible creatures to be requested to tame, even if they're spawnable
     *
     * Creatures that can't be tamed will already be excluded by default
     */
    private static readonly creatureTameBlacklist;
    private readonly existingRequirements;
    private readonly possibleRequirements;
    constructor();
    reset(): void;
    protected createRequirements(island: Island): Array<IQuestRequirement<any, any>>;
    protected onUpdate(quest: QuestInstance): void;
    protected onRequirementComplete(quest: QuestInstance, completedRequirement: RequirementInstance): void;
    /**
     *
     * @param island
     * @returns Technically a IQuestRequirement<any, any>, but specifying the exact types makes the typing much faster
     */
    private createRandomRequirement;
    private getSpawnableCreatures;
}
