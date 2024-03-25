import type Human from "@wayward/game/game/entity/Human";
import { SkillType } from "@wayward/game/game/entity/IHuman";
export declare enum CurseComponent {
    Skill = 0,
    HighestAttack = 1,
    HighestDefense = 2,
    CumulativeEvilCrafting = 3,
    Equipment = 4
}
export declare const CURSE_WEIGHTS: Record<CurseComponent, number>;
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
    function getValue(human: Human): number;
}
export default Curse;
