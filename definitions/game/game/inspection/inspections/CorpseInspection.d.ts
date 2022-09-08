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
import Corpse from "game/entity/creature/corpse/Corpse";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import Inspection from "game/inspection/Inspection";
import type { IVector3 } from "utilities/math/IVector";
export default class CorpseInspection extends Inspection<Corpse> {
    static getFromTile(position: IVector3): CorpseInspection[];
    static handles(type: InspectType, corpse: unknown): boolean;
    constructor(corpse: Corpse);
    get(context: InfoProviderContext): (0 | LabelledValue | import("game/inspection/InfoProvider").SimpleInfoProvider)[];
    private getDecay;
    private decay;
    private shouldRefreshDecay;
    getId(): string;
    getDefaultDisplayLevel(): InfoDisplayLevel;
    protected onCorpseRemove(_: any, corpse: Corpse): void;
}
