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
import type { ActionArgument, ActionArgumentTupleTypes, ActionFlag, ActionUsability, IActionApi, IActionConfirmerApi, IActionDescription, IActionHandlerApi, IActionNotUsable, IActionUsable } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type { EntityType } from "game/entity/IEntity";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
export declare class Action<A extends Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, R = void, CU extends IActionUsable = IActionUsable, AV extends any[] = ActionArgumentTupleTypes<A>> implements IActionDescription<A, E, R, CU, AV> {
    readonly argumentTypes: A;
    readonly usability: {
        [key in ActionUsability]?: boolean;
    };
    readonly flags: {
        [key in ActionFlag]?: boolean;
    };
    validExecutors: Set<EntityType>;
    preExecutionHandler?: (actionApi: IActionApi<E, CU>, ...args: AV) => any;
    canUseHandler: (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => CU | IActionNotUsable;
    handler: (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => R;
    confirmer?: (actionApi: IActionConfirmerApi<E, any>, ...args: AV) => Promise<boolean>;
    private shouldSkipConfirmation;
    constructor(...argumentTypes: A);
    /**
     * Check if the action has setup CanUse logic
     */
    get hasSetCanUse(): boolean;
    canUse(actionApi: IActionApi<E, any>, ...args: AV): CU | IActionNotUsable;
    canUse(executor: E, ...args: AV): CU | IActionNotUsable;
    canUseWhileFacing(actionExecutor: E, position: IVector3, direction: Direction.Cardinal, ...args: AV): CU | IActionNotUsable;
    execute(actionApiOrExecutor: IActionApi<E, any> | E, ...args: AV): R | Promise<R>;
    executeConfirmer(actionApiOrExecutor: IActionApi<E, any> | E, args: AV, argumentTypes?: ActionArgument[]): Promise<boolean>;
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
     * Add a can use handler for this action.
     *
     * This determines if an action is usable or not
     */
    setCanUse<T extends CU>(canUseHandler: (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => T | IActionNotUsable): Action<A, E, R, T>;
    /**
     * Add a handler for this action.
     *
     * Handlers are executed on both the client-side and the server-side.
     */
    setHandler<H extends (actionApi: IActionHandlerApi<E, CU>, ...args: AV) => R>(handler: H): Action<A, E, ReturnType<H>, CU>;
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
    setUsableBy<E2 extends EntityType[]>(...entityTypes: E2): Action<A, EntityTypeTupleType<E2>>;
    /**
     * Checks if a flag is set
     * @param flag Flag to check
     */
    hasFlag(flag: ActionFlag): boolean;
    /**
     * Creates an identical clone of this action.
     */
    clone(): Action<A, E, R, CU, AV>;
}
declare type EntityTypeMap<E extends EntityType> = {
    [EntityType.Creature]: Creature;
    [EntityType.NPC]: NPC;
    [EntityType.Player]: Player;
    [EntityType.Human]: Human;
}[E];
declare type EntityTypeTupleType<E extends EntityType[]> = E extends [EntityType] ? EntityTypeMap<E[0]> : E extends [EntityType, EntityType] ? EntityTypeMap<E[0]> | EntityTypeMap<E[1]> : E extends [EntityType, EntityType, EntityType] ? EntityTypeMap<E[0]> | EntityTypeMap<E[1]> | EntityTypeMap<E[2]> : never;
export {};
