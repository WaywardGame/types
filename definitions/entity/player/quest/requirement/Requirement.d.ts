/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Player from "entity/player/Player";
import { IQuestRequirementApi } from "entity/player/quest/requirement/IRequirement";
import { Events } from "event/EventEmitter";
import { EmitterOrBus, Event, Handler } from "event/EventManager";
import Translation from "language/Translation";
import { Hook } from "mod/IHookManager";
import Mod from "mod/Mod";
import { HighlightSelector } from "newui/component/IComponent";
export declare type QuestRequirementApi<R extends QuestRequirement<any, any>> = R extends QuestRequirement<infer O, infer D> ? IQuestRequirementApi<O, D> : never;
export declare class QuestRequirement<O extends any[] = [], D extends {} = {}> {
    readonly defaultData: D;
    private readonly triggers;
    private readonly eventTriggers;
    private readonly hostTriggers;
    private translation?;
    private completionAmountGetter;
    private relationsHandler?;
    private initializeTrigger?;
    constructor(defaultData: D);
    /**
     * @ts-ignore typescript is dumb
     */
    setTrigger<H extends Hook>(hook: H, checker: (api: IQuestRequirementApi<O, D>, ...args: ArgumentsOf<Mod[H]>) => boolean): this;
    getTriggers(): IterableIterator<[Hook, (api: IQuestRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setEventTrigger<E extends EmitterOrBus, K extends Event<E>>(bus: E, event: K, checker: (api: IQuestRequirementApi<O, D>, ...args: Parameters<Handler<E, K>>) => boolean): this;
    getEventBusTriggers(): IterableIterator<[EmitterOrBus, [string | number | symbol, (api: IQuestRequirementApi<O, D>, ...args: any[]) => boolean]]>;
    setHostTrigger<E extends keyof Events<Player>>(event: E, checker: (api: IQuestRequirementApi<O, D>, player: Player, ...args: ArgumentsOf<Events<Player>[E]>) => boolean): this;
    getHostTriggers(): IterableIterator<["spawn" | "milestoneUpdate" | "updateOption" | "displayMessage" | "getMaxHealth" | "getMaxWeight" | "inventoryItemAdd" | "inventoryItemRemove" | "inventoryItemUpdate" | "processMovement" | "getMovementIntent" | "restStart" | "restEnd" | "skillChange" | "canConsumeItem" | "canDropItem" | "canAttack" | "calculateEquipmentStats" | "statChanged" | "statTimerChanged" | "statMaxChanged" | "statBonusChanged" | "statusChange" | "removed" | "preMove" | "postMove", (api: IQuestRequirementApi<O, D>, player: Player, ...args: any[]) => boolean]>;
    setInitializeTrigger(checker: (api: IQuestRequirementApi<O, D>) => boolean): this;
    getInitializeTrigger(): ((api: IQuestRequirementApi<O, D>) => boolean) | undefined;
    setRelations(relations: HighlightSelector[]): this;
    setRelations(handler: (api: IQuestRequirementApi<O, D>) => HighlightSelector[]): this;
    getRelations(api: IQuestRequirementApi<O, D>): [import("../../../../newui/component/IComponent").HighlightType, string | number][];
    setTranslation(translation: Translation | ((api: IQuestRequirementApi<O, D>) => Translation)): this;
    getTranslation(api: IQuestRequirementApi<O, D>): Translation;
    setCompletionAmountGetter(getter: (api: IQuestRequirementApi<O, D>) => number): this;
    getCompletionAmount(api: IQuestRequirementApi<O, D>): number;
    protected validateOptions(...options: O): boolean;
}
