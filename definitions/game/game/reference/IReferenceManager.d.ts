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
import type Doodad from "game/doodad/Doodad";
import type { ActionId } from "game/entity/action/usable/IUsableAction";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type Creature from "game/entity/creature/Creature";
import type { EquipType, SkillType } from "game/entity/IHuman";
import type { Stat } from "game/entity/IStats";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import type { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { Milestone } from "game/milestones/IMilestone";
import type ReferenceManager from "game/reference/ReferenceManager";
import type TileEvent from "game/tile/TileEvent";
export interface IReferenceable {
    /**
     * Do not use this property directly, instead use `game.references.getReference()
     */
    referenceId?: number;
}
export declare enum ReferenceType {
    Item = 0,
    Creature = 1,
    Doodad = 2,
    NPC = 3,
    Player = 4,
    TileEvent = 5,
    Island = 6,
    Corpse = 7,
    Skill = 8,
    Milestone = 9,
    Recipe = 10,
    ItemType = 11,
    Dismantle = 12,
    Stat = 13,
    Action = 14,
    EquipSlot = 15
}
export declare const enumRefTypes: Set<ReferenceType.Skill | ReferenceType.Milestone | ReferenceType.Recipe | ReferenceType.ItemType | ReferenceType.Dismantle | ReferenceType.Stat | ReferenceType.Action | ReferenceType.EquipSlot>;
export declare type EnumReferenceTypes = (typeof enumRefTypes) extends Set<infer R> ? R : never;
export declare type ReferenceableReferenceTypes = Exclude<ReferenceType, EnumReferenceTypes>;
export declare const referenceableRefTypes: Set<ReferenceableReferenceTypes>;
export interface IReferenceTypeMap {
    [ReferenceType.Item]: Item;
    [ReferenceType.Creature]: Creature;
    [ReferenceType.Doodad]: Doodad;
    [ReferenceType.NPC]: NPC;
    [ReferenceType.Player]: Player;
    [ReferenceType.TileEvent]: TileEvent;
    [ReferenceType.Island]: Island;
    [ReferenceType.Corpse]: Corpse;
    [ReferenceType.Skill]: [ReferenceType.Skill, SkillType];
    [ReferenceType.Milestone]: [ReferenceType.Milestone, Milestone];
    [ReferenceType.Recipe]: [ReferenceType.Recipe, ItemType];
    [ReferenceType.ItemType]: [ReferenceType.ItemType, ItemType];
    [ReferenceType.Dismantle]: [ReferenceType.Dismantle, ItemType];
    [ReferenceType.Stat]: [ReferenceType.Stat, Stat];
    [ReferenceType.Action]: [ReferenceType.Action, ActionId, Item?];
    [ReferenceType.EquipSlot]: [ReferenceType.EquipSlot, EquipType];
}
declare type ReferenceId<REFTYPE extends ReferenceType> = IReferenceTypeMap[REFTYPE] extends [REFTYPE, infer IdType, any?] ? IdType : number;
export declare type Reference<REFTYPE extends ReferenceType | undefined = ReferenceType | undefined> = REFTYPE extends ReferenceType ? [id: ReferenceId<REFTYPE>, type: REFTYPE, context?: [number, ReferenceType?]] : [number];
export declare type Referenceable = IReferenceTypeMap[ReferenceableReferenceTypes];
export declare type ResolveReference<REFTYPE extends ReferenceType> = IReferenceTypeMap[REFTYPE];
export declare type EnumReferenceResolved<REFTYPE extends EnumReferenceTypes = EnumReferenceTypes> = IReferenceTypeMap[REFTYPE];
export declare module Reference {
    function setReferenceResolver(resolver: typeof ReferenceManager.get): void;
    function create(id: number): Reference;
    function create<REFTYPE extends ReferenceType>(id: ReferenceId<REFTYPE>, type: REFTYPE, context?: Referenceable | number | [number, ReferenceType?]): Reference;
    function context(reference?: Reference): [number] | [id: number, type: ReferenceType.Item, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Creature, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Doodad, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.NPC, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Player, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.TileEvent, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Island, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Corpse, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: SkillType, type: ReferenceType.Skill, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: Milestone, type: ReferenceType.Milestone, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ItemType, type: ReferenceType.Recipe, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ItemType, type: ReferenceType.ItemType, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ItemType, type: ReferenceType.Dismantle, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: Stat, type: ReferenceType.Stat, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ActionId, type: ReferenceType.Action, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: EquipType, type: ReferenceType.EquipSlot, context?: [number, (ReferenceType | undefined)?] | undefined] | undefined;
}
export {};
