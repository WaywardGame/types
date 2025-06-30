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
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import { StatInfo } from "@wayward/game/game/inspection/infoProviders/stat/StatInfo";
export default class AttackInfo extends StatInfo {
    getClass(): string[];
    get(): Array<LabelledValue | SimpleInfoProvider>;
    private getTactics;
    private getMainHand;
    private getOffHand;
    private getSkillBonus;
    private getAttackMultiplier;
    private getAttack;
}
