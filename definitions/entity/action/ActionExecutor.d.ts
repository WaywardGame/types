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
import { SfxType } from "audio/IAudio";
import { ActionArgument, ActionArgumentTypeMap, ActionType, IActionApi, IActionDescription, IActionHandlerApi, IActionParticle, IActionSoundEffect } from "entity/action/IAction";
import Entity from "entity/Entity";
import { SkillType } from "entity/IHuman";
import { TurnType } from "entity/player/IPlayer";
import EventEmitter from "event/EventEmitter";
import { Milestone } from "game/milestones/IMilestone";
import Item from "item/Item";
import ActionPacket from "multiplayer/packets/shared/ActionPacket";
import { IRGB } from "utilities/Color";
interface ActionEvents {
    /**
     * Called before an action is executed
     * This is called before the action result is used
     * @returns False to cancel the action
     */
    preExecuteAction(actionType: ActionType, actionApi: IActionHandlerApi<any>, args: any[]): false | void;
    /**
     * Called after an action has been executed
     * This is called after the action result is used
     */
    postExecuteAction(actionType: ActionType, actionApi: IActionHandlerApi<any>, args: any[]): any;
}
export default class ActionExecutor<A extends Array<ActionArgument | ActionArgument[]>, E extends Entity, R, AV extends any[]> extends EventEmitter.Host<ActionEvents> implements IActionApi<E> {
    /**
     * Gets an action by its description. If you're using the Action class for constructing the descriptions, just pass the action instance.
     *
     * Note: Prefer `IActionApi.get` if you're calling this from within another action.
     */
    static get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A, infer E, infer R, infer AV> ? ActionExecutor<A, E, R, AV> : never;
    static executeMultiplayer(packet: ActionPacket, actionExecutor?: ActionExecutor<Array<ActionArgument | ActionArgument[]>, Entity, any, any[]>): any;
    get executor(): E;
    get actionStack(): ActionType[];
    get lastAction(): ActionType;
    readonly type: ActionType;
    private _executor;
    private _actionStack;
    private executionStage;
    private shouldSkipConfirmation;
    private readonly privateStore;
    private updateTablesAndWeight;
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
    constructor(action?: IActionDescription<A, E>, type?: number | undefined);
    skipConfirmation(): this;
    execute(actionApi: IActionApi<E>, ...args: AV): R;
    execute(executor: E, ...args: AV): R;
    isArgumentType<AA extends ActionArgument>(argument: any, index: number, argumentType: AA): argument is ActionArgumentTypeMap<AA>;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnType): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setStaminaReduction(reduction?: SkillType, actionTier?: number): this;
    setReputationChange(amount: number): this;
    addSkillGains(...skills: Array<[SkillType, number?, number?]>): this;
    addSkillGains(skill: SkillType, amount?: number, actionTier?: number): this;
    setMilestone(milestone: Milestone, data?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    cancelPaddling(item: Item): this;
    setParticle(color: IRGB, inFront?: boolean): this;
    setParticle(color: IRGB, count?: number, inFront?: boolean): this;
    setParticle(particle: IActionParticle): this;
    addItems(...addItems: Array<Item | undefined>): this;
    getItems(): import("@wayward/goodstream/Stream").default<Item>;
    removeItems(...items: Array<Item | undefined>): this;
    setItemsUsed(used?: boolean): this;
    confirmItemsBroken(): Promise<boolean>;
    private executeConfirmer;
    private executeInternalOrMultiplayer;
    private executeInternal;
    private createActionPacket;
    private handleApiOnActionFailure;
    private handleApi;
    private canExecute;
    private isUsableWhen;
}
export declare function getArgumentType(executor: Entity, expected: ActionArgument | ActionArgument[], actual: unknown): ActionArgument | undefined;
export {};
