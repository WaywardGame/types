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
import Stream from "@wayward/goodstream/Stream";
import type { RequirementInstance } from "game/entity/player/quest/quest/Quest";
import { Quest } from "game/entity/player/quest/quest/Quest";
import type { QuestInstance } from "game/entity/player/quest/QuestManager";
import type { IQuestRequirement } from "game/entity/player/quest/requirement/IRequirement";
import type Island from "game/island/Island";
export default class Challenge extends Quest {
    static getCreaturesOfRequirements(): Stream<any>;
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
    protected createRequirements(island: Island): Stream<IQuestRequirement<any[], {}>>;
    protected onUpdate(quest: QuestInstance): void;
    protected onRequirementComplete(quest: QuestInstance, completedRequirement: RequirementInstance): void;
    private createRandomRequirement;
    private getSpawnableCreatures;
}
