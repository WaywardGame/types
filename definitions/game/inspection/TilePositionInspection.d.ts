/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Doodad from "doodad/Doodad";
import { ICorpse } from "entity/creature/corpse/ICorpse";
import Entity from "entity/Entity";
import EventEmitter from "event/EventEmitter";
import { InspectType } from "game/inspection/IInspection";
import { Context } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import { IContainer } from "item/IItem";
import Item from "item/Item";
import TileEvent from "tile/TileEvent";
import { IVector3 } from "utilities/math/IVector";
import HashSet from "utilities/set/HashSet";
export interface ITilePositionInspectionEvents {
    updatedInspections(type: InspectType, newInspections: HashSet<Inspection<any>>, oldInspections?: HashSet<Inspection<any>>): any;
}
export default class TilePositionInspection extends EventEmitter.Host<ITilePositionInspectionEvents> {
    private readonly context;
    private readonly inspections;
    private readonly position;
    private get tile();
    constructor(tilePosition: IVector3, context: Context);
    get(inspectType: InspectType): HashSet<Inspection<any>> | undefined;
    set(inspectType: InspectType, inspections: HashSet<Inspection<any>>): Map<InspectType, HashSet<Inspection<any>>>;
    [Symbol.iterator](): IterableIterator<[InspectType, HashSet<Inspection<any>>]>;
    types(): import("@wayward/goodstream/Stream").default<InspectType>;
    protected onEntityMove(entity: Entity): void;
    protected onEntitySpawnOrRemove(_: any, entity: Entity): void;
    protected onTileEventMove(_: any, tileEvent: TileEvent): void;
    protected onTileEventCreate(_: any, tileEvent: TileEvent): void;
    protected onItemCreate(_: any, item: Item): void;
    protected onItemMove(_: any, item: Item, oldContainer: IContainer | undefined, newContainer: IContainer): void;
    protected onCorpseCreate(_: any, corpse: ICorpse): void;
    protected onDoodadCreate(_: any, doodad: Doodad): void;
    private updateInspectionsForEntity;
    private updateInspections;
    private getInspections;
    private getInspectType;
}
