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
import type { SkillType } from "game/entity/IHuman";
import { InfoProvider } from "game/inspection/InfoProvider";
export default class SkillBonusMagicalItemsInfoProvider extends InfoProvider {
    private readonly skill;
    private readonly human?;
    constructor(skill: SkillType, human?: Human<number> | undefined);
    getClass(): string[];
    protected onInitContent(): void;
    hasContent(): boolean;
    get(): (0 | import("../../../../language/impl/TranslationImpl").default | import("game/inspection/InfoProvider").SimpleInfoProvider)[];
    private getMagicalItems;
}
