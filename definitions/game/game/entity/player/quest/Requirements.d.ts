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
import { QuestRequirementType } from "@wayward/game/game/entity/player/quest/requirement/IRequirement";
import { QuestRequirement } from "@wayward/game/game/entity/player/quest/requirement/Requirement";
declare const requirements: {
    0: QuestRequirement<[], {}>;
    2: QuestRequirement<[import("../../creature/ICreature").CreatureType, number], import("@wayward/game/game/entity/player/quest/requirement/KillCreatureRequirement").IKillCreatureRequirement>;
    3: QuestRequirement<[number], import("@wayward/game/game/entity/player/quest/requirement/KillCreaturesRequirement").IKillCreaturesRequirement>;
    1: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[], number], {}>;
    4: QuestRequirement<[import("../../skill/ISkills").SkillType, number], {}>;
    5: QuestRequirement<[number], {}>;
    6: QuestRequirement<[number], {}>;
    7: QuestRequirement<[import("../../IHuman").EquipType[], import("../../../item/IItem").ItemTypeGroup[]], {}>;
    8: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[], number], {
        crafted: number;
    }>;
    9: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[], number], {
        dismantled: number;
    }>;
    10: QuestRequirement<[(import("../../../item/IItem").ItemType | import("../../../item/IItem").ItemTypeGroup)[]], {}>;
    11: QuestRequirement<[import("../../creature/ICreature").CreatureType, number], import("@wayward/game/game/entity/player/quest/requirement/TameCreatureRequirement").ITameCreatureRequirement>;
    12: QuestRequirement<[number], import("@wayward/game/game/entity/player/quest/requirement/TameCreaturesRequirement").ITameCreaturesRequirement>;
    13: QuestRequirement<[number], {
        discovered: number;
    }>;
};
export default requirements;
export type RequirementArgs<R extends QuestRequirementType> = (typeof requirements)[R] extends QuestRequirement<infer O, any> ? O : (typeof requirements)[R] extends QuestRequirement<infer O2> ? O2 : never;
