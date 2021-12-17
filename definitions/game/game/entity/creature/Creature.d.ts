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
import { SfxType } from "audio/IAudio";
import type { IEventEmitter } from "event/EventEmitter";
import type { ICreatureDescription, ICreatureEvents, IDamageInfo } from "game/entity/creature/ICreature";
import { CreatureType } from "game/entity/creature/ICreature";
import Entity from "game/entity/Entity";
import type { IStatChangeInfo } from "game/entity/IEntity";
import { AiType, EntityType, MoveType, StatusType } from "game/entity/IEntity";
import type { IStat } from "game/entity/IStats";
import type Player from "game/entity/player/Player";
import type { CreationId } from "game/IGame";
import type { IObject } from "game/IObject";
import type Item from "game/item/Item";
import type { ITile } from "game/tile/ITerrain";
import Translation from "language/Translation";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import type { IVector2 } from "utilities/math/IVector";
export default class Creature extends Entity implements IUnserializedCallback, IObject<CreatureType> {
    static is(value: any): value is Creature;
    readonly objectType: CreationId.Creature;
    event: IEventEmitter<this, ICreatureEvents>;
    readonly entityType: EntityType.Creature;
    aberrant?: boolean;
    ai: AiType;
    enemy?: number;
    enemyAttempts?: number;
    enemyAttacks?: number;
    enemyIsPlayer?: boolean;
    respawned?: boolean;
    shouldSkipNextUpdate: boolean;
    type: CreatureType;
    originalMoveType: MoveType | undefined;
    hitchedTo?: number;
    private _description;
    constructor(creatureType?: CreatureType, islandId?: `${number},${number}`, x?: number, y?: number, z?: number, aberrant?: boolean);
    /**
     * Initializes the creature's stats. Used in the constructor & save conversion.
     */
    initializeStats(hp: number, maxhp?: number): void;
    /**
     * @param article Whether to include an article for the name of the creature. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this creature that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `creature.getName()` // "an acid spitter demon"
     * - `creature.getName(false)` // "acid spitter demon"
     * - `creature.getName(undefined, 3)` // "acid spitter demons"
     */
    getName(article?: boolean, count?: number): Translation;
    description(): ICreatureDescription | undefined;
    hasAi(aiType: AiType): boolean;
    isHidden(): boolean;
    isDefender(): boolean;
    isTamed(): boolean;
    isValid(): boolean;
    preventNextMovement(): void;
    checkForBurn(moveType?: MoveType): boolean;
    tame(player: Player, bonus?: number): boolean;
    increaseTamedCount(): void;
    release(): boolean;
    unhitch(): void;
    skipNextUpdate(): void;
    getMoveType(): MoveType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    update(realPlayers: Player[]): boolean;
    /**
     * Checks under the creature for getting burned, setting off traps, eating items off the ground, and more
     * @returns Returns whether the creature can keep moving (in the case of creatures with >= 2 speed)
     */
    checkUnder(x?: number, y?: number): boolean;
    /**
     * Check if this creature can swap with the player in the event that the player is moving into them
     * @param player Player object
     * @param source Source string. Set to undefined if this is being called from the clientside
     */
    canSwapWith(player: Player, source: string | undefined): boolean;
    getOwner(): Player | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    damage(damageInfo: IDamageInfo, creatureX?: number, creatureY?: number, creatureZ?: number): number | undefined;
    offer(items: Item[]): Item | undefined;
    processSpecialAbilities(enemy: Player | Creature | undefined, bypass?: boolean): boolean;
    increaseWaste(item: Item): void;
    onUnserialized(): void;
    /**
     * Updates the DoodadOverHidden tile flag if the creature is large.
     * Large creatures should render over the doodad over layer, which means we should hide the doodad over layer for doodads on the creatures tile.
     */
    updateDoodadOverHiddenState(x: number, y: number, z: number, tile: ITile, shouldBeHidden: boolean): void;
    processAttack(realPlayers: Player[], description: ICreatureDescription, moveType: MoveType, enemy: Player | Creature | undefined): boolean;
    getProducedTemperature(): number | undefined;
    protected getApplicableStatusEffects(): Set<StatusType>;
    protected updateDoodadOverHiddenStateForCurrentTile(hidden?: boolean): void;
    protected preMove(fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile): boolean | void | undefined;
    protected onStatChange(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    findPath(target: IVector2, maxNodesChecked?: number, ignorePlayer?: Player): IVector2[] | undefined;
    /**
     * Check creature move with a multiplayer sync check
     * @param source Provided when the check is running in a sync environment (NOT CLIENTSIDE)
     * @param willMove Set to true if the object is about to move to this tile. This method will confirm if theres an existing npc/creature there and return false if so
     * @returns 0 if the creature can move, otherwise an error code
     */
    private checkCreatureMoveSafe;
    /**
     * Checks that a creature can move to a certain tile and/or interact with doodads/tiles
     * @param isClientside True if clientside. Don't do random stuff in this case
     * @param willMove Set to true if the object is about to move to this tile. This method will confirm if theres an existing npc/creature there and return false if so
     * @returns 0 if the creature can move, otherwise an error code
     */
    private checkCreatureMove;
    private findPlayersWithinRadius;
    private shouldSpecialAttack;
    private specialAttack;
    private processMovement;
    /**
     * Some creatures can break doodads, leading to lost rest or sleep when near them
     * @param doodad The doodad to damage
     * @param moveType The move type of the creature attempting to break the doodad
     */
    private breakDoodad;
    private processAiChanges;
    get asCreature(): Creature;
    get asHuman(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asLocalPlayer(): undefined;
}
