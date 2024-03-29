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
import EventEmitter from "event/EventEmitter";
import type { Game } from "game/Game";
import type Player from "game/entity/player/Player";
import type PlayerManager from "game/entity/player/PlayerManager";
import type { IQuest } from "game/entity/player/quest/quest/IQuest";
import { QuestType } from "game/entity/player/quest/quest/IQuest";
import type { RequirementInstance } from "game/entity/player/quest/quest/Quest";
export interface IQuestManager extends EventEmitter.Host<IQuestManagerEvents> {
    /**
     * Get all quests
     */
    getQuests(): QuestInstance[];
    /**
     * Get all quests of the given type
     */
    getQuests(type: QuestType): QuestInstance[];
    getQuests(type?: QuestType): QuestInstance[];
    add(type: QuestType): this;
    reset(): void;
}
export declare class QuestManagerNoOp extends EventEmitter.Host<IQuestManagerEvents> implements IQuestManager {
    private readonly quests;
    getQuests(): QuestInstance[];
    getQuests(type: QuestType): QuestInstance[];
    getQuests(type?: QuestType): QuestInstance[];
    add(type: QuestType): this;
    reset(): void;
}
export default class QuestManager extends EventEmitter.Host<IQuestManagerEvents> implements IQuestManager {
    static reset(): void;
    private readonly quests;
    private readonly eventBusTriggers;
    private readonly hostTriggers;
    private readonly initializedQuests;
    private readonly _host;
    constructor(host: Player);
    private get host();
    /**
     * Get all quests
     */
    getQuests(): QuestInstance[];
    /**
     * Get all quests of the given type
     */
    getQuests(type: QuestType): QuestInstance[];
    add(type: QuestType): this;
    /**
     * Removes all quests & disposes of any quest requirement triggers
     */
    reset(): this;
    complete(questInstance: QuestInstance): boolean;
    onPlayerJoin(manager: PlayerManager, player: Player): void;
    onGameStart(game: Game, _isLoadingSave: boolean, _playedCount: number): void;
    private init;
    private onUpdateRequirement;
    private onCompleteRequirement;
}
export interface IQuestManagerEvents {
    /**
     * Emitted when a quest is completed.
     * @param quest The completed `IQuestInstance`
     */
    questComplete(quest: QuestInstance): any;
    /**
     * Emitted when a new quest is added.
     * @param quest The `IQuestInstance` that was added
     */
    questGet(quest: QuestInstance): any;
    /**
     * Emitted when a quest is updated (a requirement is updated)
     * @param quest The `IQuestInstance` that was updated
     */
    questUpdate(quest: QuestInstance): any;
    /**
     * Emitted when a quest requirement is completed
     * @param quest The `IQuestInstance` of the requirement which was updated
     * @param requirement The `IRequirementInstance` that was updated
     */
    requirementMet(quest: QuestInstance, requirement: RequirementInstance): any;
    /**
     * Called when the quest manager is reset
     */
    reset(): any;
}
export declare class QuestInstance extends EventEmitter.Host<IQuestInstanceEvents> {
    readonly host: Player;
    readonly data: IQuest;
    readonly id: number;
    constructor(host: Player, data: IQuest, id: number);
    getTitle(): import("../../../../language/impl/TranslationImpl").default | undefined;
    getDescription(): import("../../../../language/impl/TranslationImpl").default | undefined;
    getRequirements(): RequirementInstance[];
    needsManualCompletion(): boolean | undefined;
    complete(): this;
    getChildren(): QuestType[];
    getCompletionAmount(): number;
}
interface IQuestInstanceEvents {
    dispose(): any;
    update(): any;
    manualCompletion(): any;
    complete(): any;
}
export {};
