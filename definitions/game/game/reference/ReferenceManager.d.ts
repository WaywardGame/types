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
import Doodad from "game/doodad/Doodad";
import { ActionType } from "game/entity/action/IAction";
import Creature from "game/entity/creature/Creature";
import { SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import type Inspection from "game/inspection/Inspection";
import Island from "game/island/Island";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import { Milestone } from "game/milestones/IMilestone";
import type { EnumReferenceTypes, IReferenceTypeMap, Referenceable } from "game/reference/IReferenceManager";
import { Reference, ReferenceType } from "game/reference/IReferenceManager";
import ReferenceTooltipHandler from "ui/screen/screens/game/ReferenceTooltipHandler";
import type Tooltip from "ui/tooltip/Tooltip";
export default class ReferenceManager {
    private readonly game;
    static isEnumReference(type: ReferenceType): type is EnumReferenceTypes;
    static get(thing: Referenceable): Reference | undefined;
    static getReferenceType(thing: Value<IReferenceTypeMap>): ReferenceType;
    private referenceCursor;
    constructor(game: Game);
    create(): number;
    reset(): void;
    getList(type: ReferenceType, gameIsland?: Island): import("../entity/creature/corpse/CorpseManager").default | import("../entity/creature/CreatureManager").default | import("../doodad/DoodadManager").default | import("../item/ItemManager").default | import("../entity/npc/NPCManager").default | import("../tile/TileEventManager").default | Player[] | import("game/entity/IHuman").EquipType[] | readonly Milestone[] | readonly SkillType[] | IterableIterator<Island> | readonly Stat[] | readonly ItemType[] | (string | ActionType)[];
    get(thing: Item): Reference<ReferenceType.Item> | undefined;
    get(thing: Doodad): Reference<ReferenceType.Doodad> | undefined;
    get(thing: Creature): Reference<ReferenceType.Creature> | undefined;
    get(thing: Referenceable): Reference | undefined;
    getReferenceType(thing: Value<IReferenceTypeMap>): ReferenceType;
    resolve<REFTYPE extends ReferenceType>(reference?: Reference<REFTYPE>, gameIsland?: Island): IReferenceTypeMap[REFTYPE] | undefined;
    resolve(reference?: Reference, gameIsland?: Island): IReferenceTypeMap[ReferenceType] | undefined;
    private resolveInternal;
    inspect<REFTYPE extends ReferenceType>(reference: Reference<REFTYPE>, ...args: any[]): Inspection<any> | undefined;
    inspect(reference: Reference, ...args: any[]): Inspection<any> | undefined;
    tooltip(reference: Reference, initializer?: (tooltip: Tooltip, handler: ReferenceTooltipHandler) => any): (tooltip: Tooltip) => Promise<void>;
}
