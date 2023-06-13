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
import type { ActionArguments, AnyActionDescription } from "game/entity/action/IAction";
import { AutomationStep } from "game/island/automation/AutomationStep";
import type { IAutomationContextState } from "game/island/automation/IAutomation";
export type GetActionArguments<T extends AnyActionDescription, AV = ActionArguments<T>> = AV | ((context: IAutomationContextState) => Promise<AV>);
export declare class ExecuteActionStep<T extends AnyActionDescription> extends AutomationStep {
    private readonly action;
    private readonly args;
    constructor(action: T, args: GetActionArguments<T>);
    execute(context: IAutomationContextState): Promise<void>;
}
