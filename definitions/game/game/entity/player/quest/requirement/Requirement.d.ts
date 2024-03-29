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
import type { Events } from "event/EventEmitter";
import type { EmitterOrBus, Event, Handler } from "event/EventManager";
import type Player from "game/entity/player/Player";
import type { IQuestRequirementApi } from "game/entity/player/quest/requirement/IRequirement";
import Translation from "language/Translation";
import type { HighlightSelector } from "ui/util/IHighlight";
export type QuestRequirementApi<R extends QuestRequirement<any, any>> = R extends QuestRequirement<infer O, infer D> ? IQuestRequirementApi<O, D> : never;
export declare class QuestRequirement<O extends any[] = [], D extends {} = {}> {
    readonly defaultData: D;
    private readonly eventTriggers;
    private readonly hostTriggers;
    private translation?;
    private completionAmountGetter;
    private relationsHandler?;
    private initializeTrigger?;
    constructor(defaultData: D);
    setEventTrigger<E extends EmitterOrBus, K extends Event<E>>(bus: E, event: K, checker: (api: IQuestRequirementApi<O, D>, ...args: Parameters<Handler<E, K>>) => boolean): this;
    getEventBusTriggers(): import("@wayward/goodstream").default<readonly [EmitterOrBus, string | number | symbol, (api: IQuestRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setHostTrigger<E extends keyof Events<Player>>(event: E, checker: (api: IQuestRequirementApi<O, D>, player: Player, ...args: ArgumentsOf<Events<Player>[E]>) => boolean): this;
    getHostTriggers(): IterableIterator<[keyof import("../../IPlayer").IPlayerEvents, (api: IQuestRequirementApi<O, D>, player: Player, ...args: any[]) => boolean]>;
    setInitializeTrigger(checker: (api: IQuestRequirementApi<O, D>) => boolean): this;
    getInitializeTrigger(): ((api: IQuestRequirementApi<O, D>) => boolean) | undefined;
    setRelations(relations: HighlightSelector[]): this;
    setRelations(handler: (api: IQuestRequirementApi<O, D>) => HighlightSelector[]): this;
    getRelations(api: IQuestRequirementApi<O, D>): HighlightSelector[];
    setTranslation(translation: Translation | ((api: IQuestRequirementApi<O, D>) => Translation)): this;
    getTranslation(api: IQuestRequirementApi<O, D>): import("../../../../../language/impl/TranslationImpl").default;
    setCompletionAmountGetter(getter: (api: IQuestRequirementApi<O, D>) => number): this;
    getCompletionAmount(api: IQuestRequirementApi<O, D>): number;
    protected validateOptions(...options: O): boolean;
}
