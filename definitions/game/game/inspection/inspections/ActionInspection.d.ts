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
import type { ActionId, IUsableActionPossibleUsing } from "game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "game/entity/action/usable/IUsableAction";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import type { EnumReferenceResolved } from "game/reference/IReferenceManager";
import { ReferenceType } from "game/reference/IReferenceManager";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { ActionSlot } from "ui/screen/screens/game/static/ActionBar";
export default class ActionInspection extends Inspection<ActionId | undefined> {
    private readonly slot?;
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    private readonly item?;
    using?: IUsableActionPossibleUsing;
    constructor(value?: string | EnumReferenceResolved<ReferenceType.Action>, slot?: ActionSlot | undefined);
    setUsing(using?: IUsableActionPossibleUsing): this;
    setContext(context: UsableActionDisplayContext): this;
    getId(): string;
    private getActionId;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getTranslation;
    private getActionDiscovered;
    private getActionTier;
    private getActionUsability;
}
