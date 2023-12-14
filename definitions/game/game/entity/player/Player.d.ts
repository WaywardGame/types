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
import { TileUpdateType } from "@wayward/game/game/IGame";
import Human from "@wayward/game/game/entity/Human";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import type { IDamageInfo } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IMovementIntent, IPlayerEvents, PlayerTitle } from "@wayward/game/game/entity/player/IPlayer";
import MessageManager from "@wayward/game/game/entity/player/MessageManager";
import NoteManager from "@wayward/game/game/entity/player/note/NoteManager";
import QuestManager from "@wayward/game/game/entity/player/quest/QuestManager";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IContainer } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type IClientStore from "@wayward/game/save/clientStore/IClientStore";
import type { IPreSerializeCallback, ISerializer, IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
import type { IContainerSortInfo, IDialogInfo } from "@wayward/game/ui/old/IOldUi";
import { IActionBarSlotData } from "@wayward/game/ui/screen/screens/game/static/actions/IActionBar";
import { Direction } from "@wayward/game/utilities/math/Direction";
import { type IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export default class Player extends Human<number, ReferenceType.Player> implements IPreSerializeCallback, IUnserializedCallback {
    get entityType(): EntityType.Player;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, IPlayerEvents>;
    absentLastUsedTime: number;
    containerSortInfo: Record<string | number, IContainerSortInfo | undefined>;
    dialogContainerInfo: SaferNumberIndexedObject<IDialogInfo>;
    dialogInfo: Record<string, IDialogInfo>;
    hintSeen: boolean[];
    islandId: IslandId;
    name: string;
    actionBar: IActionBarSlotData[];
    useActionsWhileMoving: boolean;
    revealedItems: SaferNumberIndexedObject<boolean>;
    milestoneModifiers: Set<Milestone>;
    title?: PlayerTitle;
    displayCreature?: CreatureType;
    private updateTablesOnNoInput?;
    private lastTableUpdateId?;
    constructor(identifier?: string);
    preSerializeObject(serializer: ISerializer): void;
    onUnserialized(): void;
    private scheduledUpdateTables?;
    delete(): void;
    get isValid(): boolean;
    get clientStore(): IClientStore;
    createNoteManager(): NoteManager;
    createMessageManager(): MessageManager;
    createQuestManager(): QuestManager;
    getDisplayCreature(): CreatureType | undefined;
    protected updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    changeId(id: number): void;
    protected moveToIsland(targetTile: Tile): void;
    /**
     * This only does stuff when it's called on the local player
     */
    addItemMilestones(item: Item): void;
    checkSkillMilestones(): void;
    private getUsableAction;
    protected onGetMovementIntent(): IMovementIntent | undefined;
    protected onCanMove(direction: Direction.Cardinal): false | undefined;
    protected onGetSkillGainMultiplier(skillType: SkillType): number | undefined;
    protected onDamage(damageInfo: IDamageInfo): void;
    addMilestone(milestone: Milestone, data?: number | string): void;
    addMilestone(milestone: Milestone, data: number | string | undefined, update: true): boolean;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    load(): void;
    unload(): void;
    private onLoadOrUnload;
    setup(spawnTile: Tile): void;
    protected onNoInput(): void;
    updateTables(source: string, options?: Partial<{
        allowCaching: boolean;
        skipDeferral: boolean;
    }>): void;
    private updateTablesInternal;
    private updateCraftTable;
    updateDismantleTable(adjacentContainers?: IContainer[], force?: boolean): void;
    getName(includeTitle?: boolean): TranslationImpl;
    /**
     * Prompts the player
     */
    prompt(type: Prompt, ...args: any[]): Promise<boolean | InterruptChoice>;
    updateActionSlots(slots: number[], data: IActionBarSlotData[], enabled?: boolean): void;
    /**
     * Send a packet to the server about the dialog info for the dialog
     */
    updateDialogInfo(dialogIndex: string | number | undefined): void;
    /**
     * Send a packet to the server about the sort info for the container
     */
    updateContainerSortInfo(dialogIndex: string | number | undefined): void;
    getDialogInfo(dialogIndex: string | number | undefined): IDialogInfo | undefined;
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
    isNPC(): this is NPC;
    isPlayer(): this is Player;
}
