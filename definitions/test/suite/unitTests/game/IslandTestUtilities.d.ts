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
import type { ITemplateBiomeOptions } from "@wayward/game/game/biome/template/Template";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { ActionType, IActionApi } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
import type { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { Quality } from "@wayward/game/game/IObject";
import type { INewIslandOverrides, IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { TestRunContext } from "@wayward/test/testRunner";
import WorldZ from "@wayward/utilities/game/WorldZ";
export declare namespace IslandTestUtilities {
    let human: Human;
    let island: Island;
    const defaultTemplateBiomeOptions: ITemplateBiomeOptions;
    const defaultNewIslandOverides: Partial<INewIslandOverrides>;
    function before(context: TestRunContext): Promise<void>;
    function after(context: TestRunContext): Promise<void>;
    function waitForMovementCompletion(context: TestRunContext): Promise<void>;
    function moveToIsland(islandId: IslandId, newIslandOverrides?: Partial<INewIslandOverrides>, extraTravelTime?: number): Promise<void>;
    function moveToNewIsland(newIslandOverrides?: Partial<INewIslandOverrides>): Promise<void>;
    function teleportAndFaceTargetTile(isTargetTile: (tile: Tile) => boolean): void;
    /**
     * Clear / reset the the state of the player/world
     */
    function beforeEach(context: TestRunContext, shouldMoveToNewIsland?: boolean): Promise<void>;
    function createItems(...items: Array<ItemType | ItemTypeGroup>): Item[];
    function createDoodad(doodadType: DoodadType): Doodad;
    function createCreature(creatureType: CreatureType, z?: WorldZ): Creature;
    function createNPC(npcType: NPCType, z?: WorldZ): NPC;
    function onPostExecuteAction(_: any, actionType: ActionType, api: IActionApi, args: any[]): void;
    function onGetFastForwardAmount(_: any, defaultFastForwardAmount: number): number;
    /**
     * update the tile to act like it was worldgen'd to some type / quality
     */
    function updateToWorldGenTile(tile: Tile, type: TerrainType, quality: Quality): void;
}
