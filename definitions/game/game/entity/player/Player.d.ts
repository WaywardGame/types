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
import type { IContainer } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import { Prompt } from "game/meta/prompt/IPrompt";
import { Milestone } from "game/milestones/IMilestone";
import type Tile from "game/tile/Tile";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import type IClientStore from "save/clientStore/IClientStore";
import type { IPreSerializeCallback, ISerializer, IUnserializedCallback } from "save/serializer/ISerializer";
import type { IContainerSortInfo, IDialogInfo } from "ui/old/IOldUi";
import { IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
import { Direction } from "utilities/math/Direction";
export default class Player extends Human implements IPreSerializeCallback, IUnserializedCallback {
    get entityType(): EntityType.Player;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, IPlayerEvents>;
    absentLastUsedTime: number;
    containerSortInfo: Record<string | number, IContainerSortInfo | undefined>;
    dialogContainerInfo: Record<number, IDialogInfo | undefined>;
    dialogInfo: Record<string, IDialogInfo>;
    hintSeen: boolean[];
    islandId: IslandId;
    name: string;
    actionBar: IActionBarSlotData[];
    useActionsWhileMoving: boolean;
    revealedItems: Record<number, boolean>;
    milestoneModifiers: Set<Milestone>;
    milestoneTitle?: Milestone;
    displayCreature?: CreatureType;
    private updateTablesOnNoInput?;
    private lastTableUpdateId?;
    constructor(identifier?: string);
    preSerializeObject(serializer: ISerializer): void;
    onUnserialized(): void;
    delete(): void;
    isValid(): boolean;
    get clientStore(): IClientStore;
    createNoteManager(): NoteManager;
    createMessageManager(): MessageManager;
    createQuestManager(): QuestManager;
    getDisplayCreature(): CreatureType | undefined;
    protected updateTile(fromTile: Tile, toTile: Tile): boolean;
    changeId(id: number): void;
    protected moveToIsland(targetTile: Tile): void;
    /**
     * This only does stuff when it's called on the local player
     */
    addItemMilestones(item: Item): void;
    checkSkillMilestones(): void;
    protected onCanMove(direction: Direction.Cardinal): false | undefined;
    addMilestone(milestone: Milestone, data?: number | string, update?: boolean): void;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    load(): void;
    unload(): void;
    private onLoadOrUnload;
    setup(spawnPoint: Tile): void;
    protected onNoInput(): void;
    updateTables(source: string, options?: Partial<{
        allowCaching: boolean;
        skipDeferral: boolean;
    }>): void;
    private updateCraftTable;
    updateDismantleTable(adjacentContainers?: IContainer[], force?: boolean): void;
    getName(includeTitle?: boolean): import("../../../language/impl/TranslationImpl").default;
    /**
     * Prompts the player
     */
    prompt(type: Prompt, ...args: any[]): Promise<boolean | InterruptChoice>;
    updateActionSlots(slots: number[], data: IActionBarSlotData[], enabled?: boolean): void;
    updateDialogInfo(dialogIndex: string | number | undefined): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo | undefined;
    kill(): void;
    respawn(reset: boolean): void;
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
    protected onSkillGain(skill: SkillType, fromValue: number, toValue: number, mod: number): void;
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
