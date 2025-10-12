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
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type { ActionArguments, ActionArgumentTupleTypes, ActionFlag, ActionType, ActionUsability, IActionApi, IActionConfirmerApi, IActionDescription, IActionExample, IActionExampleApi, IActionHandlerApi, IActionNotUsable, IActionNotUsableHandlerApi, IActionTargetAdjacent, IActionTargetEntityRanged, IActionTargetTileRanged, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import type Entity from "@wayward/game/game/entity/Entity";
import type { EntityType, EntityTypeMap } from "@wayward/game/game/entity/IEntity";
import type Tile from "@wayward/game/game/tile/Tile";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
export declare class Action<A extends ActionArguments, T extends ActionType = ActionType, E extends Entity = Entity, R = void, CU extends IActionUsable = IActionUsable, AV extends any[] = ActionArgumentTupleTypes<A>> implements IActionDescription<A, E, R, CU, AV> {
    readonly argumentTypes: A;
    readonly usability: PartialRecord<ActionUsability, boolean>;
    readonly flags: PartialRecord<ActionFlag, boolean>;
    validExecutors: Set<EntityType>;
    preExecutionHandler?: (actionApi: IActionApi<E, CU>, ...args: AV) => any;
    canUseHandler: (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => CU | IActionNotUsable;
    handler: (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => R;
    notUsableHandler: (actionApi: IActionNotUsableHandlerApi<E, CU>, ...args: AV) => R;
    confirmer?: (actionApi: IActionConfirmerApi<E, any>, ...args: AV) => Promise<boolean>;
    exampleHandler?: (actionApi: IActionExampleApi<E, CU>, ...args: AV) => IActionExample;
    deities?: DeityReal[];
    private shouldSkipConfirmation;
    private targetTile?;
    private _type;
    get type(): T;
    constructor(...argumentTypes: A);
    setActionType<T extends ActionType>(type: T): Action<A, T, E, R, CU, AV>;
    /**
     * Check if the action has setup CanUse logic
     */
    get hasSetCanUse(): boolean;
    getExample(executor: E, ...args: AV): IActionExample | undefined;
    canUse(actionApi: IActionApi<E, any>, ...args: AV): CU | IActionNotUsable;
    canUse(executor: E, ...args: AV): CU | IActionNotUsable;
    canUseAt(actionExecutor: E, location?: Partial<IActionTargetAdjacent>, ...args: AV): CU | IActionNotUsable;
    canUseWhileFacing(actionExecutor: E, position: IVector3, direction?: Direction.Cardinal, ...args: AV): CU | IActionNotUsable;
    execute(actionApiOrExecutor: IActionApi<E, any> | E, ...args: AV): R | Promise<R> | Promise<R | undefined> | undefined;
    executeAt(actionApiOrExecutor: IActionApi<E, any> | E, location: IActionTargetAdjacent, ...args: AV): Promise<R | undefined>;
    executeRanged(actionApiOrExecutor: IActionApi<E, any> | E, target: IActionTargetTileRanged, ...args: AV): Promise<R | undefined>;
    executeOn(actionApiOrExecutor: IActionApi<E, any> | E, targetEntity?: Entity | Tile | IActionTargetEntityRanged, ...args: AV): Promise<R | undefined>;
    executeConfirmer(actionApiOrExecutor: IActionApi<E, any> | E, args: AV): Promise<boolean>;
    skipConfirmation(): this;
    /**
     * Add a "pre-execution" handler to this action.
     *
     * When an entity attempts to execute an action, the pre-execution handler is the first handler called.
     * Pre-execution handlers are executed on the **client-side only**.
     *
     * @return `false` to cancel the execution of the action.
     */
    setPreExecutionHandler(handler: (actionApi: IActionApi<E, CU>, ...args: AV) => any): this;
    /**
     * Add an asynchronous "confirmer" handler to this action.
     *
     * When an entity attempts to execute an action, the confirmer is the second handler called (after the pre-execution handler).
     * Confirmer handlers are executed on the **client-side only**.
     *
     * Note: If you use `actionApi.addItems` in a pre-execution handler, a confirmation interrupt will already be shown.
     * In that case, a confirmer is unnecessary.
     *
     * @return `false` to cancel the execution of the action.
     */
    setConfirmer(confirmer: (actionApi: IActionConfirmerApi<E, CU>, ...args: AV) => Promise<boolean>): this;
    /**
     * Add an example to this action.
     */
    setExample(exampleHandler: (actionApi: IActionExampleApi<E, CU>, ...args: AV) => IActionExample): this;
    /**
     * Add a can use handler for this action.
     *
     * This determines if an action is usable or not
     */
    setCanUse<RCU extends CU>(canUseHandler: (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => RCU | IActionNotUsable): Action<A, T, E, R, RCU>;
    /**
     * Add a handler for this action.
     *
     * Handlers are executed on both the client-side and the server-side.
     */
    setHandler<H extends (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => R>(handler: H): Action<A, T, E, Awaited<ReturnType<H>>, CU>;
    /**
     * Add a handler that is called when it's executed while not being usable
     *
     * Handlers are executed on both the client-side and the server-side.
     */
    setNotUsableHandler<H extends (actionApi: IActionNotUsableHandlerApi<E, CU>, ...args: AV) => R>(handler: H): Action<A, T, E, ReturnType<H>, CU>;
    /**
     * Sets additional times the action can be used in.
     */
    setUsableWhen(...usabilities: ActionUsability[]): this;
    /**
     * Sets additional flags for this action.
     */
    setFlags(...flags: ActionFlag[]): this;
    /**
     * Sets the entities that can use an action.
     */
    setUsableBy<E2 extends EntityType[]>(...entityTypes: E2): Action<A, T, EntityTypeTupleType<E2>>;
    /**
     * Checks if a flag is set
     * @param flag Flag to check
     */
    hasFlag(flag: ActionFlag): boolean;
    /**
     * Sets which deities can award runes for this action
     * @param deity A deity or union of multiple deities
     */
    setDeityDomain(...deities: DeityReal[]): this;
    /**
     * Creates an identical clone of this action.
     */
    clone(): Action<A, T, E, R, CU, AV>;
}
type EntityTypeTupleType<E extends EntityType[]> = E extends [EntityType] ? EntityTypeMap[E[0]] : E extends [EntityType, EntityType] ? EntityTypeMap[E[0]] | EntityTypeMap[E[1]] : E extends [EntityType, EntityType, EntityType] ? EntityTypeMap[E[0]] | EntityTypeMap[E[1]] | EntityTypeMap[E[2]] : never;
export {};
