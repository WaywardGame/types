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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { SkillType } from "../skill/ISkills";
import type { ActionArguments, ActionExecutorEvents, AnyActionDescription, IActionApi, IActionArgumentTypeMap, IActionConfirmerApi, IActionDescription, IActionExample, IActionParticle, IActionSoundEffect, IActionUsable, IProtectedItems, SkillGain } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType, BlockFlag, IActionNotUsable } from "@wayward/game/game/entity/action/IAction";
import IActionContext from "@wayward/game/game/entity/action/IActionContext";
import type { TurnTypeFlag } from "@wayward/game/game/entity/player/IPlayer";
import type Item from "@wayward/game/game/item/Item";
import type { IPromptDescriptionBase, PromptDescriptionArgs } from "@wayward/game/game/meta/prompt/IPrompt";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type Tile from "@wayward/game/game/tile/Tile";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import ActionPacket from "@wayward/game/multiplayer/packets/shared/ActionPacket";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IRGB } from "@wayward/utilities/Color";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export default class ActionExecutor<A extends ActionArguments, E extends Entity, R, CU extends IActionUsable, AV extends any[]> extends EventEmitter.Host<ActionExecutorEvents> implements IActionApi<E, CU>, IActionConfirmerApi<E, CU> {
    /**
     * Gets an action by its description. If you're using the Action class for constructing the descriptions, just pass the action instance.
     *
     * Note: Prefer `IActionApi.get` if you're calling this from within another action.
     */
    static get<D extends AnyActionDescription>(action: D): D extends IActionDescription<infer A, infer E, infer R, infer CU, infer AV> ? ActionExecutor<A, E, R, CU, AV> : never;
    static executeMultiplayer(packet: ActionPacket, executor?: Entity<unknown, number, import("../../reference/IReferenceManager").EntityReferenceTypes, unknown> | undefined, nonMpActionExecutor?: ActionExecutor<Array<ActionArgument | ActionArgument[]>, Entity, any, any, any[]>): unknown;
    get executor(): E;
    get actionStack(): ActionType[];
    get callingAction(): ActionType;
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
    targetTile?: Tile;
    private delay?;
    private milestone?;
    private particle?;
    private passTurn;
    private runeChance?;
    private sfx?;
    private skillGains?;
    private staminaReduction?;
    private updateRender?;
    private updateTablesAndWeight?;
    private updateView?;
    private updateWeight?;
    private context?;
    private readonly items;
    private itemsUsed;
    private readonly _description;
    use: CU;
    constructor(action?: IActionDescription<A, E, R, CU>, type?: number | undefined);
    get description(): IActionDescription<A, E, R, CU>;
    get(actionType: ActionType): never;
    skipConfirmation(): this;
    /**
     * Checks if stuff is blocking the tile
     */
    isTileBlocked(tile: Tile, ...blockFlags: BlockFlag[]): boolean;
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
    getExample(executor: E, ...args: AV): IActionExample | undefined;
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
    canUseWhileFacing(executor: E, position: IVector3, direction?: Direction.Cardinal, ...args: AV): CU | IActionNotUsable;
    private processNotUsableResult;
    execute(actionApiOrExecutor: IActionApi<E, CU> | E, ...args: AV): PromiseOr<R | undefined>;
    executeConfirmer(actionApiOrExecutor: IActionApi<E, CU> | E, args: AV): Promise<boolean>;
    /**
     * Prompts the user about something
     */
    prompt<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: PROMPT, ...args: PromptDescriptionArgs<PROMPT>): Promise<boolean>;
    isArgumentType<AA extends ActionArgument>(argument: any, index: number, argumentType: AA): argument is IActionArgumentTypeMap[AA];
    setContext(tool?: Item | Translation, target?: ArrayOr<Entity> | Tile | Translation, details?: Record<string, TranslationArg>): IActionContext | undefined;
    getContext(): IActionContext;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnTypeFlag): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setUpdateWeight(): this;
    setStaminaReduction(reduction?: SkillType, actionTier?: number): this;
    setRuneChance(chanceOrDeity: ArrayOr<DeityReal> | number | undefined, chance?: number): this;
    addSkillGains(...skills: SkillGain[]): this;
    addSkillGains(skill: SkillType, amount?: number, actionTier?: number, bypass?: true, times?: number): this;
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
    private silent?;
    setSilent(silent?: boolean): this;
    private executeInternalOrMultiplayer;
    private executeInternal;
    private createActionPacket;
    private handleApiOnActionFailure;
    protected giveRune(human: Human): void;
    private handleApi;
    private canExecute;
    private isUsableWhen;
    private static validate;
}
