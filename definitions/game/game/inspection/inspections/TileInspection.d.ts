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
import type { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import type { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
import type { IVector3 } from "utilities/math/IVector";
export default class TileInspection extends Inspection<IVector3> {
    static getFromTile(position: IVector3): TileInspection;
    constructor(tile: IVector3);
    getId(): string;
    getBorder(): string | undefined;
    getTile(): import("../../tile/ITerrain").ITile;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    onUpdateTile(_: any, x: number, y: number, z: number): void;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    private getQualityColorName;
    private getQuality;
}
