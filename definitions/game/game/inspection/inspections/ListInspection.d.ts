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
import type { InspectType } from "game/inspection/IInspection";
import type { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import type { TranslationGenerator } from "ui/component/IComponent";
export default abstract class ListInspection<I extends Inspection<any>> extends Inspection<I[]> {
    constructor(inspectType: InspectType, ...inspections: I[]);
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getId(): string;
    protected getInspectionTranslation(inspection: I, context: InfoProviderContext): import("../../../language/impl/TranslationImpl").default;
}
