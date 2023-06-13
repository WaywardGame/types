/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Doodad from "game/doodad/Doodad";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import type { IContainer } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
export default class DoodadSkillInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): DoodadSkillInfoProvider;
    private readonly containedItemsProvideSkill;
    private readonly magicalDoodadSkills;
    constructor(doodad: Doodad);
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(): LabelledValue;
    protected onItemMove(_: any, items: Item[], previousContainer: IContainer | undefined, _previousContainerTile: Tile | undefined, newContainer: IContainer): void;
}
