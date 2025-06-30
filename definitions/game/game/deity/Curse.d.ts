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
import { SkillType } from "@wayward/game/game/entity/IHuman";
export declare enum CurseComponent {
    Skill = 0,
    HighestAttack = 1,
    HighestDefense = 2,
    CumulativeEvilCrafting = 3,
    Equipment = 4,
    Modifier = 5
}
export declare const CURSE_WEIGHTS: PartialRecord<CurseComponent, number>;
export declare const CURSE_ATTACK_MAX = 50;
export declare const CURSE_DEFENSE_MAX = 100;
export declare const CURSE_CRAFTING_MAX = 100;
export declare const CURSE_SKILL_MAX = 100;
export declare const CURSE_COMPONENTS: Record<CurseComponent, (human: Human) => number>;
/**
 * Gets the highest value of either current or max skill multiplied by the "evilness" of each skill (from rune chance)
 * (Basically, high values in any of the evil-er skills make curse go brrrr)
 */
declare function getSkillValue(human: Human): {
    value: number;
    skill: SkillType;
};
declare namespace Curse {
    const getSkill: typeof getSkillValue;
    function getComponentValue(human: Human, component: CurseComponent): number;
    function getValue(human: Human): number;
}
export default Curse;
