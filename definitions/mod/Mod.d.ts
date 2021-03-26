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
import "IGlobal";
import BaseMod from "mod/BaseMod";
import { IHookHost } from "mod/IHookHost";
import ISpriteBatch from "renderer/ISpriteBatch";
import IWorld from "renderer/IWorld";
import { RenderFlag } from "renderer/IWorldRenderer";
import Log from "utilities/Log";
import { Direction } from "utilities/math/Direction";
declare abstract class Mod extends BaseMod implements IHookHost {
    /**
     * Called when the mod is initialized (when it's enabled via the Mod Manager)
     */
    onInitialize(): void;
    /**
     * Called before the mod is uninitialized (when it's disabled via the Mod Manager)
     */
    onUninitialize(): void;
    /**
     * Called after the mod is uninitialized
     */
    onUninitialized(): void;
    /**
     * Called when the mod is loaded.
     * This will be called after a player starts a game (ran before resources & the world are setup)
     */
    onLoad(): void;
    /**
     * Called when the mod is unloaded
     */
    onUnload(): void;
    isPlayerSwimming(human: Human, isSwimming: boolean): boolean | undefined;
    onBuild(human: Human, item: Item, tile: ITile, doodad: Doodad): void;
    onCraft(human: Human, item: Item): void;
    onCreateWorld(world: IWorld): void;
    onDisplayMessage(player: Player, message: IMessage): void;
    shouldDisplayMessage(player: Player, message: IMessage, messageId: number): boolean | undefined;
    onDoodadSpawn(doodad: Doodad): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onGameTickStart(): void;
    onGameTickEnd(): void;
    onEntityKill(attacker: Entity | Doodad, target: Entity): void;
    onHumanSkillChange(human: Human, skill: SkillType, currentSkill: number): void;
    shouldCraft(requirementsMet: boolean, item: ItemType, checker: ItemRecipeRequirementChecker): boolean | undefined;
    onItemDamage(item: Item, modifier?: number): number | undefined;
    onItemEquip(player: Player, item: Item, slot: EquipType): void;
    onItemQuickslot(item: Item, player: Player, quickSlot: number | undefined): void;
    onCreatureDamage(creature: Creature, damageInfo: IDamageInfo): number | undefined;
    onCreatureDeath(creature: Creature): void;
    onCreatureSpawn(creature: Creature): void;
    onCreatureTamed(creature: Creature, owner: Player): void;
    onLanguageChange(languageName: string): void;
    onMove(player: Player, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    onMoveDirectionUpdate(human: Human, direction: Direction): void;
    onNPCDamage(npc: NPC, damageInfo: IDamageInfo): number | undefined;
    onNPCDeath(npc: NPC): boolean | undefined;
    onNPCSpawn(npc: NPC): void;
    onOpenBook(human: Human, book: BookType): void;
    onPickupDoodad(player: Player, doodad: Doodad): void;
    onPlayerJoin(player: Player): void;
    onPlayerLeave(player: Player): void;
    onQueueSoundEffect(type: SfxType, x: number, y: number, z: number): SfxType | boolean | undefined;
    onGameScreenVisible(): void;
    onRenderOverlay(spriteBatch: ISpriteBatch): void;
    onSailToCivilization(player: Player): void;
    onSpawnCreatureFromGroup(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
    onTurnEnd(player: Player): void;
    onTurnStart(player: Player): void;
    onUpdateWeight(player: Player, newWeight: number): number | undefined;
    postExecuteAction(api: IActionApi, action: IActionDescription, args: any[]): void;
    postFieldOfView(): void;
    postGenerateWorld(generateNewWorld: boolean): void;
    postRender(): void;
    postRenderPostProcess(): void;
    postRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    preExecuteAction(api: IActionApi, action: IActionDescription, args: any[]): boolean | undefined;
    preLoadWorldDifferences(generateNewWorld: boolean): void;
    preExecuteCommand(player: Player, command: Command, args: string | undefined): boolean | undefined;
    preRender(): void;
    preRenderPostProcess(): void;
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    processInput(player: Player): boolean | undefined;
    shouldRender(): RenderFlag | undefined;
}
declare module Mod {
    /**
     * Injects the decorated field with this mod's instance.
     */
    function instance<M extends Mod>(): <K extends string | number | symbol, T extends {
        [k in K]: M extends (new (index: number) => infer I) ? I : Mod;
    }>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod instance.
     * @param name Given a mod name, the decorated field will be injected with the enabled/loaded instance of the mod by that name.
     */
    function instance<M extends Mod>(name: string): <K extends string | number | symbol, T extends {
        [k in K]: M extends (new (index: number) => infer I) ? I : Mod;
    }>(target: T, key: K) => void;
    /**
     * Injects the decorated field with this mod's log.
     */
    function log(): <K extends string | number | symbol, T extends {
        [k in K]: Log;
    }>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod's log.
     * @param name Given a mod name, the decorated field will be injected with the log of the enabled/loaded mod by that name.
     */
    function log(name?: string): <K extends string | number | symbol, T extends {
        [k in K]: Log;
    }>(target: T, key: K) => void;
    /**
     * Injects the save data for this mod.
     */
    function saveData<M extends Mod = Mod>(): <K extends string | number | symbol, T extends {
        [k in K]: M extends {
            initializeSaveData(data?: infer D): infer D;
        } ? D : never;
    }>(target: T, key: K) => void;
    /**
     * Injects the save data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with save data from the enabled/loaded instance of
     * the mod by that name.
     */
    function saveData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends {
        [k in K]: M extends {
            initializeSaveData(data?: infer D): infer D;
        } ? D : never;
    }>(target: T, key: K) => void;
    /**
     * Injects the global data for this mod.
     */
    function globalData<M extends Mod = Mod>(): <K extends string | number | symbol, T extends {
        [k in K]: M extends {
            initializeGlobalData(data?: infer D): infer D;
        } ? D : never;
    }>(target: T, key: K) => void;
    /**
     * Injects the global data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with global data from the enabled/loaded instance of
     * the mod by that name.
     */
    function globalData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends {
        [k in K]: M extends {
            initializeGlobalData(data?: infer D): infer D;
        } ? D : never;
    }>(target: T, key: K) => void;
}
export default Mod;
