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
import type { AutomationStep } from "@wayward/game/game/island/automation/AutomationStep";
import type { IAutomationInitialState } from "@wayward/game/game/island/automation/IAutomation";
export declare class Automation {
    private running;
    private repeat;
    private repeatDelay;
    private initialState;
    private readonly steps;
    private readonly resetSteps;
    setRepeat(repeat: boolean, delay?: number): this;
    setInitialState(initialState: IAutomationInitialState): this;
    addStep(step: AutomationStep): this;
    start(human: Human): Promise<void>;
    stop(): void;
    private execute;
    private reset;
}
