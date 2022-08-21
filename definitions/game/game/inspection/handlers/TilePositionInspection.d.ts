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
import type Corpse from "game/entity/creature/corpse/Corpse";
import type Entity from "game/entity/Entity";
import { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type Inspection from "game/inspection/Inspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import type { IContainer } from "game/item/IItem";
import type Item from "game/item/Item";
import type TileEvent from "game/tile/TileEvent";
import type HashSet from "utilities/collection/set/HashSet";
import type { IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
export interface ITilePositionInspectionEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default class TilePositionInspection extends InspectionsHandler {
    private readonly position;
    static create(position: IVector3, context: InfoProviderContext): TilePositionInspection;
    private get tile();
    constructor(position: Vector3, context: InfoProviderContext);
    protected onEntityMove(entity: Entity): void;
    protected onEntitySpawnOrRemove(_: any, entity: Entity): void;
    protected onTileEventMove(_: any, tileEvent: TileEvent): void;
    protected onTileEventCreate(_: any, tileEvent: TileEvent): void;
    protected onItemCreate(_: any, item: Item): void;
    protected onItemMove(_: any, _item: Item, containerFrom: IContainer | undefined, _containerFromPosition: Vector3 | undefined, containerTo: IContainer): void;
    protected onCorpseCreate(_: any, corpse: Corpse): void;
    protected onDoodadCreate(_: any, doodad: Doodad): void;
    private updateInspectionsForEntity;
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
    private getInspectType;
}
