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
import DoodadInfo from "doodad/DoodadInfo";
import { DoodadType, DoodadTypeGroup, DoorOrientation, GrowingStage, IDoodadDescription, IDoodadOptions } from "doodad/IDoodad";
import { ActionType } from "entity/action/IAction";
import Creature from "entity/creature/Creature";
import Human from "entity/Human";
import { EquipType } from "entity/IHuman";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import Inspection from "game/inspection/Inspect";
import { InspectionSection, IInspectable } from "game/inspection/Inspections";
import { IObject, Quality } from "game/IObject";
import { ItemType, IContainer, IItemLegendary } from "item/IItem";
import Item from "item/Item";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IUnserializedCallback } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export interface IDoodadEvents {
    /**
     * Called when an doodad is being picked up
     * @param human The human object
     * @returns False if the doodad cannot be picked up, or undefined to use the default logic
     */
    canPickup(human: Human): boolean | undefined;
}
export default class Doodad extends EventEmitter.Host<IDoodadEvents> implements Doodad, IUnserializedCallback, IInspectable, IObject<DoodadType>, IDoodadOptions, IVector3, Partial<IContainer>, IInspectable {
    static is(value: any): value is Doodad;
    /**
     * @deprecated
     */
    static getGrowingStageTranslation(growingStage?: GrowingStage, description?: IDoodadDescription): Translation | undefined;
    protected static registrarId: number;
    get constructorFunction(): typeof Doodad;
    containedItems: Item[];
    decay?: number;
    disassembly?: Item[];
    gatherReady?: number;
    stillContainer?: Item;
    gfx?: number;
    id: number;
    itemOrders?: number[];
    maxDur: number;
    minDur: number;
    orientation?: DoorOrientation;
    ownerIdentifier?: string;
    quality?: Quality;
    renamed?: string | ISerializedTranslation;
    spread?: number;
    treasure?: boolean;
    type: DoodadType;
    weight?: number;
    weightCapacity: number;
    x: number;
    y: number;
    z: number;
    legendary?: IItemLegendary | undefined;
    step: number | undefined;
    hitchedCreature?: number;
    tradedFrom?: string[];
    aberrant?: boolean;
    private _description;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(type?: DoodadType, x?: number, y?: number, z?: number, options?: IDoodadOptions);
    toString(): string;
    getRegistrarId(): number;
    /**
     * @param article Whether to include an article for the name of the doodad. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this doodad that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `doodad.getName()` // "a stone furnace"
     * - `doodad.getName(false)` // "stone furnace"
     * - `doodad.getName(undefined, 3)` // "stone furnaces"
     */
    getName(article?: boolean, count?: number): Translation;
    description(): IDoodadDescription | undefined;
    /**
     * @deprecated
     */
    inspect({ context, inspectFire }: Inspection, section: InspectionSection): void;
    changeType(doodadType: DoodadType): void;
    isValid(): boolean;
    getTile(): ITile;
    getPoint(): IVector3;
    isInGroup(doodadGroup: DoodadTypeGroup | DoodadType): boolean;
    canGrow(): boolean;
    getGrowingStage(): GrowingStage | undefined;
    setGrowingStage(stage: GrowingStage, updateTile?: boolean): void;
    canPickup(human: Human): boolean;
    getPickupTypes(): ItemType[] | undefined;
    getActions(): ActionType[] | undefined;
    /**
     * Can the doodad be gathered from in its current form?
     */
    canGather(): boolean;
    /**
     * Can the doodad be gathered from at all?
     */
    isGatherable(): boolean;
    isEmbers(): boolean;
    getDoodadInfo(): DoodadInfo | undefined;
    canHarvest(): boolean;
    /**
     * Returns whether the doodad can be trampled
     */
    canTrample(): boolean | undefined;
    checkForTrampling(source: Human | Creature): boolean;
    isDangerous(human: Human): boolean;
    getDamage(human: Human, equipType?: EquipType): number;
    getOwner(): Player | undefined;
    damage(forceBreak?: boolean, skipDropAsItem?: boolean, skipSound?: boolean, skipResources?: boolean): void;
    getDefaultDurability(): number;
    addTreasureChestLoot(): void;
    blocksMove(): boolean;
    update(): void;
    canCauseStatus(): boolean;
    setOffTrap(human?: Human, withMessage?: boolean): void;
    getGrowthParticles(): IRGB | undefined;
    increaseFertility(): boolean;
    /**
     * Return extra trap damage based on player multiplier and legendary status
     */
    getTrapDamageBonus(baseDamage: number, human?: Human): number;
    /**
     * Keep our wells up-to-date with what is happening underground
     */
    setWellStatus(): void;
    onUnserialized(): void;
    /**
     * @deprecated
     */
    protected getNameTranslation(article?: boolean, count?: number): Translation;
    /**
     * @deprecated
     */
    protected getDescriptionTranslation(): Translation;
    /**
     * @deprecated
     */
    private inspectGrowth;
    /**
     * @deprecated
     */
    private inspectFertility;
    /**
     * @deprecated
     */
    private inspectDurability;
    /**
     * @deprecated
     */
    private inspectPreservation;
    private processSpecials;
    /**
     * Check for items on top of lit/fire doodads, set them on fire
     */
    private processFire;
    /**
     * Fill wells back up randomly (simulating rain)
     */
    private processWell;
    /**
     * Spread the doodad around the world
     */
    private processSpread;
    /**
     * Regenerate (heal durability) over time
     */
    private processRegeneration;
    /**
     * Decay over time
     */
    private processDecay;
    private animateSkeletalRemains;
}
