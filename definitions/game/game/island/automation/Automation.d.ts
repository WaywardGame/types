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
import type Human from "@wayward/game/game/entity/Human";
import type { AutomationStep } from "@wayward/game/game/island/automation/AutomationStep";
import type { IAutomationSetup, IAutomationSetupResult } from "@wayward/game/game/island/automation/IAutomation";
export declare class Automation {
    private running;
    private repeat;
    private repeatDelay;
    private setup;
    private startDelay;
    private readonly steps;
    private readonly resetSteps;
    /**
     * Applys the setup to the player.
     * Called during automation & tests.
     * @param human Human to apply the setup too
     * @param setup The setup
     */
    static applySetup(human: Human, setup: Readonly<IAutomationSetup>): IAutomationSetupResult;
    private static createItem;
    setRepeat(repeat: boolean, delay?: number): this;
    setStartDelay(delay: number): this;
    setSetup(setup: IAutomationSetup): this;
    addStep(step: AutomationStep): this;
    start(human: Human): Promise<void>;
    stop(): void;
    private execute;
    private reset;
}
