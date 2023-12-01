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
import Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type Tile from "@wayward/game/game/tile/Tile";
export default class CorpseInspection extends Inspection<Corpse> {
    static getFromTile(tile: Tile): CorpseInspection[];
    static handles(type: InspectType, corpse: unknown): boolean;
    constructor(corpse: Corpse);
    get(context: InfoProviderContext): Array<0 | LabelledValue | SimpleInfoProvider>;
    private getDecay;
    private decay;
    private shouldRefreshDecay;
    getId(): string;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    protected onCorpseRemove(_: any, corpse: Corpse): void;
}
