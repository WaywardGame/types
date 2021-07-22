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
import Human from "game/entity/Human";
import { SkillType } from "game/entity/IHuman";
import { InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class SkillBonusMagicalItemsInfoProvider extends InfoProvider {
    private readonly skill;
    private readonly human?;
    constructor(skill: SkillType, human?: Human | undefined);
    getClass(): string[];
    hasContent(): boolean;
    get(): (0 | Translation | import("game/inspection/InfoProvider").SimpleInfoProvider)[];
    private getMagicalItems;
}
