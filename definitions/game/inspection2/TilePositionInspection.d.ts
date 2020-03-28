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
import { ICorpse } from "entity/creature/corpse/ICorpse";
import EventEmitter from "event/EventEmitter";
import { InspectType } from "game/inspection2/IInspection";
import { Context } from "game/inspection2/InfoProvider";
import Inspection from "game/inspection2/Inspection";
import { IContainer } from "item/IItem";
import Item from "item/Item";
import { ITileEvent } from "tile/ITileEvent";
import { IVector3 } from "utilities/math/IVector";
import CustomSet from "utilities/set/CustomSet";
export interface ITilePositionInspectionEvents {
    updatedInspections(type: InspectType, newInspections: CustomSet<Inspection<any>>, oldInspections?: CustomSet<Inspection<any>>): any;
}
export default class TilePositionInspection extends EventEmitter.Host<ITilePositionInspectionEvents> {
    private readonly context;
    private readonly inspections;
    private readonly position;
    private get tile();
    constructor(tilePosition: IVector3, context: Context);
    get(inspectType: InspectType): CustomSet<Inspection<any>> | undefined;
    set(inspectType: InspectType, inspections: CustomSet<Inspection<any>>): Map<InspectType, CustomSet<Inspection<any>>>;
    [Symbol.iterator](): IterableIterator<[InspectType, CustomSet<Inspection<any>>]>;
    onTileEventMove(_: any, tileEvent: ITileEvent): void;
    onTileEventCreate(_: any, tileEvent: ITileEvent): void;
    onItemCreate(_: any, item: Item): void;
    onItemMove(_: any, item: Item, oldContainer: IContainer | undefined, newContainer: IContainer): void;
    onCorpseCreate(_: any, corpse: ICorpse): void;
    private updateInspections;
    private getInspections;
}
