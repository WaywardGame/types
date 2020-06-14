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
import { Context, InfoProvider } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import { TranslationGenerator } from "newui/component/IComponent";
import { IVector3 } from "utilities/math/IVector";
export default class DoodadInspection extends Inspection<Doodad> {
    static getFromTile(position: IVector3): never[] | DoodadInspection;
    constructor(doodad: Doodad);
    getId(): string;
    getBorder(): string | undefined;
    get(context: Context): ArrayOr<InfoProvider | TranslationGenerator>;
    protected onRemove(_: any, doodad: Doodad): void;
    private getQuality;
    private getDescription;
    private getWeightCapacity;
    private getTier;
    private getPreservation;
    private getPreservationMessage;
}
