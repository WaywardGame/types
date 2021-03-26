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
import { SfxType } from "audio/IAudio";
import { Command } from "command/ICommand";
import Doodad from "game/doodad/Doodad";
import { IActionApi, IActionDescription } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import { CreatureType, IDamageInfo, SpawnGroup } from "game/entity/creature/ICreature";
import Entity from "game/entity/Entity";
import Human from "game/entity/Human";
import { EquipType, SkillType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import { IMessage } from "game/entity/player/IMessageManager";
import Player from "game/entity/player/Player";
import { BookType, ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import ItemRecipeRequirementChecker from "game/item/ItemRecipeRequirementChecker";
import { ITile } from "game/tile/ITerrain";
import { Hook } from "mod/IHookManager";
import ISpriteBatch from "renderer/ISpriteBatch";
import IWorld from "renderer/IWorld";
import { RenderFlag } from "renderer/IWorldRenderer";
import { Direction } from "utilities/math/Direction";
/**
 * A decorator for registering a hook method on an `IHookHost`.
 * @param priority The priority of this hook method. Defaults to `HookPriority.Normal`
 *
 * Example Usage:
 * ```ts
 * @HookMethod(HookPriority.High)
 * public onGameStart(isLoadingSave: boolean) {
 * 	console.log("hello world!");
 * }
 * ```
 */
export declare function HookMethod(priority: number): <K extends keyof IHookHost>(hook: IHookHost, property: K, descriptor: TypedPropertyDescriptor<Exclude<IHookHost[K], undefined>>) => void;
/**
 * A decorator for registering a hook method on a `IHookHost`.
 * Uses `HookPriority.Normal`
 *
 * Example Usage:
 * ```ts
 * @HookMethod
 * public onGameStart(isLoadingSave: boolean) {
 * 	console.log("hello world!");
 * }
 * ```
 */
export declare function HookMethod<K extends keyof IHookHost>(host: IHookHost, property: K, descriptor: TypedPropertyDescriptor<Exclude<IHookHost[K], undefined>>): void;
export declare const SYMBOL_HOOKS: unique symbol;
export declare const SYMBOL_HOST_NAME: unique symbol;
export declare module IHookHost {
    function createHost(obj: IHookHost): IHookHost;
}
export interface IHookHost {
    [SYMBOL_HOOKS]?: {
        [hook in Hook]?: number;
    };
    [SYMBOL_HOST_NAME]?: string[];
    /**
     * Called when something is built on a tile
     * @param human The human object
     * @param item The item used to build the object
     * @param tile The tile something was built on
     * @param doodad The doodad that was created on the tile
     */
    onBuild?(human: Human, item: Item, tile: ITile, doodad: Doodad): void;
    /**
     * Called when an item is crafted
     * @param human The human object
     * @param item The item that was crafted
     */
    onCraft?(human: Human, item: Item): void;
    /**
     * Called right after the world is created, but before the renderer
     * @param world The world object
     */
    onCreateWorld?(world: IWorld): void;
    /**
     * Called when a message is displayed to the player
     * @param player The player object
     * @param message The message data
     */
    onDisplayMessage?(player: Player, message: IMessage): void;
    /**
     * Called when a doodad spawns
     * @param doodad The doodad object
     */
    onDoodadSpawn?(doodad: Doodad): void;
    /**
     * Called when the game is starting
     * @param isLoadingSave True if a save game was loaded
     * @param playedCount The number of times the player has played the game (globally, not per slot)
     */
    onGameStart?(isLoadingSave: boolean, playedCount: number): void;
    /**
     * Called when the game tick starts
     */
    onGameTickStart?(): void;
    /**
     * Called when the game tick ends
     */
    onGameTickEnd?(): void;
    /**
     * Called when an entity is killed by another entity.
     */
    onEntityKill?(attacker: Entity | Doodad, target: Entity): void;
    /**
     * Called when a human's skill changes.
     * @param human The human whose skill changed
     * @param skill The skill that changed
     * @param currentSkill The new value of the skill
     */
    onHumanSkillChange?(human: Human, skill: SkillType, currentSkill: number): void;
    /**
     * Called when a craft is "requested". This currently happens when clicking an item in the crafting dialog.
     * @param requirementsMet Whether the requirements are currently met. This hook is a `reduce` hook, so this will contain
     * whatever the result of the last hook host was, or the value of `checker.requirementsMet()`, by default.
     * @param item The item to be crafted.
     * @param checker The recipe requirement checker for this craft.
     */
    shouldCraft?(requirementsMet: boolean, item: ItemType, checker: ItemRecipeRequirementChecker): boolean | undefined;
    /**
     * Called when an item is damaged
     * @param player The player object
     * @param item The item being damaged
     * @param modifier The damage modifier
     * @returns The amount of damage the item shouldd take or undefined to use the default logic
     */
    onItemDamage?(item: Item, modifier?: number): number | undefined;
    /**
     * Called when the player equips an item to a slot
     * @param player The player object
     * @param item The item being equipped
     * @param slot The slot
     */
    onItemEquip?(player: Player, item: Item, slot: EquipType): void;
    /**
     * Called when the player quickslots an item
     * @param item The item being quickslotted
     * @param player The player object
     * @param quickSlot The quickslot number
     */
    onItemQuickslot?(item: Item, player: Player, quickSlot: number | undefined): void;
    /**
     * Called when a creature is damaged
     * @param creature The creature object
     * @param damageInfo The damage info object
     * @returns The amount of damage the creature should take (the creature will take this damage) or undefined to use the default logic
     */
    onCreatureDamage?(creature: Creature, damageInfo: IDamageInfo): number | undefined;
    /**
     * Called when a creature dies
     * @param creature The creature object
     */
    onCreatureDeath?(creature: Creature): void;
    /**
     * Called when a creature spawns
     * @param creature The creature object
     */
    onCreatureSpawn?(creature: Creature): void;
    /**
     * Called when a creature becomes tamed
     * @param creature The creature object
     * @param owner The human which the creature is tamed for
     */
    onCreatureTamed?(creature: Creature, owner: Player): void;
    /**
     * Called when the language is changed
     * @param languageName The name of the newly selected language
     */
    onLanguageChange?(languageName: string): void;
    /**
     * Called when the player is moving
     * @param player The player object
     * @param nextX The x position the player is moving to
     * @param nextY The y position the player is moving to
     * @param tile The tile the player is moving to
     * @param direction The direction the player is facing
     * @returns False to cancel the move or undefined to use the default logic
     */
    onMove?(player: Player, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    /**
     * Called when the human faces a different direction
     * @param human The human object
     * @param direction The direction the player is now facing
     */
    onMoveDirectionUpdate?(human: Human, direction: Direction): void;
    /**
     * Called when an npc is damaged
     * @param npc The npc object
     * @param damageInfo The damage info object
     * @returns The amount of damage the npc should take (the npc will take this damage) or undefined to use the default logic
     */
    onNPCDamage?(npc: NPC, damageInfo: IDamageInfo): number | undefined;
    /**
     * Called when an npc is killed
     * @param player The npc object
     * @returns False to stop the npc from dying or undefined to use the default logic
     */
    onNPCDeath?(npc: NPC): boolean | undefined;
    /**
     * Called when an npc spawns
     * @param npc The npc object
     */
    onNPCSpawn?(npc: NPC): void;
    /**
     * Called when a book is opened by a player
     * @param human The human that opened a book
     * @param book The book that was opened
     */
    onOpenBook?(human: Human, book: BookType): void;
    /**
     * Called when an doodad is picked up
     * @param player The player object
     * @param doodad The doodad object
     */
    onPickupDoodad?(player: Player, doodad: Doodad): void;
    /**
     * Called when a player joins the server
     * @param player The player object
     */
    onPlayerJoin?(player: Player): void;
    /**
     * Called when a player leaves the server
     * Note: This hook is not called for the player who left the server (player will never be localPlayer)
     * @param player The player object
     */
    onPlayerLeave?(player: Player): void;
    /**
     * Called when a sound effect is queued
     * @param type The sound effect type
     * @param x The x location in the world for the effect
     * @param y The y location in the world for the effect
     * @param z The z location in the world for the effect
     * @returns False to cancel the sound effect, a sound effect to play instead of the given one, or undefined to use the default logic
     */
    onQueueSoundEffect?(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    /**
     * Called when the game screen becomes visible. Messages sent before this point will not be displayed.
     */
    onGameScreenVisible?(): void;
    /**
     * Called when rendering the overlay
     * @param spriteBatch The overlay sprite batch
     */
    onRenderOverlay?(spriteBatch: ISpriteBatch): void;
    /**
     * Called when a player sails to civilization.
     * @param player The player that sailed to civilization
     */
    onSailToCivilization?(player: Player): void;
    /**
     * Called when a creature is spawned from a creature group
     * @param creatureGroup The creature group
     * @param creaturePool The pool of creatures that can be spawned
     * @param x The x position to spawn the creature
     * @param y The y position to spawn the creature
     * @param z The z position to spawn the creature
     * @returns False to cancel spawning the creature or undefined to use the default logic
     */
    onSpawnCreatureFromGroup?(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    /**
     * Called when a turn is ending
     * @param player The player object
     */
    onTurnEnd?(player: Player): void;
    /**
     * Called when a turn is starting
     * @param player The player object
     */
    onTurnStart?(player: Player): void;
    /**
     * Called when the players weight is being updated
     * @param player The player object
     * @param newWeight The new weight of the player
     * @returns A number to set the player weight to or undefined to use the default logic
     */
    onUpdateWeight?(player: Player, newWeight: number): number | undefined;
    /**
     * Called after an action has been executed
     * This is called after the action result is used
     */
    postExecuteAction?(api: IActionApi, action: IActionDescription, args: any[]): void;
    /**
     * Called after the field of view has initialized
     */
    postFieldOfView?(): void;
    /**
     * Called after the world is generating
     * @param generateNewWorld True if a new world is being generated
     */
    postGenerateWorld?(generateNewWorld: boolean): void;
    /**
     * Called after rendering everything
     */
    postRender?(): void;
    /**
     * Caller after post processing the world render
     */
    postRenderPostProcess?(): void;
    /**
     * Caller after rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    postRenderWorld?(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Called before an action is executed
     * This is called before the action result is used
     * @returns False to cancel the action or undefined to use the default logic
     */
    preExecuteAction?(api: IActionApi, action: IActionDescription, args: any[]): boolean | undefined;
    /**
     * Called before loading world differences
     * Loading differences involving setting up corpses, creatures, doodads, and related things onto the world
     * @param generateNewWorld True if a new world is being generated
     */
    preLoadWorldDifferences?(generateNewWorld: boolean): void;
    /**
     * Called before a command is executed
     * @param player The player object
     * @param command The command
     * @param args The arguments
     * @returns False to cancel the command or undefined to use the default logic
     */
    preExecuteCommand?(player: Player, command: Command, args: string | undefined): boolean | undefined;
    /**
     * Called before rendering everything
     */
    preRender?(): void;
    /**
     * Caller before post processing the world render
     */
    preRenderPostProcess?(): void;
    /**
     * Called before rendering the world
     * @param tileScale The tile scale
     * @param viewWidth The width of the view port
     * @param viewHeight The height of the view port
     */
    preRenderWorld?(tileScale: number, viewWidth: number, viewHeight: number): void;
    /**
     * Called when input is being processed
     * @param player The player object
     * @returns False to prevent input processing or undefined to use the default logic
     */
    processInput?(player: Player): boolean | undefined;
    /**
     * Called when different object types are rendered
     * @returns A bitwise list of render flags or undefined to use the default logic
     */
    shouldRender?(): RenderFlag | undefined;
    /**
     * Called when a message is about to be displayed
     * @param player The player object
     * @param message The message that will be displayed
     * @param messageId The `Message`, or `-1` if the message being displayed isn't a `Message`
     * @returns False to not display the message or undefined to use the default logic
     */
    shouldDisplayMessage?(player: Player, message: IMessage, messageId: number): boolean | undefined;
}
