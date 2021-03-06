/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Human from "game/entity/Human";
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
export default class DefenseInfo extends InfoProvider {
    private readonly human?;
    constructor(human?: Human | undefined);
    getClass(): string[];
    get(): LabelledValue[];
    private getInsulationSlots;
    private getInsulation;
    private getDefense;
    private getDefenseCalculation;
    private getDefenseSlots;
}
