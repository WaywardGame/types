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
import Doodad from "game/doodad/Doodad";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import type Tile from "game/tile/Tile";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class DoodadInspection extends Inspection<Doodad> {
    static getFromTile(tile: Tile): never[] | DoodadInspection;
    static handles(type: InspectType, doodad: unknown): boolean;
    constructor(doodad: Doodad);
    getId(): string;
    getBorder(): string | undefined;
    get(context: InfoProviderContext): ArrayOr<InfoProvider | TranslationGenerator>;
    onUpdateTile(_: any, tile: Tile): void;
    protected onRemove(_: any, doodad: Doodad): void;
    private getDescription;
    private getTier;
}
