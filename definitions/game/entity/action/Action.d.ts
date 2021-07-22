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
import { ActionArgument, ActionArgumentTupleTypes, ActionFlag, ActionUsability, IActionApi, IActionConfirmerApi, IActionDescription, IActionHandlerApi } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import Entity from "game/entity/Entity";
import { EntityType } from "game/entity/IEntity";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
export declare class Action<A extends Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, R = void, AV extends any[] = ActionArgumentTupleTypes<A>> implements IActionDescription<A, E, R, AV> {
    readonly argumentTypes: A;
    readonly usability: {
        [key in ActionUsability]?: boolean;
    };
    readonly flags: {
        [key in ActionFlag]?: boolean;
    };
    validExecutors: EntityType[];
    preExecutionHandler?: (actionApi: IActionApi<E>, ...args: AV) => any;
    handler: (actionApi: IActionHandlerApi<E>, ...args: AV) => R;
    confirmer?: (actionApi: IActionConfirmerApi<E>, ...args: AV) => Promise<boolean>;
    private shouldSkipConfirmation;
    constructor(...argumentTypes: A);
    execute(actionApi: IActionApi<E>, ...args: AV): R;
    execute(executor: E, ...args: AV): R;
    skipConfirmation(): this;
    /**
     * Add a "pre-execution" handler to this action.
     *
     * When an entity attempts to execute an action, the pre-execution handler is the first handler called.
     * Pre-execution handlers are executed on the **client-side only**.
     *
     * @return `false` to cancel the execution of the action.
     */
    setPreExecutionHandler(handler: (actionApi: IActionApi<E>, ...args: AV) => any): this;
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
    setConfirmer(confirmer: (actionApi: IActionConfirmerApi<E>, ...args: AV) => Promise<boolean>): this;
    /**
     * Add a handler for this action.
     *
     * Handlers are executed on both the client-side and the server-side.
     */
    setHandler<H extends (actionApi: IActionHandlerApi<E>, ...args: AV) => any>(handler: H): Action<A, E, H extends (...args: any) => infer R2 ? R2 : void>;
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
    clone(): IActionDescription<A, E, R, AV>;
}
declare type EntityTypeMap<E extends EntityType> = {
    [EntityType.Creature]: Creature;
    [EntityType.NPC]: NPC;
    [EntityType.Player]: Player;
}[E];
declare type EntityTypeTupleType<E extends EntityType[]> = E extends [EntityType] ? EntityTypeMap<E[0]> : E extends [EntityType, EntityType] ? EntityTypeMap<E[0]> | EntityTypeMap<E[1]> : E extends [EntityType, EntityType, EntityType] ? EntityTypeMap<E[0]> | EntityTypeMap<E[1]> | EntityTypeMap<E[2]> : never;
export {};
