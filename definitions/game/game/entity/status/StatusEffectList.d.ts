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
import type { SkillType } from "../skill/ISkills";
import type { StatusEffect, StatusEffectTypeArguments } from "@wayward/game/game/entity/status/IStatus";
import { StatusEffectType } from "@wayward/game/game/entity/status/IStatus";
import type IStatusContext from "@wayward/game/game/entity/status/IStatusContext";
export interface ISkillThresholds {
    skill: SkillType;
    thresholds: number[];
}
export declare class StatusEffectList {
    private readonly context;
    private readonly array;
    private skill?;
    private skillThresholds?;
    private sortingDisabled;
    constructor(context: IStatusContext);
    private add;
    setSkillThresholds<THRESHOLDS extends number[]>(skill: SkillType, ...thresholds: THRESHOLDS): THRESHOLDS;
    veryBad<TYPE extends StatusEffectType>(type: TYPE | false | undefined, ...args: StatusEffectTypeArguments[TYPE]): this;
    bad<TYPE extends StatusEffectType>(type: TYPE | false | undefined, ...args: StatusEffectTypeArguments[TYPE]): this;
    neutral<TYPE extends StatusEffectType>(type: TYPE | false | undefined, ...args: StatusEffectTypeArguments[TYPE]): this;
    good<TYPE extends StatusEffectType>(type: TYPE | false | undefined, ...args: StatusEffectTypeArguments[TYPE]): this;
    veryGood<TYPE extends StatusEffectType>(type: TYPE | false | undefined, ...args: StatusEffectTypeArguments[TYPE]): this;
    passChance(revealedAt?: number): this;
    disableSorting(): this;
    get(): StatusEffect[];
    getSkillThresholds(): ISkillThresholds | undefined;
}
