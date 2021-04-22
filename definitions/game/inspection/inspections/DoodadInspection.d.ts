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
import Doodad from "game/doodad/Doodad";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import { TranslationGenerator } from "ui/component/IComponent";
import { IVector3 } from "utilities/math/IVector";
export default class DoodadInspection extends Inspection<Doodad> {
    static getFromTile(position: IVector3): never[] | DoodadInspection;
    static handles(type: InspectType, doodad: unknown): boolean;
    constructor(doodad: Doodad);
    getId(): string;
    getBorder(): string | undefined;
    get(context: InfoProviderContext): ArrayOr<InfoProvider | TranslationGenerator>;
    onUpdateTile(_: any, x: number, y: number, z: number): void;
    protected onRemove(_: any, doodad: Doodad): void;
    private getDescription;
    private getTier;
}
