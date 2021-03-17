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
import { Events } from "event/EventEmitter";
import { ActionType } from "game/entity/action/IAction";
import Entity from "game/entity/Entity";
import Human from "game/entity/Human";
import { AttackType } from "game/entity/IEntity";
import { ISkillEvents } from "game/entity/skill/SkillManager";
import { IHasImagePath, Quality } from "game/IObject";
import { ItemType, RecipeLevel } from "game/item/IItem";
import Item from "game/item/Item";
import { ITile } from "game/tile/ITerrain";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
export interface IHumanEvents extends Events<Entity>, ISkillEvents {
    /**
     * Called before consuming an item
     * @param itemType The item type
     * @param actionType The action type
     * @returns True if the human can consume the item (default logic isn't called, should use your own code for consumption), false if the human cannot consume the item, or undefined to use the default logic
     */
    canConsumeItem(itemType: ItemType, actionType: ActionType): boolean | undefined;
    /**
     * Called when an item is being dropped
     * @param item The item to be dropped
     * @param tile The tile the item will be dropped on
     * @param dropAll True if all items of this type will be dropped
     * @param dropAllQuality If not undefined, all items of this quality will be dropped
     * @returns True if the item can be dropped, false if the item can not be dropped, or undefined to use the default logic
     */
    canDropItem(item: Item, tile: ITile, dropAll: boolean, dropAllQuality: Quality | undefined): boolean | undefined;
    /**
     * Called before an npc attacks
     * @param weapon The weapon used to attack
     * @param attackType The attack type
     * @returns False if the npc cannot attack, or undefined to use the default logic
     */
    canAttack(weapon: Item | undefined, attackType: AttackType): boolean | undefined;
    calculateEquipmentStats(): any;
    /**
     * Called when checking if a human is swimming
     * @param isSwimming True if the human is swimming
     * @returns True if the human should be swimming, false if they should not be swimming, or undefined to use the default logic
     */
    isSwimming(isSwimming: boolean): boolean | undefined;
}
export interface IHairstyleDescription extends IModdable, IHasImagePath {
    name: string;
}
export interface IColorDescription extends IModdable {
    color: IRGB;
}
export interface ICustomizations {
    hairStyle: keyof typeof HairStyle;
    hairColor: keyof typeof HairColor;
    skinColor: keyof typeof SkinColor;
}
export interface ICharacter {
    name: string;
    customization: ICustomizations;
}
export declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 10,
    ShortPause = 13,
    Collision = 40,
    TurnDirection = 2,
    ReallyLongPause = 100,
    AttackAnimation = 30
}
export declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Belt = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    LeftHand = 10,
    RightHand = 11
}
export declare const equipSlotInsulationWeights: Record<EquipType, number | [number, "onlyWhenEquipped"]>;
export declare const INSULATION_MODIFIER_SWIMMING = 0.5;
export declare enum HairColor {
    "#e7c978" = 0,
    "#b9793d" = 1,
    "#b84627" = 2,
    "#7f3721" = 3,
    "#7e4b1c" = 4,
    "#422116" = 5,
    "#28222a" = 6,
    "#bfb0a8" = 7,
    "#ffffff" = 8
}
export declare enum SkinColor {
    "#fddcd4" = 0,
    "#d6be93" = 1,
    "#f0ceab" = 2,
    "#c7a077" = 3,
    "#d89a72" = 4,
    "#89623a" = 5,
    "#88563b" = 6,
    "#613429" = 7,
    "#361e1c" = 8
}
export declare enum HairStyle {
    None = 0,
    Spike = 1,
    Bun = 2,
    Ponytail = 3,
    Afro = 4,
    Bouncy = 5,
    Dreads = 6,
    Shaved = 7,
    Long = 8,
    Mohawk = 9
}
export declare enum RestCancelReason {
    CreatureNearby = 0,
    Damaged = 1,
    FullStamina = 2,
    NearbyCreatureDamagedDoodad = 3,
    CreatureDamaged = 4,
    Canceled = 5
}
export interface IRestData {
    type: RestType;
    startHealth: number;
    totalCycles: number;
    itemId?: number;
    doodadId?: number;
    cycle?: number;
    cancelReason?: RestCancelReason;
}
export declare enum RestType {
    Resting = 0,
    Sleeping = 1
}
export declare enum SkillType {
    None = 0,
    Chemistry = 1,
    Anatomy = 2,
    Marksmanship = 3,
    Blacksmithing = 4,
    Botany = 5,
    Camping = 6,
    Cartography = 7,
    Claythrowing = 8,
    Cooking = 9,
    Fishing = 10,
    Fletching = 11,
    Glassblowing = 12,
    Leatherworking = 13,
    LockPicking = 14,
    Lumberjacking = 15,
    Mining = 16,
    Mycology = 17,
    Parrying = 18,
    Stonecrafting = 19,
    Swimming = 20,
    Tactics = 21,
    Tailoring = 22,
    Throwing = 23,
    Tinkering = 24,
    Trapping = 25,
    Woodworking = 26,
    Taming = 27,
    Gardening = 28,
    Bartering = 29
}
export interface ICrafted {
    unlockTime: number;
    newUnlock: boolean;
}
export interface ICheckUnderOptions {
    autoActions?: boolean;
    enterCave?: boolean;
    forcePickup?: boolean;
    skipDoodadEvents?: boolean;
    burned?: boolean;
}
export declare const craftingChances: Descriptions<RecipeLevel, number>;
export declare const STAMINA_LOW_PENALTY_START = 15;
export interface IHumanOld extends Partial<Human> {
    skills?: Record<SkillType, {
        bonus: number;
        core: number;
    }>;
}
