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
import type { DoodadType, GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
import type { MoveType } from "@wayward/game/game/entity/IEntity";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import type { Stat } from "@wayward/game/game/entity/IStats";
import type { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import type { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { Quality } from "@wayward/game/game/IObject";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { ContainerSort, ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type { IOptions } from "@wayward/game/save/data/ISaveDataGlobal";
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type WorldZ from "@wayward/utilities/game/WorldZ";
export interface IAutomationContextState {
    human: Human;
    islandId: IslandId;
    /**
     * Items created via initial state
     */
    items: Item[];
}
export interface IAutomationSetup {
    options?: Partial<IOptions>;
    ui?: IAutomationSetupUi;
    world?: IAutomationSetupWorld;
    player?: IAutomationSetupPlayer;
}
export interface IAutomationSetupResult {
    player?: {
        items?: Item[];
    };
}
export interface IAutomationSetupUi {
    dialogs?: PartialRecord<DialogId, boolean>;
    actionSlots?: Array<{
        itemType?: ItemType;
        actionType?: ActionType;
        autoUse?: boolean;
    }>;
}
export interface IAutomationSetupWorld {
    /**
     * The world resets by default (entities are cleared)
     * Set to true to disable that.
     */
    disableReset?: true;
    /**
     * When set, all tiles will be set to this terrain type
     */
    defaultTerrain?: TerrainType;
    tiles?: Array<{
        type?: TerrainType;
        /**
         * Offset from the humans position
         */
        x?: number;
        /**
         * Offset from the humans position
         */
        y?: number;
        z?: WorldZ;
        items?: IAutomationSetupItem[];
        events?: TileEventType[];
        tilled?: boolean;
        fishAvailable?: number;
        depth?: number;
    }>;
    doodads?: Array<{
        type: DoodadType;
        growingStage?: GrowingStage;
        decay?: number;
        x?: number;
        y?: number;
        z?: number;
        inventory?: IAutomationSetupItemContainer;
    }>;
    creatures?: Array<{
        type: CreatureType;
        x?: number;
        y?: number;
        z?: number;
        tamed?: true;
        /** Defaults to a massive number */
        happiness?: number;
        timesPetted?: number;
        aberrant?: true;
    }>;
    corpses?: Array<{
        type: CreatureType;
        x?: number;
        y?: number;
        z?: number;
        aberrant?: true;
    }>;
    npcs?: Array<{
        type: NPCType;
        x?: number;
        y?: number;
        z?: number;
        stats?: IAutomationSetupHumanStat[];
        inventory?: IAutomationSetupItemContainer;
        moveType?: MoveType;
    }>;
}
export interface IAutomationSetupPlayer {
    alwaysPassSkillChecks?: boolean;
    position?: Partial<IVector3>;
    direction?: Direction.Cardinal;
    skills?: IAutomationSetupHumanSkill[];
    stats?: IAutomationSetupHumanStat[];
    inventory?: IAutomationSetupItemContainer;
    status?: StatusType[];
}
export interface IAutomationSetupHumanSkill {
    type: SkillType;
    value: number;
}
export interface IAutomationSetupHumanStat {
    type: Stat;
    value: number;
}
export interface IAutomationSetupItemContainer {
    sort?: ContainerSort;
    sortDirection?: SortDirection;
    stacks?: ItemType[];
    items?: IAutomationSetupItem[];
}
export interface IAutomationSetupItem {
    type: ItemType | ItemTypeGroup;
    equip?: EquipType;
    quality?: Quality;
    magics?: MagicalPropertyType[];
    durability?: number;
    weightMultiplier?: number;
}
