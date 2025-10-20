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
import type { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class SkillBonusMagicalItemsInfoProvider extends InfoProvider {
    private readonly skill;
    private readonly human?;
    constructor(skill: SkillType, human?: Human | undefined);
    getClass(): string[];
    protected onInitContent(): void;
    hasContent(): boolean;
    get(): Array<0 | TranslationImpl | SimpleInfoProvider>;
    private getMagicalItems;
    /**
     * Retrieves the magical doodads that provide bonuses for a specific skill.
     * @param skill The skill type to filter the doodads by.
     * @returns An array of doodads that provide bonuses for the specified skill, or undefined if no doodads are found.
     */
    private getMagicalDoodads;
    /**
     * Calculates the total skill bonuses provided by a doodad from items contained within.
     * @param doodad The doodad to calculate skill bonuses for.
     * @returns The total skill bonus value.
     */
    private getTotalSkillBonuses;
}
