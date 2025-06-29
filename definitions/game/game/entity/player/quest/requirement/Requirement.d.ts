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
import type { GameEmitterOrBus, GameEvent, GameEventHandler } from "@wayward/game/event/EventManager";
import type { IPlayerEvents } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IQuestRequirementApi } from "@wayward/game/game/entity/player/quest/requirement/IRequirement";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { HighlightSelector } from "@wayward/game/ui/util/IHighlight";
import type Stream from "@wayward/goodstream";
import type { Events } from "@wayward/utilities/event/EventEmitter";
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
    setEventTrigger<E extends GameEmitterOrBus, K extends GameEvent<E>>(bus: E, event: K, checker: (api: IQuestRequirementApi<O, D>, ...args: Parameters<GameEventHandler<E, K>>) => boolean): this;
    getEventBusTriggers(): Stream<readonly [GameEmitterOrBus, string | number | symbol, (api: IQuestRequirementApi<O, D>, ...args: any[]) => boolean]>;
    setHostTrigger<E extends keyof Events<Player>>(event: E, checker: (api: IQuestRequirementApi<O, D>, player: Player, ...args: ArgumentsOf<Events<Player>[E]>) => boolean): this;
    getHostTriggers(): IteratorObject<[keyof IPlayerEvents, (api: IQuestRequirementApi<O, D>, player: Player, ...args: any[]) => boolean]>;
    setInitializeTrigger(checker: (api: IQuestRequirementApi<O, D>) => boolean): this;
    getInitializeTrigger(): ((api: IQuestRequirementApi<O, D>) => boolean) | undefined;
    setRelations(relations: HighlightSelector[]): this;
    setRelations(handler: (api: IQuestRequirementApi<O, D>) => HighlightSelector[]): this;
    getRelations(api: IQuestRequirementApi<O, D>): HighlightSelector[];
    setTranslation(translation: Translation | ((api: IQuestRequirementApi<O, D>) => Translation)): this;
    getTranslation(api: IQuestRequirementApi<O, D>): TranslationImpl;
    setCompletionAmountGetter(getter: (api: IQuestRequirementApi<O, D>) => number): this;
    getCompletionAmount(api: IQuestRequirementApi<O, D>): number;
    protected validateOptions(...options: O): boolean;
}
