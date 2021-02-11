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
import Doodad from "doodad/Doodad";
import Corpse from "entity/creature/corpse/Corpse";
import Entity from "entity/Entity";
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import { IContainer } from "item/IItem";
import Item from "item/Item";
import TileEvent from "tile/TileEvent";
import { IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
import HashSet from "utilities/set/HashSet";
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
    protected onItemMove(_: any, item: Item, oldContainer: IContainer | undefined, newContainer: IContainer): void;
    protected onCorpseCreate(_: any, corpse: Corpse): void;
    protected onDoodadCreate(_: any, doodad: Doodad): void;
    private updateInspectionsForEntity;
    protected getInspections(inspectType: InspectType): HashSet<Inspection<any>>;
    private getInspectType;
}
