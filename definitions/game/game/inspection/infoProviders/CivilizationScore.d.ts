/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
export default class CivilizationInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): 0 | CivilizationInfoProvider;
    private readonly civilizationScore;
    private readonly fullCivilizationScore;
    constructor(doodad: Doodad);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(): LabelledValue;
    protected onItemMove(_: any, items: Item[], previousContainer: IContainer | undefined, _previousContainerTile: Tile | undefined, newContainer: IContainer): void;
    private getCivilizationScore;
}
