/*!
 * Copyright 2011-2023 Unlok
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
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { Milestone } from "game/milestones/IMilestone";
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
export type EnumReferenceTypes = (typeof enumRefTypes) extends Set<infer R> ? R : never;
export type ReferenceableReferenceTypes = Exclude<ReferenceType, EnumReferenceTypes>;
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
    [ReferenceType.Action]: [ReferenceType.Action, ActionId];
    [ReferenceType.EquipSlot]: [ReferenceType.EquipSlot, EquipType];
}
export type ReferenceContext = [number, ReferenceType?];
type ReferenceId<REFTYPE extends ReferenceType> = IReferenceTypeMap[REFTYPE] extends [REFTYPE, infer IdType, any?] ? IdType : number;
export type Reference<REFTYPE extends ReferenceType | undefined = ReferenceType | undefined> = REFTYPE extends ReferenceType ? [id: ReferenceId<REFTYPE>, type: REFTYPE, context?: ReferenceContext, islandId?: IslandId, objectId?: number] : [number];
export type Referenceable = IReferenceTypeMap[ReferenceableReferenceTypes];
export type ResolveReference<REFTYPE extends ReferenceType> = IReferenceTypeMap[REFTYPE];
export type EnumReferenceResolved<REFTYPE extends EnumReferenceTypes = EnumReferenceTypes> = IReferenceTypeMap[REFTYPE];
export declare module Reference {
    function create(id: number): Reference;
    function create<REFTYPE extends ReferenceType>(id: ReferenceId<REFTYPE>, type: REFTYPE): Reference;
}
export {};
