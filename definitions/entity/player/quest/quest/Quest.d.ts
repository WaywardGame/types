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
import Player from "entity/player/Player";
import { IQuest, QuestType } from "entity/player/quest/quest/IQuest";
import { QuestInstance } from "entity/player/quest/QuestManager";
import { IQuestRequirement, IQuestRequirementApi, IQuestRequirementEvents, QuestRequirementType } from "entity/player/quest/requirement/IRequirement";
import { RequirementArgs } from "entity/player/quest/Requirements";
import EventEmitter from "event/EventEmitter";
import Translation from "language/Translation";
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
    constructor(type?: QuestType | undefined);
    addRequirement<R extends QuestRequirementType>(type: R, ...args: RequirementArgs<R>): this;
    addRequirement<RA extends any[]>(type: QuestRequirementType, ...args: RA): this;
    setNeedsManualCompletion(): this;
    addChildQuests(...children: QuestType[]): this;
    getChildren(): import("@wayward/goodstream/Stream").default<QuestType>;
    setTitle(translation?: Translation | ((quest: IQuest) => Translation)): this;
    setDescription(translation?: Translation): this;
    create(type?: QuestType | undefined): IQuest;
    getTitle(quest: IQuest): Translation | undefined;
    getDescription(quest: IQuest): Translation | undefined;
    getTriggers(instance: IQuest): import("@wayward/goodstream/Stream").default<[IQuestRequirement<any[], {}>, IterableIterator<[import("../../../../mod/IHookManager").Hook, (api: IQuestRequirementApi<[], {}>, ...args: any[]) => boolean]>]>;
    getEventBusTriggers(instance: IQuest): import("@wayward/goodstream/Stream").default<[IQuestRequirement<any[], {}>, import("@wayward/goodstream/Stream").default<readonly [import("../../../../event/EventManager").EmitterOrBus, string | number | symbol, (api: IQuestRequirementApi<[], {}>, ...args: any[]) => boolean]>]>;
    getHostTriggers(instance: IQuest): import("@wayward/goodstream/Stream").default<[IQuestRequirement<any[], {}>, IterableIterator<["tickStart" | "tickEnd" | "spawn" | "restored" | "updateOption" | "displayMessage" | "interruptResponse" | "getMaxHealth" | "getMaxWeight" | "damage" | "shouldDie" | "die" | "shouldRespawn" | "respawn" | "inventoryItemAdd" | "inventoryItemRemove" | "inventoryItemUpdate" | "processMovement" | "getMovementIntent" | "noInput" | "walkPathChange" | "moveComplete" | "changeZ" | "getWeightStatus" | "getWeightOrStaminaMovementPenalty" | "restStart" | "restEnd" | "writeNote" | "writtenNote" | "readNote" | "canConsumeItem" | "canDropItem" | "canAttack" | "calculateEquipmentStats" | "isSwimming" | "statusChange" | "created" | "removed" | "preMove" | "postMove" | "statChanged" | "statTimerChanged" | "statTimerWillChange" | "statTimerRemoved" | "statMaxChanged" | "statBonusChanged" | "skillChange", (api: IQuestRequirementApi<[], {}>, player: Player, ...args: any[]) => boolean]>]>;
    getRequirements(host: Player, instance: IQuest): import("@wayward/goodstream/Stream").default<RequirementInstance>;
    getRequirement(host: Player, quest: IQuest, requirement: IQuestRequirement): RequirementInstance | undefined;
    needsManualCompletion(): boolean;
    protected createRequirements(): import("@wayward/goodstream/Stream").default<IQuestRequirement<any[], {}>>;
    protected createRequirement<R extends QuestRequirementType>(type: R, ...options: RequirementArgs<R>): IQuestRequirement<RequirementArgs<R>>;
}
export declare class RequirementInstance extends EventEmitter.Host<IQuestRequirementEvents> {
    readonly data: IQuestRequirement;
    readonly id: number;
    private readonly api;
    constructor(host: Player, data: IQuestRequirement, id: number);
    triggerInitialization(): boolean;
    getTranslation(): Translation;
    getCompletionAmount(): number;
    getRelations(): import("../../../../newui/component/IComponent").HighlightSelector[];
    setVisible(): this;
}
