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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Entity from "@wayward/game/game/entity/Entity";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Inspection from "@wayward/game/game/inspection/Inspection";
import InspectionsHandler from "@wayward/game/game/inspection/InspectionsHandler";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type HashSet from "@wayward/utilities/collection/set/HashSet";
export interface ITilePositionInspectionEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default class TilePositionInspection extends InspectionsHandler {
    private readonly tile;
    constructor(tile: Tile, context: InfoProviderContext);
    protected onEntityMove(entity: Entity): void;
    protected onEntitySpawnOrRemove(_: any, entity: Entity): void;
    protected onTileEventMove(tileEvent: TileEvent): void;
    protected onTileEventCreate(_: any, tileEvent: TileEvent): void;
    protected onItemCreate(_: any, item: Item): void;
    protected onItemMove(_: any, _items: Item[], containerFrom: IContainer | undefined, _containerFromTile: Tile | undefined, containerTo: IContainer): void;
    protected onCorpseCreate(_: any, corpse: Corpse): void;
    protected onDoodadCreate(_: any, doodad: Doodad): void;
    private updateInspectionsForEntity;
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
    private getInspectType;
    private objectIsOrWasInTile;
}
