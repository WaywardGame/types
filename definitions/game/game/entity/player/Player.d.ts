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
import type { IEventEmitter } from "event/EventEmitter";
import Creature from "game/entity/creature/Creature";
import { CreatureType } from "game/entity/creature/ICreature";
import Human from "game/entity/Human";
import { EntityType } from "game/entity/IEntity";
import { SkillType } from "game/entity/IHuman";
import type { IMovementIntent, IPlayerEvents } from "game/entity/player/IPlayer";
import MessageManager from "game/entity/player/MessageManager";
import NoteManager from "game/entity/player/note/NoteManager";
import QuestManager from "game/entity/player/quest/QuestManager";
import { TileUpdateType } from "game/IGame";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IContainer } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import { Milestone } from "game/milestones/IMilestone";
import type IClientStore from "save/clientStore/IClientStore";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { IDialogInfo } from "ui/old/IOldUi";
import { IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
import { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
export default class Player extends Human implements IUnserializedCallback {
    event: IEventEmitter<this, IPlayerEvents>;
    readonly entityType: EntityType.Player;
    readonly tileUpdateType = TileUpdateType.Player;
    absentLastUsedTime: number;
    dialogInfo: Record<string, IDialogInfo>;
    hintSeen: boolean[];
    islandId: IslandId;
    lastAttackedBy: Human | Creature | undefined;
    name: string;
    actionBar: IActionBarSlotData[];
    revealedItems: Record<number, boolean>;
    milestoneModifiers: Set<Milestone>;
    displayCreature?: CreatureType;
    private updateTablesOnNoInput?;
    private lastTableUpdateId?;
    constructor(identifier?: string);
    onUnserialized(): void;
    delete(): void;
    get island(): Island;
    get clientStore(): IClientStore;
    createNoteManager(): NoteManager;
    createMessageManager(): MessageManager;
    createQuestManager(): QuestManager;
    getDisplayCreature(): CreatureType | undefined;
    changeId(id: number): void;
    protected moveToIsland(island: Island, targetPosition: IVector3): void;
    checkSkillMilestones(): void;
    protected onCanMove(): false | undefined;
    addMilestone(milestone: Milestone, data?: number, update?: boolean): void;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    load(): void;
    setup(spawnPoint: IVector3): void;
    onNoInput(): void;
    updateTables(source: string, options?: Partial<{
        allowDeferingUpdate: boolean;
        allowCaching: boolean;
    }>): void;
    private updateCraftTable;
    updateDismantleTable(adjacentContainers?: IContainer[], force?: boolean): void;
    getName(): import("../../../language/impl/TranslationImpl").default;
    updateActionSlots(slots: number[], data: IActionBarSlotData[]): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    kill(): void;
    respawn(reset: boolean): Promise<void>;
    /**
     * Returns true if the player changed their facing direction.
     */
    faceDirection(direction: Direction.Cardinal | Direction.None, turnDelay?: number): boolean;
    revealItem(itemType: ItemType): void;
    /**
     * Check if a position is marked as explored
     * Only use this clientside
     */
    isExploredClientSide(x: number, y: number, z: number): boolean;
    protected onSkillGain(skill: SkillType, mod: number): void;
    protected calculateStats(): void;
    private canWriteInHours;
    private canWriteNote;
    private onWriteNote;
    private onReadNote;
    private shouldDisplayMessage;
    private onDisplayMessage;
    get asNPC(): undefined;
    get asPlayer(): this;
    get asLocalPlayer(): this | undefined;
}
