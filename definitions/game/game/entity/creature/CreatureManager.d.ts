/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import CombatStrengthManager from "@wayward/game/game/entity/CombatStrengthManager";
import Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureCheckMoveOptions } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType, TileGroup } from "@wayward/game/game/entity/creature/ICreature";
import EntityManager from "@wayward/game/game/entity/EntityManager";
import type Human from "@wayward/game/game/entity/Human";
import { MoveType } from "@wayward/game/game/entity/IEntity";
import Tile from "@wayward/game/game/tile/Tile";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { Article } from "@wayward/game/language/Translation";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface ICreatureManagerEvents extends Events<EntityManager<Creature>> {
    /**
     * Called when a creature is about to be spawned
     * @param type The type of creature
     * @param tile The tile where the creature will be spawned
     * @param aberrant True if the creature is an aberrant
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: CreatureType, tile: Tile, aberrant: boolean): boolean | undefined;
}
export default class CreatureManager extends EntityManager<Creature, {
    remainTamed?: boolean;
}> {
    protected readonly name = "CreatureManager";
    event: IEventEmitter<this, ICreatureManagerEvents>;
    static combatStrength: CombatStrengthManager;
    get combatStrength(): CombatStrengthManager;
    static generateLookups(): void;
    loadEntity(creature: Creature): void;
    static getName(creature: Creature | CreatureType, aberrant?: boolean, count?: number, article?: Article): TranslationImpl;
    getName(creature: Creature | CreatureType, aberrant?: boolean, count?: number, article?: Article): TranslationImpl;
    getHappinessLevel(human: Human, creature: Creature, bonus?: number): number;
    /**
     * Spawns a creature.
     * @param type The type of creature to spawn.
     * @param tile The tile
     * @param bypass Whether to bypass checks for whether the creature can spawn there naturally. Defaults to false, if the creature can't spawn naturally, it won't.
     * @param forceAberrant If provided, forces the spawned creature's aberrant state to be the passed boolean. True = aberrant, false = not aberrant. If not provided, the aberrant state is decided based on chance.
     * @param spawnTiles If set, this will overwrite the creature's description for which tiles it can spawn on
     * @param bypassCreatureLimit If set, the creature limit will be ignored and spawn the creature over the set limit
     */
    spawn(type: CreatureType, tile: Tile, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: TileGroup, bypassCreatureLimit?: boolean): Creature | undefined;
    spawnFromZone(tile: Tile, bypassCreatureLimit?: boolean, checkTerrainType?: boolean): Creature | undefined;
    createFake(type: CreatureType, aberrant: boolean, tile?: Tile, id?: number): Creature;
    exists(creature: Creature): boolean;
    maybeSpawnClawWorm(target: Human | Creature): void;
    /**
     * Maybe spawns a Dryad based on target's skill, zone tier, plants around target, and chance.
     * @param target Human that we check around to find a suitable spawn.
     */
    maybeSpawnDryad(target: Human): void;
    protected onRemove(creature: Creature, options?: {
        remainTamed?: boolean;
    }): boolean;
    updateAll(playingHumans: Human[]): void;
    /**
     * getMovePenalty
     * @param willMove Set to true if the object is about to move to this tile. This method will confirm if there's an existing npc/creature there and return false if so
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: Tile, willMove: boolean, options?: Partial<ICreatureCheckMoveOptions>, creature?: Creature): number;
    /**
     * wasm calls this when calculating penalties for flow fields
     */
    getMovePenaltyFromWasm(moveType: MoveType, x: number, y: number, z: number): number;
    spawnGuardians(position: IVector3, amount: number): number;
    static list: import("../../../language/utility/TranslationListBuilder").ITranslationListBuilder<Creature, CreatureType, boolean>;
    list: import("../../../language/utility/TranslationListBuilder").ITranslationListBuilder<Creature, CreatureType, boolean>;
}
