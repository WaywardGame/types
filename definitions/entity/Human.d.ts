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
import Doodad from "doodad/Doodad";
import { IDamageInfo } from "entity/creature/ICreature";
import Entity from "entity/Entity";
import { ICausesDamage } from "entity/IEntity";
import { EquipType, ICheckUnderOptions, ICrafted, ICustomizations, IHumanEvents, IRestData, RestCancelReason, SkillType } from "entity/IHuman";
import { Stat } from "entity/IStats";
import { IAttackHand, IMobCheck, PlayerState } from "entity/player/IPlayer";
import PlayerDefense from "entity/player/PlayerDefense";
import SkillManager from "entity/skill/SkillManager";
import { IEventEmitter } from "event/EventEmitter";
import { FireType } from "game/IGame";
import { Quality } from "game/IObject";
import { IGameOptionsPlayer } from "game/options/IGameOptions";
import { IHasInsulation } from "game/temperature/ITemperature";
import { EquipEffect, EquipEffectByType, EquipEffects, IContainer, ItemType, ItemTypeGroup } from "item/IItem";
import Item from "item/Item";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IOptions } from "save/data/ISaveDataGlobal";
import TileEvent from "tile/TileEvent";
import { IVector3 } from "utilities/math/IVector";
export declare const REPUTATION_MAX = 64000;
export default abstract class Human extends Entity implements IHasInsulation {
    static getNameTranslation(): Translation;
    event: IEventEmitter<this, IHumanEvents>;
    attackFromEquip: IAttackHand;
    crafted: Record<number, ICrafted>;
    customization: ICustomizations;
    deathBy: import("../language/Translation").ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equipped: Record<number, number>;
    handToUse: EquipType | undefined;
    inventory: IContainer;
    options: IOptions;
    readonly equipEffects: Map<EquipEffect, EquipEffects>;
    restData: IRestData | undefined;
    score: number;
    state: PlayerState;
    swimming: boolean;
    vehicleItemId: number | undefined;
    identifier: string;
    skill: SkillManager;
    private readonly privateStore;
    constructor();
    isLocalPlayer(): boolean;
    setOptions(options: IOptions): void;
    getEquipEffect<E extends EquipEffect>(type: E): FirstIfOne<EquipEffectByType<E>>;
    getReputation(): number;
    isResting(): boolean;
    isGhost(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    createItemInInventory(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, updateTables?: boolean): Item;
    hasHandToUse(): boolean;
    getAndSwitchHandToUse(): EquipType | undefined;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    damage(damageInfoOrAmount: IDamageInfo | number): number | undefined;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: Message | Translation, soundDelay?: number, causesBlood?: boolean): number | undefined;
    getEquippedItems(): Item[];
    getEquippedItem(slot: EquipType): Item | undefined;
    getEquipSlotForItem(item: Item): EquipType | undefined;
    getMaxHealth(): number;
    update(): void;
    updateStatsAndAttributes(): void;
    staminaReduction(skill?: SkillType, level?: number): void;
    updateReputation(reputation: number): void;
    setPaddling(paddling: boolean, itemId: number): void;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player
     */
    burn(fireType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    setPosition(point: IVector3): void;
    setZ(z: number, updateFlowField?: boolean): void;
    checkUnder(inFacingDirection?: boolean, options?: ICheckUnderOptions): ICheckUnderOptions;
    damageByInteractingWith(thing: Doodad | TileEvent, options: ICheckUnderOptions | undefined, damageLocation: EquipType): ICheckUnderOptions;
    equip(item: Item, slot: EquipType): boolean;
    unequip(item: Item): void;
    unequipAll(): void;
    canJump(): boolean;
    hasDelay(): boolean;
    addDelay(delay: number, replace?: boolean, addStaminaDelay?: boolean): void;
    /**
     * Gets a stamina penalty delay to be used for slowed actions and movement.
     * @param staminaToStartAddingDelayAt Stat value where delays start getting added from.
     */
    getStaminaDelay(staminaToStartAddingDelayAt?: number): number;
    getConsumeBonus(item: Item | undefined, skillUse?: SkillType): number;
    checkForGatherFire(): Translation | undefined;
    calculateEquipmentStats(): void;
    discoverRecipe(recipeType: ItemType, crafted?: ICrafted, discoveredClientSide?: boolean): void;
    getDamage(causesDamage: ICausesDamage, equipType?: EquipType): number;
    causeStatus(thing: Doodad | TileEvent, equipForProtection?: EquipType): void;
    getAsHuman(): Human;
    /**
     * Gets if the human is swimming (and not on a boat)
     */
    isSwimming(): boolean;
    updateSwimming(): void;
    updatePaddling(): void;
    getProducedTemperature(): number | undefined;
    getInsulation(): number;
    protected resetStatTimers(): void;
    protected getBaseStatBonuses(): OptionalDescriptions<Stat, number>;
    protected getSkillGainMultiplier(skill: SkillType): number;
    protected canSkillGain(skill: SkillType): boolean;
    protected onSkillGain(skill: SkillType, mod: number): void;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: Stat, bypass: boolean): void;
    protected calculateStats(): void;
    protected resetDefense(skipStatChangedEvent?: boolean): void;
    protected swimAndSootheCheck(options?: IGameOptionsPlayer): void;
    get asCreature(): undefined;
    get asHuman(): Human;
}
