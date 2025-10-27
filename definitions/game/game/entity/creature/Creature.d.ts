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
import { SfxType } from "@wayward/game/audio/IAudio";
import type { IMovementTime } from "@wayward/game/game/IGame";
import { TileUpdateType } from "@wayward/game/game/IGame";
import type { IObject } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type Human from "@wayward/game/game/entity/Human";
import type { IEntityConstructorOptions, IStatChangeInfo } from "@wayward/game/game/entity/IEntity";
import { Defense, EntityType, MoveType } from "@wayward/game/game/entity/IEntity";
import type { IStat } from "@wayward/game/game/entity/IStats";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { AiType } from "@wayward/game/game/entity/ai/AI";
import AiManager from "@wayward/game/game/entity/ai/AiManager";
import type { CreatureAttackOutcome, ICreatureAttackOutcomeAttack, ICreatureCheckMoveOptions, ICreatureDescription, ICreatureEvents, IDamageInfo, IHitch } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureTag } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type { CreatureZone } from "@wayward/game/game/entity/creature/zone/CreatureZone";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import { StatusApplicability } from "@wayward/game/game/entity/status/IStatus";
import { type IUncastableContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import Translation from "@wayward/game/language/Translation";
import { Article } from "@wayward/game/language/ITranslation";
import { MarkerType } from "@wayward/game/renderer/notifier/INotifier";
import type { IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import { IRange } from "@wayward/utilities/math/Range";
export default class Creature extends EntityWithStats<ICreatureDescription, CreatureType, ReferenceType.Creature, CreatureTag> implements IUnserializedCallback, IObject<CreatureType> {
    static is(value: any): value is Creature;
    get entityType(): EntityType.Creature;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, ICreatureEvents>;
    anim: number;
    direction: Vector2;
    facingDirection: Direction.Cardinal;
    fromX: number;
    fromY: number;
    aberrant?: true;
    ai: AiManager<this>;
    enemy?: {
        reference: Reference;
        attacks: number;
        attempts: number;
        breakAway?: boolean;
    };
    hitchedTo?: number;
    originalMoveType?: MoveType;
    owner?: {
        reference: Reference;
        tameTime: number;
    };
    respawned?: number;
    zonePoint?: IVector3;
    spawnAnimationTime: IMovementTime | undefined;
    constructor(entityOptions?: IEntityConstructorOptions<CreatureType>, aberrant?: boolean);
    initializeAi(resetAiType?: boolean): void;
    /**
     * Initializes the creature's stats. Used in the constructor & save conversion.
     */
    initializeStats(hp: number, maxhp?: number): void;
    get zone(): CreatureZone | undefined;
    /**
     * @param article Whether to include an article for the name of the creature. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this creature that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `creature.getName()` // "an acid spitter demon"
     * - `creature.getName(false)` // "acid spitter demon"
     * - `creature.getName(undefined, 3)` // "acid spitter demons"
     */
    getName(article?: Article, count?: number): Translation;
    protected get typeEnum(): typeof CreatureType;
    protected getDescription(): ICreatureDescription | undefined;
    get isHostile(): boolean;
    get canAlert(): boolean;
    get isHidden(): boolean;
    get isRetaliator(): boolean;
    get isTamed(): boolean;
    get isValid(): boolean;
    getCommandedAiType(): AiType | undefined;
    protected getStatusApplicability(): StatusApplicability | undefined;
    tickStatuses(): void;
    getDefense(human?: Human): Defense;
    /**
     * Check is a creature is allowed to attack the target (rules of engagement)
     * @param target Target thing to attack
     * @returns True if it can attack them
     */
    canTarget(target: Human | Creature | undefined): boolean;
    moveToIsland(targetTile: Tile, owner: Human): void;
    restore(targetTile: Tile, preventRendering?: boolean): void;
    load(): void;
    checkForBurn(moveType?: MoveType): boolean;
    private setOwner;
    tame(human: Human, bonusTime?: number, wasByPlayerAction?: boolean): boolean;
    /**
     * Increases the creature's maximum health in the event of offering/re-taming and petting (to a lesser extent)
     */
    increaseMaxHealth(action: ActionType): void;
    /**
     * @returns The new times tamed
     */
    increaseTamedCount(): number;
    /**
     * Increases the number of times the creature has been petted.
     */
    increasePettedCount(): void;
    release(remainTamed?: boolean): boolean;
    unhitch(): void;
    animateSpawn(): void;
    /**
     * Gets the enemy the creature marked
     * @returns Enemy
     */
    getEnemy(): Human | Creature | undefined;
    setEnemy(enemy: Human | Creature | undefined): void;
    private incrementEnemyAttempts;
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
    /**
     * Called when we offer a creature an item using the "Offer" action or when a creature walks over an item to see if it tames them.
     * @param items Items to offer or check to see if they are accepted.
     * @param human Human that offered it (if not set, it's on the ground and we check for crafterIdentifier).
     * @returns The item it accepted.
     */
    offer(items: Item[], human?: Human): Item | undefined;
    processSpecialAbilities(enemy: Human | Creature | undefined, bypass?: boolean): boolean;
    increaseWaste(item: Item): void;
    onUnserialized(): void;
    getAttackOutcome(enemy: Human | Creature | undefined, force: true, humans?: Human[], description?: ICreatureDescription, moveType?: MoveType): ICreatureAttackOutcomeAttack;
    getAttackOutcome(enemy: Human | Creature | undefined, force?: boolean, humans?: Human[], description?: ICreatureDescription, moveType?: MoveType): CreatureAttackOutcome;
    processAttack(description: ICreatureDescription, humans: Human[], moveType: MoveType | undefined, enemyIn: Human | Creature | undefined): boolean;
    getProducedTemperature(): number | undefined;
    makeAberrant(): number | undefined;
    unAberrant(restoreHealth: number): boolean;
    protected updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    protected onStatChange(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    /**
     * Finds a path from the creatures tile to the target tile
     * @param source Provided when the check is running in a sync environment (NOT CLIENTSIDE)
     */
    findPath(source: string | undefined, target: Tile, moveType: MoveType, maxNodesChecked?: number, ignoreHuman?: Human): Tile[] | undefined;
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
    checkCreatureMove(isClientside: boolean, tile: Tile, moveType: MoveType, willMove: boolean, options?: Partial<ICreatureCheckMoveOptions>): number;
    /**
     * Returns the times a creature has been tamed.
     * @returns number if the creature has been tamed (0 if it has never been tamed).
     */
    get timesTamed(): number;
    /**
     * Returns the times a creature has been petted.
     * @returns number if the creature has been petted (0 if it has never been petted).
     */
    get timesPetted(): number;
    private findHumansWithinRadius;
    private shouldSpecialAttack;
    private specialAttack;
    private processMovement;
    /**
     * Actually tries to move to the tile
     * @returns True or false if a move was attempted, undefined if a move was canceled
     */
    private runMovement;
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
    private addAlertedMarker;
    /**
     * Used for offseting notifiers
     */
    getMovementOffsetY(timeStamp: number): number;
    /**
     * @returns Whether the creature has lost interest
     */
    private processAiInterest;
    getDynamicMarker(type: string): MarkerType | undefined;
    getWanderChance(defaultChance: number): number | undefined;
    getWanderIdleChance(defaultChance: number): number | undefined;
    getWanderNewDirectionChance(defaultChance: number): number | undefined;
    getWanderHomePoint(): IVector2 | undefined;
    getWanderHomeRadius(): number | undefined;
    getWanderHomePriority(): IRange | undefined;
    get asCorpse(): undefined;
    get asCreature(): Creature;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get asTile(): undefined;
    get asContainer(): undefined;
    isCorpse(): this is Corpse;
    isCreature(): this is Creature;
    isDoodad(): this is Doodad;
    isHuman(): this is Human;
    get isLocalPlayer(): boolean;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
    isTileEvent(): this is TileEvent;
    isItem(): this is Item;
    isTile(): this is Tile;
    isContainer(): this is IUncastableContainer;
    toString(): string;
    get point(): IVector3;
    get tile(): Tile;
}
