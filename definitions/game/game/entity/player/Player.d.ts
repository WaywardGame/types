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
import { TileUpdateType } from "@wayward/game/game/IGame";
import Human from "@wayward/game/game/entity/Human";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import IActionContext from "@wayward/game/game/entity/action/IActionContext";
import type { IDamageInfo } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IMovementIntent, IPlayerEvents, PlayerTag, PlayerTitle } from "@wayward/game/game/entity/player/IPlayer";
import MessageManager from "@wayward/game/game/entity/player/MessageManager";
import NoteManager from "@wayward/game/game/entity/player/note/NoteManager";
import QuestManager from "@wayward/game/game/entity/player/quest/QuestManager";
import { StatusApplicability } from "@wayward/game/game/entity/status/IStatus";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IContainer, IRecipe } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import ItemRecipeRequirementChecker from "@wayward/game/game/item/ItemRecipeRequirementChecker";
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
export default class Player extends Human<undefined, number, ReferenceType.Player, PlayerTag> implements IPreSerializeCallback, IUnserializedCallback {
    get entityType(): EntityType.Player;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, IPlayerEvents>;
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
    get isSetup(): boolean;
    get clientStore(): IClientStore;
    protected get typeEnum(): {};
    getDescription(): undefined;
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
    addItemMilestones(item: Item, context?: IActionContext): void;
    checkSkillMilestones(): void;
    private getUsableAction;
    /**
     * Note: This is usually only ran on the server
     */
    getMovementIntent(): IMovementIntent;
    protected onCanMove(direction: Direction.Cardinal): false | undefined;
    protected onGetSkillGainMultiplier(skillType: SkillType): number | undefined;
    protected onDamage(damageInfo: IDamageInfo): void;
    addMilestone(milestone: Milestone, data?: number | string): void;
    addMilestone(milestone: Milestone, data: number | string | undefined, update: true): boolean;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    load(): void;
    unload(): void;
    /**
     * Note: This method should not do anything that could desync states in mp
     */
    private onLoadOrUnload;
    private _isSetup;
    setup(spawnTile: Tile, respawn: boolean): void;
    private setupEquipment;
    private setupStats;
    private setupSkills;
    private setupRandomInventory;
    private setupStatuses;
    private setupItemsFromGroups;
    private setupAdditionalItemsFromOptions;
    private setupEquipmentFromOptions;
    private setupSkillsFromOptions;
    protected onNoInput(): void;
    updateTables(source: string, options?: Partial<{
        allowCaching: boolean;
        skipDeferral: boolean;
    }>): void;
    private updateTablesInternal;
    shouldDiscoverRecipe(recipe: IRecipe, checker: ItemRecipeRequirementChecker): boolean;
    /**
     * Checks if the item is discovered based on the game options and milestones.
     * @param itemType The type of the item to check.
     * @returns True if the item is discovered, false otherwise.
     */
    private isItemDiscovered;
    private isRecipeDiscovered;
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
    revealItem(itemType: ItemType): void;
    /**
     * Check if a position is marked as explored
     * Only use this clientside
     */
    isExploredClientSide(x: number, y: number, z: number): boolean;
    /**
     * Add milestones and local item discovery for the given item type.
     * @param itemType The type of the item to discover.
     */
    discoverItem(itemType: ItemType): void;
    protected onSkillGain(skill: SkillType, fromValue: number, toValue: number, mod: number): void;
    protected getStatusApplicability(): StatusApplicability | undefined;
    private canWriteInHours;
    private canWriteNote;
    private onWriteNote;
    private onReadNote;
    private onClearNotes;
    private shouldDisplayMessage;
    private onDisplayMessage;
    private onClearMessages;
    get asNPC(): undefined;
    get asPlayer(): this;
    get asLocalPlayer(): this | undefined;
    get asNotLocalPlayer(): this | undefined;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
}
