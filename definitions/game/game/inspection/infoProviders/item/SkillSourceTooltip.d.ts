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
import type { SkillType } from "@wayward/game/game/entity/IHuman";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
declare function SkillSourceTooltip(type: SkillType): TranslationImpl | undefined;
export default SkillSourceTooltip;
