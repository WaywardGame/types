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
import Doodad from "game/doodad/Doodad";
import Corpse from "game/entity/creature/corpse/Corpse";
import Creature from "game/entity/creature/Creature";
import { SkillType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
import Island from "game/Island";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import { Milestone } from "game/milestones/IMilestone";
import { ReferenceType } from "game/reference/IReferenceManager";
import TileEvent from "game/tile/TileEvent";
export declare type Reference = [number, ReferenceType?];
declare const enumRefTypes: Set<ReferenceType.Skill | ReferenceType.Milestone | ReferenceType.Recipe | ReferenceType.ItemType | ReferenceType.Dismantle>;
declare type EnumReferenceTypes = (typeof enumRefTypes) extends Set<infer R> ? R : never;
declare type ReferenceableReferenceTypes = Exclude<ReferenceType, EnumReferenceTypes>;
interface IReferenceTypeMap {
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
}
export declare type Referenceable = IReferenceTypeMap[ReferenceableReferenceTypes];
export default class ReferenceManager {
    static isEnumReference(type: ReferenceType): type is EnumReferenceTypes;
    static getList(type: ReferenceType, gameIsland?: Island): Player[] | SaferArray<Item> | readonly Milestone[] | SaferArray<Corpse> | SaferArray<Doodad> | SaferArray<Creature> | SaferArray<NPC> | SaferArray<TileEvent> | readonly SkillType[] | readonly ItemType[] | IterableIterator<Island>;
    private referenceCursor;
    create(): number;
    get(thing: Referenceable): Reference | undefined;
    resolve(id: number): IReferenceTypeMap[ReferenceType] | undefined;
    resolve<R extends ReferenceType>(id: number, type: R): IReferenceTypeMap[R] | undefined;
    resolve(id: number, type?: ReferenceType): IReferenceTypeMap[ReferenceType] | undefined;
    inspect(id: number, type?: ReferenceType, ...args: any[]): import("../inspection/Inspection").default<any> | undefined;
    tooltip(id: number, type?: ReferenceType, ...args: any[]): (tooltip: import("../../ui/component/IComponent").ITooltip) => import("../../ui/component/IComponent").ITooltip | undefined;
    private getReferenceType;
}
export {};
