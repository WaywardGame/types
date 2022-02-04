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
import type { IEventEmitter } from "event/EventEmitter";
import Doodad from "game/doodad/Doodad";
import type { IDamageInfo } from "game/entity/creature/ICreature";
import Entity from "game/entity/Entity";
import type { ICausesDamage } from "game/entity/IEntity";
import type { ICheckUnderOptions, ICrafted, ICustomizations, IHumanEvents, IRestData, RestCancelReason } from "game/entity/IHuman";
import { EquipType, SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import type { IAttackHand, IMobCheck, IMovementIntent, IWalkPath } from "game/entity/player/IPlayer";
import { WeightStatus, PlayerState } from "game/entity/player/IPlayer";
import PlayerDefense from "game/entity/player/PlayerDefense";
import SkillManager from "game/entity/skill/SkillManager";
import { StatChangeCurrentTimerStrategy } from "game/entity/StatFactory";
import { FireType } from "game/IGame";
import type { Quality } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type { EquipEffectByType, EquipEffects, IContainer, IRanged, ItemType, ItemTypeGroup } from "game/item/IItem";
import { EquipEffect } from "game/item/IItem";
import type Item from "game/item/Item";
import ItemReference from "game/item/ItemReference";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import type { IGameOptionsPlayer } from "game/options/IGameOptions";
import type { IHasInsulation } from "game/temperature/ITemperature";
import { TempType } from "game/temperature/ITemperature";
import type TileEvent from "game/tile/TileEvent";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import type { IOptions } from "save/data/ISaveDataGlobal";
import type { IVector2, IVector3 } from "utilities/math/IVector";
export declare const REPUTATION_MAX = 64000;
export default abstract class Human extends Entity implements IHasInsulation {
    static getNameTranslation(): import("../../language/impl/TranslationImpl").default;
    event: IEventEmitter<this, IHumanEvents>;
    attackFromEquip: IAttackHand;
    crafted: Record<number, ICrafted>;
    customization: ICustomizations;
    deathBy: import("language/ITranslation").ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equippedReferences: Map<EquipType, ItemReference>;
    handToUse: EquipType | undefined;
    inventory: IContainer;
    options: Readonly<IOptions>;
    islandId: IslandId;
    readonly equipEffects: Map<EquipEffect, EquipEffects>;
    restData: IRestData | undefined;
    score: number;
    state: PlayerState;
    swimming: boolean;
    vehicleItemReference: ItemReference | undefined;
    readonly movementIntent: IMovementIntent;
    walkPath: IWalkPath | undefined;
    identifier: string;
    skill: SkillManager;
    private readonly privateStore;
    constructor();
    createSkillManager(): SkillManager;
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
    capReputation(): void;
    setPaddling(item: Item | undefined, extinguishTorches?: boolean): void;
    getWeightStatus(): WeightStatus;
    /**
     * Extinguishes all torches the player is holding.
     */
    extinguishTorches(): void;
    rangeAction(weapon: Item | undefined, ranged: IRanged | undefined, bonusMagicalType: MagicalPropertyType, skillType: SkillType, useMaxRange?: boolean): {
        mobCheck: IMobCheck;
        bonusRange: number;
        actionRange: number;
    };
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    getBurnDamage(fireType: FireType, skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player
     */
    burn(fireType: FireType, skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    setPosition(point: IVector3): void;
    setZ(z: number, updateFlowField?: boolean): void;
    getMovementIntent(): IMovementIntent;
    updateMovementIntent(movementIntent: IMovementIntent): boolean;
    hasWalkPath(): boolean;
    walkAlongPath(path: IVector2[] | undefined, force?: boolean): void;
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
    getSkillBonus(skillUse?: SkillType): number;
    getQualityBonus(item: Item | undefined): number;
    checkForGatherFire(): Translation | undefined;
    calculateEquipmentStats(): void;
    private recalculateInsulation;
    private getEquipmentInsulation;
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
    /**
     * Returns the bartering bonus for a given credit value
     */
    getBarteringBonus(baseCredits: number): number;
    getInsulation(type: TempType): number;
    protected resetStatTimers(type?: StatChangeCurrentTimerStrategy): void;
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
