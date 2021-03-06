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
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import Translation from "language/Translation";
export default abstract class ListInspection<I extends Inspection<any>> extends Inspection<I[]> {
    constructor(inspectType: InspectType, ...inspections: I[]);
    get(context: InfoProviderContext): Translation;
    getId(): string;
    protected getInspectionTranslation(inspection: I, context: InfoProviderContext): Translation;
}
