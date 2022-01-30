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
import type { Events, IEventEmitter } from "event/EventEmitter";
import Creature from "game/entity/creature/Creature";
import { CreatureType, SpawnGroup, TileGroup } from "game/entity/creature/ICreature";
import EntityManager from "game/entity/EntityManager";
import type Human from "game/entity/Human";
import { MoveType } from "game/entity/IEntity";
import type Player from "game/entity/player/Player";
import type { ITile } from "game/tile/ITerrain";
import Vector3 from "utilities/math/Vector3";
export interface ICreatureManagerEvents extends Events<EntityManager<Creature>> {
    /**
     * Called when a creature is about to be spawned
     * @param type The type of creature
     * @param x The x coordinate where the creature will be spawned
     * @param y The y coordinate where the creature will be spawned
     * @param z The z coordinate where the creature will be spawned
     * @param aberrant True if the creature is an aberrant
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
    /**
     * Called when a creature is spawned from a creature group
     * @param creatureGroup The creature group
     * @param creaturePool The pool of creatures that can be spawned
     * @param x The x position to spawn the creature
     * @param y The y position to spawn the creature
     * @param z The z position to spawn the creature
     * @returns False to cancel spawning the creature or undefined to use the default logic
     */
    shouldSpawnCreatureFromGroup(creatureGroup: SpawnGroup, creaturePool: CreatureType[], x: number, y: number, z: number): boolean | undefined;
}
export default class CreatureManager extends EntityManager<Creature> {
    readonly event: IEventEmitter<this, ICreatureManagerEvents>;
    load(): void;
    static getName(creature: Creature | CreatureType, aberrant?: boolean, count?: number, article?: boolean): import("../../../language/impl/TranslationImpl").default;
    getName(creature: Creature | CreatureType, aberrant?: boolean, count?: number, article?: boolean): import("../../../language/impl/TranslationImpl").default;
    getHappinessLevel(human: Human, creature: Creature, bonus?: number): number;
    /**
     * Spawns a creature.
     * @param creatureType The type of creature to spawn.
     * @param x The tile X position
     * @param y The tile Y position
     * @param z The tile Z position
     * @param bypass Whether to bypass checks for whether the creature can spawn there naturally. Defaults to false, if the creature can't spawn naturally, it won't.
     * @param forceAberrant If provided, forces the spawned creature's aberrant state to be the passed boolean. True = aberrant, false = not aberrant. If not provided, the aberrant state is decided based on chance.
     * @param spawnTiles If set, this will overwrite the creature's description for which tiles it can spawn on
     * @param bypassCreatureLimit If set, the creature limit will be ignored and spawn the creature over the set limit
     */
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: TileGroup, bypassCreatureLimit?: boolean): Creature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean, bypassCreatureLimit?: boolean): Creature | undefined;
    exists(creature: Creature): boolean;
    maybeSpawnClawWorm(target: Human | Creature): void;
    /**
     * Maybe spawns a Dryad based on target reputation, plants around target, and chance.
     * @param target Human that we check around to find a suitable spawn.
     */
    maybeSpawnDryad(target: Human): void;
    remove(creature: Creature): void;
    updateAll(realPlayers: Player[]): void;
    /**
     * getMovePenalty
     * @param willMove Set to true if the object is about to move to this tile. This method will confirm if theres an existing npc/creature there and return false if so
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: ITile, willMove: boolean, ignoreHuman?: Human): number;
    /**
     * wasm calls this when calculating penalties for flow fields
     */
    getMovePenaltyFromWasm(moveType: MoveType, x: number, y: number, z: number): number;
    getSpawnableCreatures(creatureGroup: SpawnGroup, z: number, reputation?: number, time?: number): {
        pool: CreatureType[];
        aberrantChance: number;
    };
    spawnGuardians(position: Vector3, amount: number): number;
    private getReputationAberrantBonus;
}
