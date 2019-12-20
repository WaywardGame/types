/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { SfxType } from "audio/IAudio";
import { CreatureType, ICreatureDescription, ICreatureEvents, IDamageInfo } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import { AiType, EntityType, IStatChangeInfo, MoveType } from "entity/IEntity";
import { IStat } from "entity/IStats";
import Player from "entity/player/Player";
import { IEventEmitter } from "event/EventEmitter";
import Inspection from "game/inspection/Inspect";
import { InspectionSection, IInspectable } from "game/inspection/Inspections";
import { IObject } from "game/IObject";
import Item from "item/Item";
import Translation from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export default class Creature extends Entity implements IUnserializedCallback, IObject<CreatureType>, IInspectable {
    event: IEventEmitter<this, ICreatureEvents>;
    readonly entityType: EntityType.Creature;
    aberrant?: boolean;
    ai: AiType;
    enemy?: number;
    enemyAttempts?: number;
    enemyIsPlayer?: boolean;
    respawned?: boolean;
    shouldSkipNextUpdate: boolean;
    type: CreatureType;
    originalMoveType: MoveType | undefined;
    hitchedTo?: number;
    get fromDescription(): import("../../utilities/FromDescription").ISafeFn<ICreatureDescription, undefined>;
    private _description;
    private _owner;
    constructor(creatureType?: CreatureType, x?: number, y?: number, z?: number, aberrant?: boolean);
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
    inspect({ inspector, context, inspectEntityHealth }: Inspection, section: InspectionSection): void;
    hasAi(aiType: AiType): boolean;
    isHidden(): boolean;
    isDefender(): boolean;
    isTamed(): boolean;
    isValid(): boolean;
    preventNextMovement(): void;
    checkForBurn(moveType?: MoveType): boolean;
    tame(player: Player): boolean;
    increaseTamedCount(): void;
    release(): boolean;
    skipNextUpdate(): void;
    getMoveType(): MoveType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    update(): boolean;
    /**
     * Checks under the creature for getting burned, setting off traps, eating items off the ground, and more
     * @returns Returns whether the creature can keep moving (in the case of creatures with >= 2 speed)
     */
    checkUnder(x?: number, y?: number): boolean;
    canSwapWith(player: Player): boolean;
    getOwner(): Player | undefined;
    damage(damageInfo: IDamageInfo, creatureX?: number, creatureY?: number, creatureZ?: number): number | undefined;
    offer(items: Item[]): Item | undefined;
    processSpecialAbilities(enemy: Player | Creature | undefined, bypass?: boolean): boolean;
    increaseWaste(item: Item): void;
    onUnserialized(): void;
    /**
     * Updates the DoodadOverHidden tile flag if the creature is large
     * large creatures should render over the doodad over layer
     * which means we should hide the doodad over layer for doodads on the creature
     */
    updateDoodadOverHiddenState(x: number, y: number, z: number, tile: ITile, hidden: boolean): void;
    processAttack(description: ICreatureDescription, moveType: MoveType, enemy: Player | Creature | undefined): boolean;
    protected updateDoodadOverHiddenStateForCurrentTile(hidden?: boolean): void;
    protected preMove(fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile): void;
    protected onStatChange(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    private inspectResistancesAndVulnerabilities;
    private inspectHappiness;
    private findPath;
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
}
