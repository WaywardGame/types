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
import type { CreatureAttackOutcome, CreatureType, ICreatureAttackOutcomeAttack, ICreatureDescription, ICreatureEvents, IDamageInfo, IHitch } from "game/entity/creature/ICreature";
import EntityWithStats from "game/entity/EntityWithStats";
import type Human from "game/entity/Human";
import type { IEntityConstructorOptions, IStatChangeInfo } from "game/entity/IEntity";
import { AiType, Defense, EntityType, MoveType } from "game/entity/IEntity";
import type { IStat } from "game/entity/IStats";
import type { IMovementTime } from "game/IGame";
import { TileUpdateType } from "game/IGame";
import type { IObject } from "game/IObject";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import Translation from "language/Translation";
import type { IUnserializedCallback } from "save/serializer/ISerializer";
import { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
export default class Creature extends EntityWithStats<ICreatureDescription, CreatureType> implements IUnserializedCallback, IObject<CreatureType> {
    static is(value: any): value is Creature;
    get entityType(): EntityType.Creature;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, ICreatureEvents>;
    anim: number;
    direction: Vector2;
    facingDirection: Direction.Cardinal;
    fromX: number;
    fromY: number;
    ai: AiType;
    aberrant?: true;
    enemy?: {
        type: EntityType;
        id: number;
        attacks: number;
        attempts: number;
        breakAway?: boolean;
    };
    hitchedTo?: number;
    originalMoveType?: MoveType;
    owner?: {
        type: EntityType.Player;
        identifier: string;
    } | {
        type: EntityType.NPC;
        id: number;
    };
    respawned?: number;
    shouldSkipNextUpdate?: true;
    tameTime?: number;
    spawnAnimationTime: IMovementTime | undefined;
    constructor(entityOptions?: IEntityConstructorOptions<CreatureType>, aberrant?: boolean);
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
    getName(article?: false | "definite" | "indefinite", count?: number): Translation;
    protected getDescription(): ICreatureDescription | undefined;
    hasAi(aiType: AiType): boolean;
    isHidden(): boolean;
    isRetaliator(): boolean;
    isTamed(): boolean;
    isValid(): boolean;
    getCommandedAiType(): AiType | undefined;
    getDefense(human?: Human): Defense;
    /**
     * Check is a creature is allowed to attack the target (rules of engagement)
     * @param target Target thing to attack
     * @returns True if it can attack them
     */
    canTarget(target: Human | Creature | undefined): boolean;
    moveToIsland(targetTile: Tile, owner: Human): void;
    restore(targetTile: Tile, preventRendering?: boolean): void;
    overrideNextMovement(tile: Tile): void;
    preventNextMovement(): void;
    checkForBurn(moveType?: MoveType): boolean;
    private setOwner;
    tame(human: Human, bonus?: number): boolean;
    increaseTamedCount(): void;
    release(remainTamed?: boolean): boolean;
    unhitch(): void;
    animateSpawn(): void;
    /**
     * Gets the enemy the creature marked
     * @returns Enemy
     */
    getEnemy(): Human | Creature | undefined;
    setEnemy(enemy: Human | Creature | undefined): void;
    skipNextUpdate(): void;
    getMoveType(): MoveType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    update(playingHumans: Human[]): boolean;
    private determineEnemy;
    /**
     * Checks under the creature for getting burned, setting off traps, eating items off the ground, and more
     * @returns Returns whether the creature can keep moving (in the case of creatures with >= 2 speed)
     */
    checkUnder(x?: number, y?: number, skipParticles?: boolean): boolean;
    /**
     * Check if this creature can swap with the player in the event that the player is moving into them
     * @param human Human object
     * @param source Source string. Set to undefined if this is being called from the clientside
     */
    canSwapWith(human: Human, source: string | undefined): boolean;
    getOwner(): Human | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    damage(damageInfo: IDamageInfo, creatureX?: number, creatureY?: number, creatureZ?: number): number | undefined;
    offer(items: Item[]): Item | undefined;
    processSpecialAbilities(enemy: Human | Creature | undefined, bypass?: boolean): boolean;
    increaseWaste(item: Item): void;
    onUnserialized(): void;
    /**
     * Updates the DoodadOverHidden tile flag if the creature is large.
     * Large creatures should render over the doodad over layer, which means we should hide the doodad over layer for doodads on the creatures tile.
     */
    updateDoodadOverHiddenState(tile: Tile, shouldBeHidden: boolean): void;
    getAttackOutcome(enemy: Human | Creature | undefined, force: true, humans?: Human[], description?: ICreatureDescription, moveType?: MoveType): ICreatureAttackOutcomeAttack;
    getAttackOutcome(enemy: Human | Creature | undefined, force?: boolean, humans?: Human[], description?: ICreatureDescription, moveType?: MoveType): CreatureAttackOutcome;
    processAttack(description: ICreatureDescription, humans: Human[], moveType: MoveType | undefined, enemyIn: Human | Creature | undefined): boolean;
    getProducedTemperature(): number | undefined;
    protected updateDoodadOverHiddenStateForCurrentTile(hidden?: boolean): void;
    protected updateTile(fromTile: Tile, toTile: Tile): boolean;
    protected onStatChange(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    findPath(target: Tile, maxNodesChecked?: number, ignoreHuman?: Human): Tile[] | undefined;
    getHitchingPostsAround(): IHitch;
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
    checkCreatureMove(isClientside: boolean, tile: Tile, moveType: MoveType, willMove: boolean, ignoreHuman?: Human, ignoreScareCrow?: boolean): number;
    /**
     * Returns the times a creature has been tamed.
     * @returns number if the creature has been tamed and undefined if it has never been tamed.
     */
    timesTamed(): number | undefined;
    private findHumansWithinRadius;
    private shouldSpecialAttack;
    private specialAttack;
    private processMovement;
    /**
     * Some creatures can break doodads, leading to lost rest or sleep when near them
     * @param doodad The doodad to damage
     * @param moveType The move type of the creature attempting to break the doodad
     */
    private breakDoodad;
    /**
     * Some (untamed) creatures can break items on the ground as they move into them.
     * @param tile The tile to check for items to damage.
     * @param moveType The move type of the creature attempting to break items.
     */
    private breakItems;
    private processAiChanges;
    get asCorpse(): undefined;
    get asCreature(): Creature;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get point(): IVector3;
    get tile(): Tile;
}
