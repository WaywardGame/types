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
import Doodad from "game/doodad/Doodad";
import { ActionType } from "game/entity/action/IAction";
import Corpse from "game/entity/creature/corpse/Corpse";
import Creature from "game/entity/creature/Creature";
import type { EquipType } from "game/entity/IHuman";
import { SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
import type Inspection from "game/inspection/Inspection";
import Island from "game/island/Island";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import { Milestone } from "game/milestones/IMilestone";
import { ReferenceType } from "game/reference/IReferenceManager";
import TileEvent from "game/tile/TileEvent";
import ReferenceTooltipHandler from "ui/screen/screens/game/ReferenceTooltipHandler";
import type Tooltip from "ui/tooltip/Tooltip";
declare const enumRefTypes: Set<ReferenceType.Skill | ReferenceType.Milestone | ReferenceType.Recipe | ReferenceType.ItemType | ReferenceType.Dismantle | ReferenceType.Stat | ReferenceType.Action | ReferenceType.EquipSlot>;
export declare type EnumReferenceTypes = (typeof enumRefTypes) extends Set<infer R> ? R : never;
export declare type ReferenceableReferenceTypes = Exclude<ReferenceType, EnumReferenceTypes>;
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
    [ReferenceType.Stat]: [ReferenceType.Stat, Stat];
    [ReferenceType.Action]: [ReferenceType.Action, ActionType | string, Item?];
    [ReferenceType.EquipSlot]: [ReferenceType.EquipSlot, EquipType];
}
declare type ReferenceId<REFTYPE extends ReferenceType> = IReferenceTypeMap[REFTYPE] extends [REFTYPE, infer IdType, any?] ? IdType : number;
export declare type Reference<REFTYPE extends ReferenceType | undefined = ReferenceType | undefined> = REFTYPE extends ReferenceType ? [id: ReferenceId<REFTYPE>, type: REFTYPE, context?: [number, ReferenceType?]] : [number];
export declare type Referenceable = IReferenceTypeMap[ReferenceableReferenceTypes];
export declare type ResolveReference<REFTYPE extends ReferenceType> = IReferenceTypeMap[REFTYPE];
export declare type EnumReferenceResolved<REFTYPE extends EnumReferenceTypes = EnumReferenceTypes> = IReferenceTypeMap[REFTYPE];
export declare module Reference {
    function create(id: number): Reference;
    function create<REFTYPE extends ReferenceType>(id: ReferenceId<REFTYPE>, type: REFTYPE, context?: Referenceable | number | [number, ReferenceType?]): Reference;
    function context(reference?: Reference): [number] | [id: number, type: ReferenceType.Item, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Creature, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Doodad, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.NPC, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Player, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.TileEvent, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Island, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: number, type: ReferenceType.Corpse, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: SkillType, type: ReferenceType.Skill, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: Milestone, type: ReferenceType.Milestone, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ItemType, type: ReferenceType.Recipe, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ItemType, type: ReferenceType.ItemType, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: ItemType, type: ReferenceType.Dismantle, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: Stat, type: ReferenceType.Stat, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: string | ActionType, type: ReferenceType.Action, context?: [number, (ReferenceType | undefined)?] | undefined] | [id: EquipType, type: ReferenceType.EquipSlot, context?: [number, (ReferenceType | undefined)?] | undefined] | undefined;
}
export default class ReferenceManager {
    static isEnumReference(type: ReferenceType): type is EnumReferenceTypes;
    static getList(type: ReferenceType, gameIsland?: Island): import("../entity/creature/corpse/CorpseManager").default | import("../entity/creature/CreatureManager").default | import("../doodad/DoodadManager").default | import("../item/ItemManager").default | import("../entity/npc/NPCManager").default | import("../tile/TileEventManager").default | (Player | undefined)[] | readonly Milestone[] | readonly SkillType[] | readonly ItemType[] | EquipType[] | IterableIterator<Island> | readonly Stat[] | (string | ActionType)[];
    static get(thing: Referenceable): Reference | undefined;
    static getReferenceType(thing: Value<IReferenceTypeMap>): ReferenceType;
    private referenceCursor;
    create(): number;
    get(thing: Item): Reference<ReferenceType.Item> | undefined;
    get(thing: Doodad): Reference<ReferenceType.Doodad> | undefined;
    get(thing: Creature): Reference<ReferenceType.Creature> | undefined;
    get(thing: Referenceable): Reference | undefined;
    getReferenceType(thing: Value<IReferenceTypeMap>): ReferenceType;
    resolve<REFTYPE extends ReferenceType>(reference?: Reference<REFTYPE>): IReferenceTypeMap[REFTYPE] | undefined;
    resolve(reference?: Reference): IReferenceTypeMap[ReferenceType] | undefined;
    inspect<REFTYPE extends ReferenceType>(reference: Reference<REFTYPE>, ...args: any[]): Inspection<any> | undefined;
    inspect(reference: Reference, ...args: any[]): Inspection<any> | undefined;
    tooltip(reference: Reference, initializer?: (tooltip: Tooltip, handler: ReferenceTooltipHandler) => any): (tooltip: Tooltip) => Promise<void>;
}
export {};
