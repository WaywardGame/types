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
import type { GameEmitterOrBus } from "@wayward/game/event/EventManager";
import type { IPlayerEvents } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { QuestInstance } from "@wayward/game/game/entity/player/quest/QuestManager";
import type { RequirementArgs } from "@wayward/game/game/entity/player/quest/Requirements";
import type { IQuest, QuestType } from "@wayward/game/game/entity/player/quest/quest/IQuest";
import type { IQuestRequirement, IQuestRequirementApi, IQuestRequirementEvents, QuestRequirementType } from "@wayward/game/game/entity/player/quest/requirement/IRequirement";
import type Island from "@wayward/game/game/island/Island";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { HighlightSelector } from "@wayward/game/ui/util/IHighlight";
import type Stream from "@wayward/goodstream";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IQuestEvents {
    update(quest: QuestInstance, requirement: RequirementInstance): any;
    requirementCompleted(quest: QuestInstance, requirement: RequirementInstance): any;
    complete(quest: IQuest): any;
}
export declare class Quest extends EventEmitter.Host<IQuestEvents> {
    type?: QuestType | undefined;
    title?: Translation | ((quest: IQuest) => Translation);
    description?: Translation | ((quest: IQuest) => Translation);
    private readonly requirements;
    private readonly children;
    private readonly requirementInstances;
    private _needsManualCompletion;
    private _skippable;
    constructor(type?: QuestType | undefined);
    reset(): void;
    addRequirement<R extends QuestRequirementType>(type: R, ...args: RequirementArgs<R>): this;
    addRequirement<RA extends any[]>(type: QuestRequirementType, ...args: RA): this;
    setNeedsManualCompletion(): this;
    setSkippable(): this;
    addChildQuests(...children: QuestType[]): this;
    getChildren(): QuestType[];
    setTitle(translation?: Translation | ((quest: IQuest) => Translation)): this;
    setDescription(translation?: Translation): this;
    create(island: Island, type?: QuestType | undefined): IQuest;
    getTitle(quest: IQuest): TranslationImpl | undefined;
    getDescription(quest: IQuest): TranslationImpl | undefined;
    getEventBusTriggers(instance: IQuest): Array<[IQuestRequirement, Stream<readonly [GameEmitterOrBus, string | number | symbol, (api: IQuestRequirementApi<[]>, ...args: any[]) => boolean]>]>;
    getHostTriggers(instance: IQuest): Array<[IQuestRequirement, IteratorObject<[keyof IPlayerEvents, (api: IQuestRequirementApi<[]>, player: Player, ...args: any[]) => boolean]>]>;
    getRequirements(host: Player, instance: IQuest): RequirementInstance[];
    getRequirement(host: Player, quest: IQuest, requirement: IQuestRequirement): RequirementInstance | undefined;
    needsManualCompletion(): boolean;
    skippable(): boolean;
    protected createRequirements(island: Island): IQuestRequirement[];
    protected createRequirement<R extends QuestRequirementType>(type: R, ...options: RequirementArgs<R>): IQuestRequirement<RequirementArgs<R>>;
}
export declare class RequirementInstance extends EventEmitter.Host<IQuestRequirementEvents> {
    readonly data: IQuestRequirement;
    readonly id: number;
    private readonly api;
    constructor(host: Player, data: IQuestRequirement, id: number);
    triggerInitialization(): boolean;
    getTranslation(): TranslationImpl;
    getCompletionAmount(): number;
    getRelations(): HighlightSelector[];
    setVisible(): this;
    private get description();
}
