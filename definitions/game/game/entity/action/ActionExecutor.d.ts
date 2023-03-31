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
import type { SfxType } from "audio/IAudio";
import EventEmitter from "event/EventEmitter";
import type { ActionExecutorEvents, AnyActionDescription, IActionApi, IActionArgumentTypeMap, IActionConfirmerApi, IActionDescription, IActionNotUsable, IActionParticle, IActionSoundEffect, IActionUsable, IProtectedItems } from "game/entity/action/IAction";
import { ActionArgument, ActionType } from "game/entity/action/IAction";
import type Entity from "game/entity/Entity";
import type { SkillType } from "game/entity/IHuman";
import type { TurnTypeFlag } from "game/entity/player/IPlayer";
import type Item from "game/item/Item";
import type { IPromptDescriptionBase, PromptDescriptionArgs } from "game/meta/prompt/IPrompt";
import type { Milestone } from "game/milestones/IMilestone";
import type Tile from "game/tile/Tile";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import type { IRGB } from "utilities/Color";
import type { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
export default class ActionExecutor<A extends Array<ActionArgument | ActionArgument[]>, E extends Entity, R, CU extends IActionUsable, AV extends any[]> extends EventEmitter.Host<ActionExecutorEvents> implements IActionApi<E, CU>, IActionConfirmerApi<E, CU> {
    /**
     * Gets an action by its description. If you're using the Action class for constructing the descriptions, just pass the action instance.
     *
     * Note: Prefer `IActionApi.get` if you're calling this from within another action.
     */
    static get<D extends AnyActionDescription>(action: D): D extends IActionDescription<infer A, infer E, infer R, infer CU, infer AV> ? ActionExecutor<A, E, R, CU, AV> : never;
    static executeMultiplayer(packet: ActionPacket, executor?: Entity<unknown, number, unknown, unknown> | undefined, nonMpActionExecutor?: ActionExecutor<Array<ActionArgument | ActionArgument[]>, Entity, any, any, any[]>): any;
    get executor(): E;
    get actionStack(): ActionType[];
    get lastAction(): ActionType;
    /**
     * Check if the action has setup CanUse logic
     */
    get hasSetCanUse(): boolean;
    readonly type: ActionType;
    private _executor;
    private _checkingCanUse;
    private _actionStack;
    private _actionArgs;
    private executionStage;
    private shouldSkipConfirmation;
    private readonly privateStore;
    private updateTablesAndWeight;
    private updateWeight;
    private staminaReduction?;
    private reputationChange;
    private milestone?;
    private skillGains?;
    private sfx?;
    private particle?;
    private updateView?;
    private updateRender?;
    private readonly items;
    private itemsUsed;
    private readonly action;
    constructor(action?: IActionDescription<A, E, R, CU>, type?: number | undefined);
    skipConfirmation(): this;
    /**
     * Check if a creature on a tile and blocking the execution of the action
     * @returns
     * When checking before the action is being executed:
     * true if a creature is on a tile and that creature is not hidden, false otherwise
     *
     * When checking when the action is being execute
     * true if a creature is on a tile, false otherwise
     */
    isCreatureBlocking(tile: Tile): boolean;
    /**
     * Check if an action can be used.
     * When used within an action, the result will automatically be processed.
     * So it will send a message to the executor / check for mobs depending on the result.
     */
    canUse(): CU | IActionNotUsable;
    canUse(actionApi: IActionApi<E, CU>, ...args: AV): CU | IActionNotUsable;
    canUse(executor: E, ...args: AV): CU | IActionNotUsable;
    /**
     * Alternate version of canUse that allows you to specify the facing point.
     * Use with caution as this probably won't work for some actions
     */
    canUseWhileFacing(executor: E, position: IVector3, direction: Direction.Cardinal, ...args: AV): CU | IActionNotUsable;
    private processNotUsableResult;
    execute(actionApiOrExecutor: IActionApi<E, CU> | E, ...args: AV): R | Promise<R>;
    executeConfirmer(actionApiOrExecutor: IActionApi<E, CU> | E, args: AV, argumentTypes?: ActionArgument[]): Promise<boolean>;
    /**
     * Prompts the user about something
     */
    prompt<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: PROMPT, ...args: PromptDescriptionArgs<PROMPT>): Promise<boolean>;
    isArgumentType<AA extends ActionArgument>(argument: any, index: number, argumentType: AA): argument is IActionArgumentTypeMap[AA];
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnTypeFlag): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setUpdateWeight(): this;
    setStaminaReduction(reduction?: SkillType, actionTier?: number): this;
    setReputationChange(amount: number): this;
    addSkillGains(...skills: Array<[SkillType, number?, number?, true?]>): this;
    addSkillGains(skill: SkillType, amount?: number, actionTier?: number, bypass?: true): this;
    setMilestone(milestone: Milestone, data?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    setParticle(color: IRGB, inFront?: boolean): this;
    setParticle(color: IRGB, count?: number, inFront?: boolean): this;
    setParticle(particle: IActionParticle): this;
    addItems(...addItems: Array<Item | undefined>): this;
    canProtectedItemBeUsed(items: IProtectedItems): true | IActionNotUsable;
    getItems(): readonly Item[];
    removeItems(...items: Array<Item | undefined>): this;
    setItemsUsed(used?: boolean): this;
    confirmItemsBroken(executor: E): Promise<boolean>;
    private checkConfirmer;
    private executeInternalOrMultiplayer;
    private executeInternal;
    private createActionPacket;
    private handleApiOnActionFailure;
    private handleApi;
    private canExecute;
    private isUsableWhen;
    private static validate;
}
