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
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import { StatInfo } from "game/inspection/infoProviders/stat/StatInfo";
export default class AttackInfo extends StatInfo {
    getClass(): string[];
    get(): (LabelledValue | import("game/inspection/InfoProvider").SimpleInfoProvider)[];
    private getTactics;
    private getMainHand;
    private getOffHand;
    private getSkillBonus;
    private getAttackMultiplier;
    private getAttack;
}
