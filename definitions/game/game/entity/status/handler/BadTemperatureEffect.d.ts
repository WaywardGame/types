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
import { Stat } from "@wayward/game/game/entity/IStats";
import { BadTemperatureLevel } from "@wayward/game/game/entity/status/handler/IBadTemperature";
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import Status from "@wayward/game/game/entity/status/Status";
import type Island from "@wayward/game/game/island/Island";
import { Temperature, TempType } from "@wayward/game/game/temperature/ITemperature";
export declare const CHANCE_TEMP_CONSEQUENCE_EFFECT = 0.3;
export declare const CHANCE_TEMP_CONSEQUENCE_STAT = 0.5;
export declare const CHANCE_TEMP_WAKEUP = 0.15;
export default abstract class BadTemperatureEffect extends Status {
    protected effectiveTemperature: Temperature;
    register(): void;
    abstract getLevel(): BadTemperatureLevel;
    abstract getTempType(): TempType;
    refresh(): void;
    protected onTick(): void;
    protected abstract getConsequenceEffect(): StatusType;
    protected abstract getConsequenceStat(): Stat;
    protected onIslandTick(island: Island): void;
    private onPostMove;
    private isLevelTwoBadTemp;
}
