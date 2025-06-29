/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Game } from "@wayward/game/game/Game";
import Doodad from "@wayward/game/game/doodad/Doodad";
import type DoodadManager from "@wayward/game/game/doodad/DoodadManager";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import Creature from "@wayward/game/game/entity/creature/Creature";
import type CreatureManager from "@wayward/game/game/entity/creature/CreatureManager";
import type CorpseManager from "@wayward/game/game/entity/creature/corpse/CorpseManager";
import NPC from "@wayward/game/game/entity/npc/NPC";
import type NPCManager from "@wayward/game/game/entity/npc/NPCManager";
import Player from "@wayward/game/game/entity/player/Player";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import Island from "@wayward/game/game/island/Island";
import Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import type { EnumReferenceTypes, IReferenceTypeMap, Reference, Referenceable, ReferenceableReferenceTypes } from "@wayward/game/game/reference/IReferenceManager";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type TileEventManager from "@wayward/game/game/tile/TileEventManager";
import ReferenceTooltipHandler from "@wayward/game/ui/screen/screens/game/ReferenceTooltipHandler";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export default class ReferenceManager {
    private readonly game;
    static isEnumReference(type: ReferenceType): type is EnumReferenceTypes;
    isEnumReference(type: ReferenceType): type is EnumReferenceTypes;
    static get(thing: Referenceable): Reference | undefined;
    static getReferenceType(thing: Value<IReferenceTypeMap>): ReferenceType;
    private referenceCursor;
    private readonly referencesCache;
    constructor(game: Game);
    create(): number;
    clearCacheEntry(referenceId: string | number | undefined): void;
    reset(): void;
    getList(type: ReferenceType, gameIsland?: Island): DoodadManager | CorpseManager | CreatureManager | ItemManager | NPCManager | TileEventManager | IteratorObject<Island> | Player[] | Array<string | ActionType> | EquipType[] | readonly string[];
    get(thing: Item): Reference<ReferenceType.Item> | undefined;
    get(thing: Doodad): Reference<ReferenceType.Doodad> | undefined;
    get(thing: Creature): Reference<ReferenceType.Creature> | undefined;
    get(thing: NPC): Reference<ReferenceType.NPC> | undefined;
    get(thing: Referenceable): Reference<ReferenceableReferenceTypes> | undefined;
    getReferenceType(thing: Value<IReferenceTypeMap>): ReferenceType;
    resolve<REFTYPE extends ReferenceType>(reference?: Reference<REFTYPE>, gameIsland?: Island): IReferenceTypeMap[REFTYPE] | undefined;
    resolve(reference?: Reference, gameIsland?: Island): IReferenceTypeMap[ReferenceType] | undefined;
    private resolveInternal;
    inspect<REFTYPE extends ReferenceType>(reference: Reference<REFTYPE>, context?: InfoProviderContext): Inspection<any> | undefined;
    inspect(reference: Reference, context?: InfoProviderContext): Inspection<any> | undefined;
    tooltip(reference: Reference, initializer?: (tooltip: Tooltip, handler: ReferenceTooltipHandler) => any, context?: InfoProviderContext): (tooltip: Tooltip) => Promise<boolean>;
}
