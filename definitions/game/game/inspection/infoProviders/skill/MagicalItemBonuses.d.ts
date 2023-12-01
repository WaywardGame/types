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
import type Human from "@wayward/game/game/entity/Human";
import type { SkillType } from "@wayward/game/game/entity/IHuman";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class SkillBonusMagicalItemsInfoProvider extends InfoProvider {
    private readonly skill;
    private readonly human?;
    constructor(skill: SkillType, human?: Human<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player> | undefined);
    getClass(): string[];
    protected onInitContent(): void;
    hasContent(): boolean;
    get(): Array<0 | TranslationImpl | SimpleInfoProvider>;
    private getMagicalItems;
}
