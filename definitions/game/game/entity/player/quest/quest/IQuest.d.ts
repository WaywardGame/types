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
import type { IQuestRequirement } from "@wayward/game/game/entity/player/quest/requirement/IRequirement";
export declare enum QuestType {
    Challenge = 0
}
export interface IQuest {
    type: QuestType;
    requirements: IQuestRequirement[];
    complete: boolean;
    skipped: boolean;
    reset?(): void;
}
