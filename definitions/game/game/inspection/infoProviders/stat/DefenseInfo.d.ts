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
import type Human from "game/entity/Human";
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
